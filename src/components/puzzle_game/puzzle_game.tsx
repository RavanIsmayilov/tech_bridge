import React, { useState } from "react";
import { useDrop } from "react-dnd";
import PuzzlePiece from "./puzzle_piece";
import puzzlePart1 from "../../assets/images/puzzle1.svg";
import puzzlePart2 from "../../assets/images/puzzle1.svg";
import puzzlePart3 from "../../assets/images/puzzle1.svg";
import fullPuzzle from "../../assets/images/puzzle1.svg";

interface PuzzleGameProps {
  currentLevel: number;
  setCompleted: (completed: boolean) => void;
}

const levels = [
  { id: 1, instruction: "Bloku klikləyin", parts: [{ id: 1, image: puzzlePart1 }] },
  { id: 2, instruction: "Bloku hədəfə aparın", parts: [{ id: 1, image: puzzlePart1 }] },
  {
    id: 3,
    instruction: "Puzzle parçalarını düzgün yerə yerləşdirin",
    parts: [
      { id: 1, image: puzzlePart1 },
      { id: 2, image: puzzlePart2 },
      { id: 3, image: puzzlePart3 },
    ],
    fullImage: fullPuzzle,
  },
];

const PuzzleGame: React.FC<PuzzleGameProps> = ({ currentLevel, setCompleted }) => {
  const [placedParts, setPlacedParts] = useState<number[]>([]);
  const currentPuzzle = levels[currentLevel];

  console.log("currentLevel:", currentLevel);
  console.log("currentPuzzle:", currentPuzzle);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "puzzle",
    drop: (item: { id: number }) => {
      console.log("🔥 Düşən element:", item); // 🔥 Konsolda görünməlidir!
      
      setPlacedParts((prev) => {
        const newParts = [...prev, item.id];
        console.log("🧩 Yeni placedParts:", newParts); // 🔥 Bu da çıxmalıdır!
        if (newParts.length === currentPuzzle.parts.length) {
          setCompleted(true);
        }
        return newParts;
      });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  
  console.log("📌 placedParts:", placedParts);
  
  
  console.log("📌 placedParts:", placedParts);
  
  return (
    <div className="flex justify-around items-center w-full py-14">
      {currentLevel === 3 ? (
        <>
          <div className="flex flex-col space-y-4">
            {currentPuzzle.parts.map((part) => (
              <PuzzlePiece key={part.id} id={part.id} image={part.image} />
            ))}
          </div>

          <div
            ref={drop}
            id="drop-area"
            className={`relative w-[300px] h-[300px] flex items-center justify-center border-2 ${
              isOver ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <img
              src={currentPuzzle.fullImage}
              alt="Full Puzzle"
              className="absolute w-full h-full opacity-30"
            />

            {placedParts.map((id) => {
              const part = currentPuzzle.parts.find((p) => p.id === id);
              return part ? (
                <img
                  key={id}
                  src={part.image}
                  alt="Placed Puzzle"
                  className="w-[100px] absolute"
                />
              ) : null;
            })}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default PuzzleGame;
