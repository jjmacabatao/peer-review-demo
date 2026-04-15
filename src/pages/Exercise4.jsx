import ExerciseLayout from '../components/ExerciseLayout'

/*
 * EXERCISE 4 — Render a list
 *
 * An array of `fruits` is defined below and a <ul> element is present.
 * However, the list renders nothing because the .map() callback returns null.
 *
 * TODO: Fix the .map() callback so that each fruit is rendered as an <li>.
 *       Remember to add a `key` prop (use the fruit name or its index).
 *
 * Expected result: a bullet list showing Apple, Banana, Cherry, Mango, Strawberry.
 */
export default function Exercise4() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Mango', 'Strawberry']

  return (
    <ExerciseLayout
      number={4}
      title="Render a list"
      instructions={
        <>
          An array <code>fruits</code> is ready. The <code>.map()</code> below returns{' '}
          <code>null</code> — fix it to render each fruit as an <code>&lt;li&gt;</code>.
        </>
      }
    >
      <div className="py-4">
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {fruits.map((fruit, i) => (
            // TODO: return an <li> element that displays the fruit name
            <li key={i}>{fruit}</li>
          ))}
        </ul>
      </div>
    </ExerciseLayout>
  )
}
