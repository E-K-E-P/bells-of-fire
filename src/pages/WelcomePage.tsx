import Button from "../components/Button";

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-[#121212] text-[#E9DCC9] flex flex-col items-center justify-center px-8 text-center">
      <div className="text-7xl">🔥</div>

      <h1 className="text-5xl font-bold mt-4">
        Bells of Fire
      </h1>

      <p className="mt-4 max-w-lg text-zinc-400 text-lg">
        Strength Forged One Workout at a Time
      </p>

      <div className="mt-12">
        <Button>
          Begin Your Journey
        </Button>
      </div>
    </main>
  );
}