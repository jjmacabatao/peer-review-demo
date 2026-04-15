import { Link } from 'react-router-dom'

export default function ExerciseLayout({ number, title, instructions, children }) {
  return (
    <div>
      <div className="mb-1 flex items-center gap-2">
        <Link to="/" className="text-sm text-indigo-500 hover:underline">
          ← All exercises
        </Link>
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mt-2 mb-1">
        Exercise {number}: {title}
      </h1>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 text-sm text-amber-800">
        <strong>📝 What to do:</strong> {instructions}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm px-6 py-4">
        {children}
      </div>

      <p className="mt-6 text-xs text-gray-400 text-center">
        When you are done, open a pull request and ask a classmate to review it.
      </p>
    </div>
  )
}
