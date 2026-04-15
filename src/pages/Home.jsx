import { Link } from 'react-router-dom'

const exercises = [
  {
    id: 1,
    title: 'Wire a button to its handler',
    description: 'A button exists and so does an onClick handler — but they are not connected. Link them together.',
  },
  {
    id: 2,
    title: 'Add a missing button',
    description: 'The form renders correctly but the Submit button is completely missing. Add it.',
  },
  {
    id: 3,
    title: 'Display an image',
    description: 'An image URL and alt text are ready. All you need to do is add the <img> element.',
  },
  {
    id: 4,
    title: 'Render a list',
    description: 'An array of items exists but the list renders nothing. Fix the .map() so each item appears.',
  },
  {
    id: 5,
    title: 'Fix the broken style',
    description: 'A card component is unstyled. Add the missing Tailwind class to make the card look correct.',
  },
]

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Peer Review Demo</h1>
      <p className="text-gray-500 mb-8 text-sm">
        Each exercise below contains a small intentional issue. Fix it, open a pull request, and swap
        reviews with a classmate.
      </p>
      <div className="grid gap-4">
        {exercises.map(({ id, title, description }) => (
          <Link
            key={id}
            to={`/exercise/${id}`}
            className="block p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-400 transition-all"
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                Exercise {id}
              </span>
              <h2 className="font-semibold text-gray-800">{title}</h2>
            </div>
            <p className="text-sm text-gray-500">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
