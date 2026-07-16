import { useNavigate, useParams } from "react-router-dom";

import Button from "../components/Button";
import Card from "../components/cards/Card";
import { getWorkoutById } from "../features/workouts/getWorkoutById";

export default function WorkoutPage() {
  const navigate = useNavigate();
  const { workoutId } = useParams();

  const workout = getWorkoutById(workoutId);

  if (!workout) {
    return (
      <main className="min-h-screen bg-[#121212] px-6 py-10 text-[#E9DCC9]">
        <div className="mx-auto max-w-3xl">
          <Card title="Workout Not Found">
            <p className="text-zinc-400">
              We could not find that workout.
            </p>

            <div className="mt-6">
              <Button onClick={() => navigate("/home")}>
                Return Home
              </Button>
            </div>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#121212] px-6 py-10 text-[#E9DCC9]">
      <div className="mx-auto max-w-3xl space-y-6">
        <button
          type="button"
          onClick={() => navigate("/home")}
          className="text-sm text-zinc-400 transition-colors hover:text-[#E9DCC9]"
        >
          ← Back to Today’s Training
        </button>

        <header>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Week {workout.week} • Workout {workout.day}
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {workout.name}
          </h1>

          <p className="mt-2 text-zinc-400">
            {workout.zone} • {workout.durationMinutes} minutes
          </p>
        </header>

        <Card title="Workout Plan">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="rounded-xl bg-zinc-800 p-4">
              <p className="text-2xl font-semibold">
                {workout.rounds}
              </p>

              <p className="mt-1 text-sm text-zinc-400">
                Rounds
              </p>
            </div>

            <div className="rounded-xl bg-zinc-800 p-4">
              <p className="text-2xl font-semibold">
                {workout.restSeconds}
              </p>

              <p className="mt-1 text-sm text-zinc-400">
                Seconds Rest
              </p>
            </div>
          </div>
        </Card>

        <Card title="Exercises">
          <ol className="space-y-4">
            {workout.exercises.map((exercise, index) => (
              <li
                key={exercise.id}
                className="rounded-xl border border-zinc-800 bg-zinc-950 p-4"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 font-semibold text-white">
                    {index + 1}
                  </span>

                  <div>
                    <h2 className="font-semibold">
                      {exercise.name}
                    </h2>

                    <p className="mt-1 text-sm text-zinc-400">
                      {exercise.reps !== undefined &&
                        `${exercise.reps} reps`}

                      {exercise.durationSeconds !== undefined &&
                        `${exercise.durationSeconds} seconds`}

                      {exercise.weight > 0 &&
                        ` • ${exercise.weight} lb`}
                    </p>

                    {exercise.notes && (
                      <p className="mt-2 text-sm text-zinc-500">
                        {exercise.notes}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Card>

        <Button
          onClick={() =>
            alert(`Workout mode for ${workout.name} is coming next!`)
          }
        >
          Start Workout
        </Button>
      </div>
    </main>
  );
}