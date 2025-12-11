import { useAuthContext } from "./useAuthContext";
import { useWorkoutContext } from "./useWorkoutContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useWorkoutContext();
  const logout = () => {
    // remove user from local storage
    localStorage.removeItem("user");

    // update the auth context
    dispatch({ type: "LOGOUT" });
    // update the workout context
    workoutDispatch({ type: "SET_WORKOUTS", payload: null });
  };
  return { logout };
};
