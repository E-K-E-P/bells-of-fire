import { workouts } from "../../data/workouts";
import type { Workout } from "../../types/workout";

export function getRecommendedWorkout(
  lastCompletedWorkoutId?: string,
): Workout {
  if (!lastCompletedWorkoutId) {
    return workouts[0];
  }

  const completedIndex = workouts.findIndex(
    (workout) => workout.id === lastCompletedWorkoutId,
  );

  if (completedIndex === -1) {
    return workouts[0];
  }

  const nextIndex = (completedIndex + 1) % workouts.length;

  return workouts[nextIndex];
}