export default function Column({ title }) {
  return (
    <div className="bg-red-200 bg-white/80 backdrop-blur-md rounded-xl shadow-lg w-80 flex-shrink-0 p-6 border border-slate-200 flex flex-col min-h-[180px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg text-slate-800">{title}</h2>
        {/* Placeholder for icons/menu */}
        <div className="flex space-x-2 text-slate-400">
          {/* <span className="cursor-pointer">↔️</span>
          <span className="cursor-pointer">⋯</span> */}
        </div>
      </div>
      <div className="flex-1" />
      <div className="pt-2">
        <button className="flex items-center gap-2 text-slate-600 text-sm hover:underline hover:text-blue-600 transition">
          <span>＋ Add a card</span>
          <span className="text-xs">🗂️</span>
        </button>
      </div>
    </div>
  );
}
