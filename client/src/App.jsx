import { useState } from 'react';
import Quiz from './components/Quiz';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);


  return (
    <div className="min-h-full">
      <nav className="bg-gray-800">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-white">Wand Guesser</h1>
            <div className="text-white">cog</div>

          </div>
        </div>
      </nav>
      <div className="mx-auto max-w-6xl items-center justify-center">
        {hasStarted ? <Quiz /> :
          <>
            <div className="p-4">
              <h2 className="text-2xl"></h2>
              <p className="text-lg">Guess the wand owner based on the description</p>
            </div>
            <div className="p-4">
              <button onClick={() => setHasStarted(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Start
              </button>
            </div>
          </>}
      </div>
    </div>
  )
}