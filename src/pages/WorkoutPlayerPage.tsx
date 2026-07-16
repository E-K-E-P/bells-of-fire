import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../components/Button";
import { getWorkoutById } from "../features/workouts/getWorkoutById";

export default function WorkoutPlayerPage() {
  const navigate = useNavigate();
  const { workoutId } = useParams();

  const workout = getWorkoutById(workoutId);

  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);

  if (!workout) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#121212] px-6 text-[#E9DCC9]">
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            Workout Not Found
          </h1>

          <div className="mt-6">
            <Button onClick={() => navigate("/home")}>
              Return Home
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const currentExercise = workout.exercises[exerciseIndex];

  const isFirstExercise = exerciseIndex === 0;
  const isLastExercise =
    exerciseIndex === workout.exercises.length - 1;

  const isLastRound = currentRound === workout.rounds;

  function handlePrevious() {
    if (!isFirstExercise) {
      setExerciseIndex((current) => current - 1);
      return;
    }

    if (currentRound > 1) {
      setCurrentRound((current) => current - 1);
      setExerciseIndex(workout.exercises.length - 1);
    }
  }

  function handleNext() {
    if (!isLastExercise) {
      setExerciseIndex((current) => current + 1);
      return;
    }

    if (!isLastRound) {
      setCurrentRound((current) => current + 1);
      setExerciseIndex(0);
      return;
    }

    navigate(`/workout/${workout.id}/complete`);
  }

  const instruction =
    currentExercise.reps !== undefined
      ? `${currentExercise.reps} reps`
      : `${currentExercise.durationSeconds} seconds`;

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] px-6 py-8 text-[#E9DCC9]">
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col">
        <header className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(`/workout/${workout.id}`)}
            className="text-sm text-zinc-400 transition-colors hover:text-[#E9DCC9]"
          >
            ← Exit
          </button>

          <p className="text-sm text-zinc-400">
            Round {currentRound} of {workout.rounds}
          </p>
        </header>

        <div className="mt-8">
          <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-orange-500 transition-all"
              style={{
                width: `${
                  ((exerciseIndex + 1) /
                    workout.exercises.length) *
                  100
                }%`,
              }}
            />
          </div>

          <p className="mt-3 text-center text-sm text-zinc-500">
            Exercise {exerciseIndex + 1} of{" "}
            {workout.exercises.length}
          </p>
        </div>

        <section className="flex flex-1 flex-col items-center justify-center py-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Current Exercise
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            {currentExercise.name}
          </h1>

          <p className="mt-8 text-6xl font-bold">
            {instruction}
          </p>

          {currentExercise.weight > 0 && (
            <p className="mt-4 text-2xl text-zinc-300">
              {currentExercise.weight} lb kettlebell
            </p>
          )}

          {currentExercise.notes && (
            <p className="mt-8 max-w-md leading-relaxed text-zinc-400">
              {currentExercise.notes}
            </p>
          )}
        </section>

        <footer className="space-y-3">
          <Button onClick={handleNext}>
            {isLastExercise && isLastRound
              ? "Finish Workout"
              : isLastExercise
                ? "Finish Round"
                : "Next Exercise"}
          </Button>

          {(!isFirstExercise || currentRound > 1) && (
            <button
              type="button"
              onClick={handlePrevious}
              className="w-full rounded-xl px-6 py-3 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-[#E9DCC9]"
            >
              Previous Exercise
            </button>
          )}
        </footer>
      </div>
    </main>
  );
}