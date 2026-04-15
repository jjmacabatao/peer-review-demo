import ExerciseLayout from '../components/ExerciseLayout'

/*
 * EXERCISE 3 — Display an image
 *
 * All the information needed to show an image is already prepared:
 *   - `imageUrl`  → the URL of the image
 *   - `imageAlt`  → the alt text for accessibility
 *
 * TODO: Add an <img> element inside the placeholder div below.
 *       Use `imageUrl` as the `src` and `imageAlt` as the `alt`.
 *       Give it a width of 100% and rounded corners (use Tailwind: w-full rounded-xl).
 *
 * Expected result: a landscape photo appears in the card.
 */
export default function Exercise3() {
  const imageUrl =
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop'
  const imageAlt = 'Mountain landscape with a lake at sunset'

  return (
    <ExerciseLayout
      number={3}
      title="Display an image"
      instructions={
        <>
          Variables <code>imageUrl</code> and <code>imageAlt</code> are already defined.
          Add an <code>&lt;img&gt;</code> tag inside the placeholder below and use those variables.
        </>
      }
    >
      <div className="py-4">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl min-h-48 flex items-center justify-center text-gray-400 text-sm">
          {/* TODO: replace this comment with an <img> using imageUrl and imageAlt */}
          Image goes here
        </div>
      </div>
    </ExerciseLayout>
  )
}
