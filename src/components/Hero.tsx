export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-20">
      <div>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          Build Your Ideal
          <br />
          <span className="text-brand-gradient">Development Stack</span>
        </h1>
        <p className="mt-5 max-w-md text-base text-slate-600 sm:text-lg">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#technologies"
            className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-pink-500/20 transition-transform hover:scale-[1.02]"
          >
            Explore Technologies
          </a>
          <a
            href="#top"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400"
          >
            Learn More
          </a>
        </div>
      </div>

<div className="flex justify-center lg:justify-end">
  <img
    src="/banner-stack.png"
    alt="Illustration of a layered technology stack"
    className="w-full max-w-sm object-contain"
  />
</div>
    </section>
  );
}
