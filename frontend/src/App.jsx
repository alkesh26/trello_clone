import './App.css'
import Board from './components/Board'

function App() {
  return (
    <div className="min-h-screen bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />
      <div className="relative z-10 flex flex-col">
        <div className="overflow-auto h-screen w-screen">
          <Board />
        </div>
      </div>
    </div>
  )
}

export default App
