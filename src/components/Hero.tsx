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
        <svg
          viewBox="0 0 400 340"
          className="w-full max-w-sm"
          role="img"
          aria-label="Illustration of a layered technology stack"
        >
          <defs>
            <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--brand-start)" />
              <stop offset="50%" stopColor="var(--brand-mid)" />
              <stop offset="100%" stopColor="var(--brand-end)" />
            </linearGradient>
          </defs>
          <g opacity="0.12">
            <ellipse cx="200" cy="290" rx="150" ry="30" fill="url(#heroGrad)" />
          </g>
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(0 ${i * 70})`}>
              <polygon
                points="200,40 320,80 200,120 80,80"
                fill="none"
                stroke="url(#heroGrad)"
                strokeWidth="2.5"
                opacity={1 - i * 0.22}
              />
            </g>
          ))}
          <circle cx="200" cy="80" r="5" fill="var(--brand-mid)" />
        </svg>
      </div>
    </section>
  );
}
