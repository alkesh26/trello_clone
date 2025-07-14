import { useEffect, useState } from "react";
import { createCardAPI } from "../api/card";
import { Droppable, Draggable } from "@hello-pangea/dnd";

export default function Column({ title, cards = [], onCardCreated }) {
  const [isAdding, setIsAdding] = useState(false);
  const [cardText, setCardText] = useState('');
  const [shouldCreate, setShouldCreate] = useState(false);

  function handleClick() {
    setIsAdding(true);
  }

  function handleSave() {
    if (cardText.trim() === '') return;
    setShouldCreate(true);
    setIsAdding(false);
  }

  useEffect(() => {
    if (!shouldCreate || cardText.trim() === '') return;

    const createCard = async () => {
      await createCardAPI({ title: cardText, status: title });
      setShouldCreate(false);
      setCardText('');
      onCardCreated();
    };

    createCard();
  }, [shouldCreate]);

  function handleCancel() {
    setIsAdding(false);
    setCardText('');
  }

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg w-80 flex-shrink-0 p-6 border border-slate-200 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg text-slate-800">{title}</h2>
        <div className="flex space-x-2 text-slate-400">{/* icons */}</div>
      </div>

      {/* Droppable area for cards */}
      <Droppable droppableId={title}>
        {(provided) => (
          <div
            className="flex-1 space-y-2 overflow-y-auto"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {cards.map((card, index) => (
              <Draggable draggableId={card.id.toString()} index={index} key={card.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-white p-3 rounded shadow text-sm text-slate-700"
                  >
                    {card.title}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {/* Card Add Form */}
      <div className="pt-2">
        {isAdding ? (
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
        ) : (
          <button
            onClick={handleClick}
            className="flex items-center gap-2 text-slate-600 text-sm hover:underline hover:text-blue-600 transition"
          >
            <span>＋ Add a card</span>
            <span className="text-xs">🗂️</span>
          </button>
        )}
      </div>
    </div>
  );
}
