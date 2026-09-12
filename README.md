
#  Project Name

**Dev Stack**



##  Description
Dev Stack is a responsive React web app for exploring popular web
development technologies. Each technology is shown as a card with its
icon, category, difficulty level, and rating, and users can add technologies
to a personal "Your Stack" panel — with duplicate protection, remove
controls, and toast notifications for every action.



##  Technologies Used
- **React 19** — UI library, with the `use()` hook + `Suspense` for data loading
- **TypeScript** — type safety across components and data models
- **Vite** — build tool and dev server
- **Tailwind CSS v4** — utility-first styling, with a single-source brand gradient theme
- **react-toastify** — toast notifications for add / remove / duplicate / clear actions



##  Features
1. **Build-your-own stack** — Add any technology to "Your Stack" with one click; attempting to add a duplicate shows a warning toast instead of adding a second copy, and an added card's button locks to "✓ Added to Stack".
2. **Fully responsive layout** — A true 3-part mobile navbar (hamburger / centered logo / auth buttons), a 1 → 2 → 3 column technology grid across mobile → tablet → desktop, and a sidebar "Your Stack" panel that sits beside the grid on larger screens.
3. **Data-driven, not hardcoded** — All technology data lives in an external `technologies.json` file and is loaded via a `Suspense`-driven promise (not hardcoded into the component), so the loading state is a real part of the render lifecycle, not a fake delay.



##  React Questions
**i. What is JSX, and why is it used in React?**
JSX lets you write HTML-looking code right inside your JavaScript. It's used because it's way easier to picture your UI this way than writing a bunch of createElement() calls by hand.

**ii. What is the difference between props and state?**
Props are data passed into a component from its parent — the component can't change them itself. State is data a component keeps and manages on its own, and it can change over time.

**iii. What does the `useState` hook do, and where did you use it in this project?**
It lets a component remember a value and re-render when that value changes. I used it to track which technologies are in "Your Stack" and whether the mobile menu is open.

**iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
useEffect runs code after the component renders — good for stuff like fetching data. Normally you'd use it to load the JSON on mount and save it into state. In this project I actually used React 19's use() hook with Suspense instead, which does something similar but built into React itself — no manual useEffect needed.

**v. Why does every item in a `.map()` list need a unique `key` prop?**
So React knows which item is which between renders. Without it, React can get confused about what changed and update the wrong elements.

**vi. What is conditional rendering? Show one place you used it.**
It just means showing different UI based on a condition. Example: in "Your Stack," if there are no items, I show "Your stack is empty." instead of the list.

**vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Parent to child: through props. Child to parent: the parent gives the child a function as a prop, and the child calls that function (like on a button click) to send info back up.
