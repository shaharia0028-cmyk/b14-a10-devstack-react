import { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { Technology } from "./types/technology";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import TechGrid from "./components/TechGrid";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching the technology data (it's local JSON, so this
  // resolves almost instantly — the loading state still exists and runs).
  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    import("./data/technologies.json")
      .then((mod) => {
        if (!cancelled) {
          setTechnologies(mod.default as Technology[]);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const stackIds = useMemo(() => new Set(stack.map((t) => t.id)), [stack]);

  const handleAdd = (tech: Technology) => {
    if (stackIds.has(tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemove = (id: string) => {
    const tech = stack.find((t) => t.id === id);
    setStack((prev) => prev.filter((t) => t.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Your stack has been cleared.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <main id="technologies" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Explore the <span className="text-brand-gradient">Technologies</span>
          </h2>
          <p className="mt-2 text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
            <TechGrid
              technologies={technologies}
              stackIds={stackIds}
              onAdd={handleAdd}
            />
            <YourStack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        )}
      </main>

      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        newestOnTop
        pauseOnHover
      />
    </div>
  );
}
