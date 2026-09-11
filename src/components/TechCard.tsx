import { useState } from "react";
import type { Technology } from "../types/technology";

interface TechCardProps {
  tech: Technology;
  added: boolean;
  onAdd: (tech: Technology) => void;
}

const DIFFICULTY_STYLES: Record<string, string> = {
  "Beginner-Friendly": "text-emerald-600 bg-emerald-50",
  Intermediate: "text-amber-600 bg-amber-50",
  Advanced: "text-rose-600 bg-rose-50",
};

export default function TechCard({ tech, added, onAdd }: TechCardProps) {
  const [iconFailed, setIconFailed] = useState(false);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        {iconFailed ? (
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-gradient text-sm font-bold text-white">
            {tech.name.charAt(0)}
          </div>
        ) : (
          <img
            src={tech.icon}
            alt=""
            className="h-10 w-10 object-contain"
            onError={() => setIconFailed(true)}
          />
        )}
        <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-base font-bold text-slate-900">{tech.name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500">
        {tech.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
          {tech.category}
        </span>
        <span
          className={`rounded-full px-2.5 py-1 font-medium ${
            DIFFICULTY_STYLES[tech.difficulty] ?? "text-slate-600 bg-slate-100"
          }`}
        >
          {tech.difficulty}
        </span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-slate-700">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" className="text-amber-400">
            <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
          </svg>
          {tech.rating.toFixed(1)}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={added}
        className={`mt-5 w-full rounded-xl py-2.5 text-sm font-semibold transition-colors ${
          added
            ? "cursor-not-allowed bg-emerald-50 text-emerald-600"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {added ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
