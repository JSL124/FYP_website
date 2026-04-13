export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-950 px-6 text-stone-50">
      <section className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/30 backdrop-blur">
        <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
          FYP Website
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Next.js project scaffold is ready.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
          This is a clean starting point for your advertisement and online
          documentation website.
        </p>
      </section>
    </main>
  );
}
