import { Link, NavLink } from 'react-router-dom'

const exercises = [1, 2, 3, 4, 5]

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight hover:opacity-80">
          🎓 REDI School – AI Assisted Review Demo
        </Link>
        <div className="flex gap-2">
          {exercises.map((n) => (
            <NavLink
              key={n}
              to={`/exercise/${n}`}
              className={({ isActive }) =>
                `px-3 py-1 rounded text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white text-indigo-600'
                    : 'hover:bg-indigo-500'
                }`
              }
            >
              Ex {n}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
