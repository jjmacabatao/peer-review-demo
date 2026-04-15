# Peer Review Demo

A React + Vite + Tailwind CSS application built for the **ReDI School** peer code review workshop.

Each page contains a small, intentional exercise. Students fix the issue, open a pull request, and
review each other's work.

---

## Exercises

| # | Title | What's missing |
|---|-------|----------------|
| 1 | Wire a button to its handler | `onClick` not attached to the button |
| 2 | Add a missing button | Submit button not rendered in the form |
| 3 | Display an image | `<img>` element missing entirely |
| 4 | Render a list | `.map()` returns `null` for every item |
| 5 | Fix the broken style | Tailwind classes missing on the card wrapper |

---

## Getting started

```bash
npm install
npm run dev
```

The app runs at [http://localhost:5173](http://localhost:5173).

---

## Workshop workflow

1. **Fork** this repository (or clone and create a branch).
2. Navigate to an exercise page.
3. Open the corresponding file in `src/pages/Exercise{N}.jsx`.
4. Find the `TODO` comment and apply the fix.
5. Commit your change and **open a pull request** to `main`.
6. Assign a classmate as reviewer.
7. Review your classmate's pull request in return.

---

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 6
- [Tailwind CSS](https://tailwindcss.com/) v4
- [React Router](https://reactrouter.com/) v7
