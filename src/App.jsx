import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Exercise1 from './pages/Exercise1'
import Exercise2 from './pages/Exercise2'
import Exercise3 from './pages/Exercise3'
import Exercise4 from './pages/Exercise4'
import Exercise5 from './pages/Exercise5'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/1" element={<Exercise1 />} />
          <Route path="/exercise/2" element={<Exercise2 />} />
          <Route path="/exercise/3" element={<Exercise3 />} />
          <Route path="/exercise/4" element={<Exercise4 />} />
          <Route path="/exercise/5" element={<Exercise5 />} />
        </Routes>
      </main>
    </div>
  )
}
