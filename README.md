# Dev Stack

Build your ideal development stack — browse technologies across Frontend,
Backend, Database, Language, Styling, DevOps, and Tools categories, and add
the ones you want to your personal stack.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- react-toastify

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   Navbar, Hero, TechCard, TechGrid, YourStack, Footer, Loader
  data/         technologies.json — the 15 technologies shown in the grid
  types/        Technology type definition
  index.css     Tailwind import + the single brand-gradient source of truth
  App.tsx       State management: stack selection, add/remove/remove-all, toasts
```

## Notes

- The brand gradient (orange → pink → violet) is defined once as CSS custom
  properties in `src/index.css` (`--brand-start`, `--brand-mid`, `--brand-end`).
  Change those three values to re-theme the whole app.
- Technology data is loaded from `src/data/technologies.json` via a dynamic
  import (not hardcoded in the component), with a loading state shown while
  it resolves.
- Duplicate "Add to Stack" attempts show a warning toast instead of adding a
  second copy; once added, that card's button is disabled and reads
  "✓ Added to Stack".
