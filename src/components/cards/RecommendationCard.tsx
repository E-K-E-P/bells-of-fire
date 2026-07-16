import Card from "./Card";
import Button from "../Button";

type RecommendationCardProps = {
  workoutName: string;
  sequence: string;
  duration: string;
  focus: string;
  onBegin: () => void;
};

export default function RecommendationCard({
  workoutName,
  sequence,
  duration,
  focus,
  onBegin,
}: RecommendationCardProps) {
  return (
    <Card>
      <div className="space-y-6">

        <div>
          <p className="text-orange-500 font-semibold tracking-wide uppercase text-sm">
            Continue Training
          </p>

          <h2 className="text-zinc-400 mt-1">
            Next Up
          </h2>

          <p className="text-3xl font-bold mt-2">
            {workoutName}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="text-xs uppercase text-zinc-500">
              Sequence
            </p>

            <p>{sequence}</p>
          </div>

          <div>
            <p className="text-xs uppercase text-zinc-500">
              Focus
            </p>

            <p>{focus}</p>
          </div>

          <div>
            <p className="text-xs uppercase text-zinc-500">
              Duration
            </p>

            <p>{duration}</p>
          </div>

        </div>

        <Button onClick={onBegin}>
          Begin Workout
        </Button>

      </div>
    </Card>
  );
}