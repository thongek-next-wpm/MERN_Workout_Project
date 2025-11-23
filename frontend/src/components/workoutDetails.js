const WorkoutDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <h2>{workout.title}</h2>
      <p>
        <strong>Load (kg):</strong> {workout.load}
      </p>
      <p>
        <strong>Reps:</strong> {workout.reps}
      </p>
      <p>
        <strong>Created At:</strong>{" "}
        {new Date(workout.createdAt).toLocaleString()}
      </p>
    </div>
  );
};

export default WorkoutDetails;
