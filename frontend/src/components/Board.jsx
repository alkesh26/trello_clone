import Column from './Column'

export default function Board() {
  return (
    <div className="pt-10 pb-8 px-6 max-w-7xl mx-auto">
      <header className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md px-8 py-4 mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">My board</h1>
        {/* You can add icons or menu here if needed */}
      </header>
      <div className="flex space-x-8 overflow-x-auto w-full pb-4">
        {/* <div className="mr-8"><Column title="To Do" /></div>
        <div className="mr-8"><Column title="Doing" /></div>
        <div><Column title="Done" /></div> */}
         <Column title="To Do" />
    <Column title="Doing" />
    <Column title="Done" />
      </div>
    </div>
  )
}

