import Card from "../components/cards/Card";
import RecommendationCard from "../components/cards/RecommendationCard";
import { getRecommendedWorkout } from "../features/workouts/getRecommendedWorkout";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const recommendedWorkout = getRecommendedWorkout();
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#121212] text-[#E9DCC9] p-8">
      <div className="max-w-3xl mx-auto space-y-6">

        <h1 className="text-4xl font-bold">
          Today's Training
        </h1>

        <Card title="Last 7 Days">
          <p>M T W T F S S</p>

          <p> ● ○ ● ○ ○ ● ○</p>
        </Card>

        <Card title="Today's Encouragement">
          <blockquote className="italic text-zinc-300">
            "Whatever you do, work at it with all your heart."
          </blockquote>

          <p className="mt-3 text-sm text-zinc-500">
            Colossians 3:23
          </p>
        </Card>

        <RecommendationCard
          workoutName={recommendedWorkout.name}
          sequence={`Week ${recommendedWorkout.week} • Workout ${recommendedWorkout.day}`}
          duration={`${recommendedWorkout.durationMinutes} Minutes`}
          focus={recommendedWorkout.zone}
          onBegin={() => 
            navigate(`/workout/${recommendedWorkout.id}`)
          }
        />

        <Card title="Browse Workouts">
          <div className="grid grid-cols-2 gap-3">
            <button className="rounded-xl bg-zinc-800 p-4">
              Full Body
            </button>

            <button className="rounded-xl bg-zinc-800 p-4">
              Upper Body
            </button>

            <button className="rounded-xl bg-zinc-800 p-4">
              Lower Body
            </button>

            <button className="rounded-xl bg-zinc-800 p-4">
              Core
            </button>

            <button className="rounded-xl bg-zinc-800 p-4">
              Conditioning
            </button>

            <button className="rounded-xl bg-zinc-800 p-4">
              Recovery
            </button>
          </div>
        </Card>

      </div>
    </main>
  );
}