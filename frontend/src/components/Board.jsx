import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Column from "./Column";
import { useEffect, useState } from "react";
import { getCardsAPI, updateCardAPI } from "../api/card";
import { groupCardsByStatus } from "../utils/cardsHelper";

export default function Board() {
  const [cards, setCards] = useState({});

  const fetchCards = async () => {
    const response = await getCardsAPI();
    setCards(groupCardsByStatus(response));
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const onDragEnd = async (result) => {
    const { source, destination, draggableId } = result;

    if (!destination || source.droppableId === destination.droppableId) return;

    const card = cards[source.droppableId].find((c) => c.id.toString() === draggableId);

    // Update local state
    const newSource = [...cards[source.droppableId]].filter((c) => c.id.toString() !== draggableId);
    const newDest = [...(cards[destination.droppableId] || []), { ...card, status: destination.droppableId }];

    setCards({
      ...cards,
      [source.droppableId]: newSource,
      [destination.droppableId]: newDest,
    });

    // Update backend
    await updateCardAPI(draggableId, { status: destination.droppableId });
  };

  return (
    <div className="min-h-screen bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />
      <div className="relative z-10 flex flex-col min-h-screen overflow-auto w-full">
        <div className="pt-10 pb-8 px-4 sm:px-6 max-w-7xl w-full mx-auto">
          <header className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md px-6 py-4 mb-8 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-800">My board</h1>
          </header>

          <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex overflow-x-auto space-x-4 sm:space-x-8 pb-4">
              {["To Do", "Doing", "Done"].map((status) => (
                <Droppable key={status} droppableId={status}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      <Column
                        title={status}
                        cards={cards[status] || []}
                        onCardCreated={fetchCards}
                      />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
            </div>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}
