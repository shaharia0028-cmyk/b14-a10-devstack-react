import { useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

function BrandMark() {
  return (
    <a href="#top" className="flex items-center shrink-0">
      <img src="/logo-text.png" alt="Dev Stack" className="h-8 w-auto object-contain" />
    </a>
  );
}

function AuthButtons() {
  return (
    <div className="flex items-center gap-3">
      <button className="text-sm font-medium text-slate-700 hover:text-slate-900">
        Sign In
      </button>
      <button className="rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-pink-500/20 transition-transform hover:scale-[1.03]">
        Sign Up
      </button>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="top" className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile: hamburger */}
        <button
          className="grid h-9 w-9 place-items-center rounded-md text-slate-700 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        {/* Desktop: brand on the left */}
        <div className="hidden md:flex">
          <BrandMark />
        </div>

        {/* Mobile: centered brand */}
        <div className="md:hidden">
          <BrandMark />
        </div>

        {/* Desktop: centered links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <a
                href="#"
                className={
                  i === 0
                    ? "text-sm font-medium text-pink-600"
                    : "text-sm font-medium text-slate-600 hover:text-slate-900"
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <AuthButtons />
      </nav>

      {/* Mobile dropdown panel */}
      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-slate-100 px-4 py-3 md:hidden">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className={
                  i === 0
                    ? "block rounded-md px-2 py-2 text-sm font-medium text-pink-600"
                    : "block rounded-md px-2 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
