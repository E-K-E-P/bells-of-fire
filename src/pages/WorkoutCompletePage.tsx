import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { getWorkoutById } from "../features/workouts/getWorkoutById";
import { useEffect } from "react";
import { ProgressService } from "../services/ProgressServices";

export default function WorkoutCompletePage() {
  const navigate = useNavigate();
  const { workoutId } = useParams();

  const workout = getWorkoutById(workoutId);
  useEffect(() => {
  if (workout) {
    ProgressService.completeWorkout(workout.id);
  }
}, [workout]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#121212] px-6 text-[#E9DCC9]">
      <div className="w-full max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
          Workout Complete
        </p>

        <h1 className="mt-5 text-5xl font-bold">
          Well done.
        </h1>

        <p className="mt-5 text-lg text-zinc-400">
          2 Corinthians 13:14
        </p>

        {workout && (
          <p className="mt-10 text-sm text-zinc-500">
            {workout.name} completed
          </p>
        )}

        <div className="mt-10">
          <Button onClick={() => navigate("/home")}>
            Return Home
          </Button>
        </div>
      </div>
    </main>
  );
}