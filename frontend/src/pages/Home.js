import { useEffect } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

// import components
import WorkoutDetails from "../components/workoutDetails";
import WorkoutForm from "../components/WorkoutForm";
const Home = () => {
  useWorkoutContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts/");
      if (!response.ok) {
        // Handle error response
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
      <WorkoutForm />
    </div>
  );
};
export default Home;
