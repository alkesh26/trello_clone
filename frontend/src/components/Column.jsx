import { useEffect, useState } from "react";
import { createCardAPI } from "../api/card"

export default function Column({ title }) {
  const [isAdding, setIsAdding] = useState(false);
  const [cardText, setCardText] = useState('');
  const [shouldCreate, setShouldCreate] = useState(false);

  function handleClick() {
    setIsAdding(true);
  }

  function handleSave() {
    if(cardText.trim() === '') return;
    setShouldCreate(true);
    setIsAdding(false);
  }

  useEffect(() => {
    if(!shouldCreate || cardText.trim() === '') return;

    const createCard = async () => {
      await createCardAPI({title: cardText, status: title})

      setShouldCreate(false);
      setCardText('');
    };

    createCard();
  }, [shouldCreate])

  function handleCancel() {
    setIsAdding(false);
    setCardText('');
  }

  return (
    <div className="bg-red-200 bg-white/80 backdrop-blur-md rounded-xl shadow-lg w-80 flex-shrink-0 p-6 border border-slate-200 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg text-slate-800">{title}</h2>
        {/* Placeholder for icons/menu */}
        <div className="flex space-x-2 text-slate-400">
          {/* <span className="cursor-pointer">↔️</span>
          <span className="cursor-pointer">⋯</span> */}
        </div>
      </div>
      <div className="pt-2">
        {
          isAdding ?
            <div className="space-y-2">
              <textarea
                name="cardText"
                className="w-full p-2 border border-slate-300 rounded text-sm"
                placeholder="Enter card title"
                value={cardText}
                onChange={(e) => setCardText(e.target.value)}
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                >
                  Add card
                </button>
                <button
                  onClick={handleCancel}
                  className="text-slate-500 text-sm hover:underline"
                >
                  X
                </button>
              </div>
            </div>
          :
          <button
            onClick={handleClick}
            className="flex items-center gap-2 text-slate-600 text-sm hover:underline hover:text-blue-600 transition"
          >
            <span>＋ Add a card</span>
            <span className="text-xs">🗂️</span>
          </button>
        }
      </div>
    </div>
  );
}
