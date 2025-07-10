import Column from './Column'

export default function Board() {
  return (
    <div className="min-h-screen bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />

      <div className="relative z-10 flex flex-col min-h-screen overflow-auto w-full">
        <div className="pt-10 pb-8 px-4 sm:px-6 max-w-7xl w-full mx-auto">
          <header className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md px-6 py-4 mb-8 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-800">My board</h1>
          </header>

          <div className="flex overflow-x-auto space-x-4 sm:space-x-8 pb-4">
            <Column title="To Do" />
            <Column title="Doing" />
            <Column title="Done" />
          </div>
        </div>
      </div>
    </div>
  )
}
