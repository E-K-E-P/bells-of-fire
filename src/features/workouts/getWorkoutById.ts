import { workouts } from "../../data/workouts";
import type { Workout } from "../../types/workout";

export function getWorkoutById(
  workoutId: string | undefined,
): Workout | undefined {
  if (!workoutId) {
    return undefined;
  }

  return workouts.find((workout) => workout.id === workoutId);
}