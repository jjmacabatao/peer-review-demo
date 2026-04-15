import { useState } from 'react'
import ExerciseLayout from '../components/ExerciseLayout'

/*
 * EXERCISE 2 — Add a missing button
 *
 * Below is a simple feedback form with a Name field and a Message field.
 * The form works correctly but the Submit button is missing entirely.
 *
 * TODO: Add a <button> of type "submit" at the bottom of the form.
 *       Style it with Tailwind so it looks like a primary action button.
 *
 * Expected result: a styled "Submit" button appears at the bottom of the form.
 */
export default function Exercise2() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <ExerciseLayout
      number={2}
      title="Add a missing button"
      instructions={
        <>
          The feedback form below is fully wired up — but the <strong>Submit button is missing</strong>.
          Add a <code>&lt;button type=&quot;submit&quot;&gt;</code> inside the form.
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            rows={3}
            placeholder="Your message..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* TODO: add a submit button here */}

        {submitted && (
          <p className="text-green-600 font-medium text-sm">✅ Form submitted successfully!</p>
        )}
      </form>
    </ExerciseLayout>
  )
}
