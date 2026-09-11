import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  return (
    <div className="self-start rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-24">
      <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-5 flex items-center justify-center rounded-xl border border-dashed border-slate-200 py-10">
          <p className="text-sm text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <ul className="mt-5 flex flex-col gap-3">
          {stack.map((tech) => (
            <li
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-slate-100 px-3 py-2.5"
            >
              <img src={tech.icon} alt="" className="h-7 w-7 object-contain" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-800">
                  {tech.name}
                </p>
                <p className="text-xs text-slate-400">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name} from your stack`}
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-6 w-full rounded-xl border border-rose-200 py-2.5 text-sm font-semibold text-rose-500 transition-colors hover:bg-rose-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
}