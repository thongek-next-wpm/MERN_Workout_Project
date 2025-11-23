import { useEffect, useState } from "react";
// import components
import WorkoutDetails from "../components/workoutDetails";
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
          workout.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};
export default Home;
