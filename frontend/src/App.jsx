import './App.css'
import Board from './components/Board'

function App() {
  return (
    <div className="min-h-screen bg-[url('https://source.unsplash.com/random')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />
      <div className="relative z-10 min-h-screen flex flex-col items-center text-white">
        <Board />
      </div>
    </div>
  )
}

export default App
