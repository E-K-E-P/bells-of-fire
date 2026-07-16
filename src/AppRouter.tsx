import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import WorkoutPage from "./pages/WorkoutPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/workout/:workoutId" element={<WorkoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}