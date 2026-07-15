type CardProps = {
  title?: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <section
      className="
        bg-zinc-900
        rounded-2xl
        p-6
        shadow-lg
        border
        border-zinc-800
      "
    >
      {title && (
        <h2 className="text-xl font-semibold text-[#E9DCC9] mb-4">
          {title}
        </h2>
      )}

      {children}
    </section>
  );
}