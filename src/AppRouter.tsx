import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import WorkoutPage from "./pages/WorkoutPage";
import WorkoutCompletePage from "./pages/WorkoutCompletePage";
import WorkoutPlayerPage from "./pages/WorkoutPlayerPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/workout/:workoutId" element={<WorkoutPage />} />
        <Route path="/workout/:workoutId/play" element={<WorkoutPlayerPage />} />
        <Route path="/workout/:workoutId/complete" element={<WorkoutCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
}