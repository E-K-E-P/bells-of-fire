export type WorkoutZone =
  | "Full Body"
  | "Upper Body"
  | "Lower Body"
  | "Core"
  | "Conditioning"
  | "Recovery";

export type Exercise = {
  id: string;
  name: string;
  reps?: number;
  durationSeconds?: number;
  weight: number;
  notes?: string;
};

export type Workout = {
  id: string;
  week: number;
  day: number;
  name: string;
  zone: WorkoutZone;
  secondaryZones: WorkoutZone[];
  durationMinutes: number;
  rounds: number;
  restSeconds: number;
  exercises: Exercise[];
};