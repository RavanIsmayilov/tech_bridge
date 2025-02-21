import React from "react";
import { useDrag, useDrop } from "react-dnd";
import Puzzle1 from "../../assets/images/puzzle1.svg"

interface PuzzleGameProps {
  currentLevel: number;
  setCompleted: (completed: boolean) => void;
}

const levels = [
  { id: 1, instruction: "Bloku klikləyin", image: Puzzle1},
  { id: 2, instruction: "Bloku hədəfə aparın", image: Puzzle1 },
  { id: 3, instruction: "Yeni tapşırıq", image: Puzzle1 },
];

const PuzzleGame: React.FC<PuzzleGameProps> = ({ currentLevel, setCompleted }) => {
  // Drag & Drop Hooks
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "puzzle",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "puzzle",
    drop: () => setCompleted(true),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="flex justify-start items-center w-full px-6"> {/* Bloklar sola hizalanır */}
      {currentLevel === 0 ? (
        // ✅ 1-ci Dərs: Sadəcə klik etmək (Sol tərəfdə olacaq)
        <button
          className="p-4 bg-white shadow-md cursor-pointer"
          onClick={() => setCompleted(true)}
        >
          <img src={levels[currentLevel].image} alt="Puzzle" className="w-40" />
        </button>
      ) : currentLevel === 1 ? (
        // ✅ 2-ci Dərs: Drag & Drop (Sol tərəfdə olacaq)
        <>
          <div ref={drag} className={`p-4 cursor-pointer ${isDragging ? "opacity-50" : ""}`}>
            <img src={levels[currentLevel].image} alt="Puzzle" className="w-40" />
          </div>

          <div
            ref={drop}
            className={`ml-10 mt-6 p-10 border-2 border-dashed w-64 h-64 flex items-center justify-center ${
              isOver ? "border-blue-500" : "border-gray-300"
            }`}
          >
            İş sahəsi
          </div>
        </>
      ) : (
        // ✅ 3-cü Dərs: Başqa tapşırıq (Düymə sol tərəfdə olacaq)
        <div className="flex flex-col items-start">
          <p className="text-lg font-bold mb-2">Tapşırığı tamamla</p>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md"
            onClick={() => setCompleted(true)}
          >
            Tamamlandı
          </button>
        </div>
      )}
    </div>
  );
};

export default PuzzleGame;
