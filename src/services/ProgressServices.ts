import { getRecommendedWorkout } from "../features/workouts/getRecommendedWorkout";

const STORAGE_KEY = "bells-of-fire-progress";

type Progress = {
  lastCompletedWorkoutId?: string;
};

function loadProgress(): Progress {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return {};
  }

  try {
    return JSON.parse(saved) as Progress;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return {};
  }
}

function saveProgress(progress: Progress) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(progress),
  );
}

export const ProgressService = {
  getProgress(): Progress {
    return loadProgress();
  },

  getRecommendedWorkout() {
    const progress = loadProgress();

    return getRecommendedWorkout(
      progress.lastCompletedWorkoutId,
    );
  },

  completeWorkout(workoutId: string) {
    saveProgress({
      lastCompletedWorkoutId: workoutId,
    });
  },

  resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
  },
};