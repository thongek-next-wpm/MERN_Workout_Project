import { useEffect, useState } from "react";
const Home = () => {
  const [workout, setWorkout] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts/");
      if (!response.ok) {
        // Handle error response
        console.error("Failed to fetch workouts:", response.status);
        return;
      }
      const json = await response.json();
      if (json) {
        setWorkout(json);
      } else {
        // Handle empty response
        console.error("Empty response from server");
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workout &&
          workout.map((workout) => <p key={workout._id}>{workout.title}</p>)}
      </div>
    </div>
  );
};
export default Home;
