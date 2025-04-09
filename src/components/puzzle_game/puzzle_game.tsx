import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import PuzzlePiece from "./puzzle_piece";
import puzzlePart1 from "../../assets/images/puzzle1.svg";
import puzzle2 from "../../assets/images/puzzle-2.svg";
import puzzle3 from "../../assets/images/qiz-qalasi.png";

interface PuzzleGameProps {
  currentLevel: number;
  setCompleted: (completed: boolean) => void;
}

const levels = [
  {
    id: 1,
    instruction: "Bloku klikləyin",
    parts: [{ id: 1, image: puzzlePart1 }],
    fullImage: puzzlePart1,
  },
  {
    id: 2,
    instruction: "Bloku hədəfə aparın",
    parts: [{ id: 1, image: puzzle2 }],
    fullImage: puzzle2,
  },
  {
    id: 3,
    instruction: "Puzzle parçalarını düzgün yerə yerləşdirin",
    parts: [
      { id: 1, backgroundY: "0%" }, // Yuxarı
      { id: 2, backgroundY: "33.33%" }, // Orta
      { id: 3, backgroundY: "66.66%" }, // Aşağı
    ],
    fullImage: puzzle3,
  },
];

const PuzzleGame: React.FC<PuzzleGameProps> = ({
  currentLevel,
  setCompleted,
}) => {
  const [placedParts, setPlacedParts] = useState<number[]>([]);
  const currentPuzzle = levels[currentLevel];

  useEffect(() => {
    setPlacedParts([]);
  }, [currentLevel]);

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "puzzle",
      drop: (item: { id: number }) => {
        setPlacedParts((prev) => {
          if (!prev.includes(item.id)) {
            const newParts = [...prev, item.id];
            if (newParts.length === currentPuzzle.parts.length) {
              setCompleted(true);
            }
            return newParts;
          }
          return prev;
        });
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [currentLevel]
  );

  const openModal = () => {
    setCompleted(true);
  };

  return (
    <div
      className={`flex ${
        currentLevel === 0 ? "justify-start" : "justify-around"
      } items-center w-full h-full py-14`}
    >
      {currentLevel >= 1 && currentLevel <= 3 ? (
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-4">
            {currentPuzzle.parts.map((part) => (
              <PuzzlePiece
                key={part.id}
                id={part.id}
                image={"image" in part ? part.image : undefined}
                fullImage={
                  "backgroundY" in part ? currentPuzzle.fullImage : undefined
                }
                backgroundY={
                  "backgroundY" in part ? part.backgroundY : undefined
                }
                useSlice={currentLevel === 2}
                dropped={placedParts.includes(part.id)}
              />
            ))}
          </div>
        </div>
      ) : null}
      <div
        ref={drop}
        id="drop-area"
        className={`relative w-[20%] h-[350px] flex items-center justify-center border-2 ${
          isOver ? "border-blue-500" : "border-gray-300"
        }`}
      >
        {/* Drop olunan hissələrin overlay-i */}
        {currentLevel === 2 ? (
          <>
            {currentPuzzle.parts.map((part) =>
              placedParts.includes(part.id) ? (
                <div
                  key={part.id}
                  className="absolute w-full h-[116.66px]" // 350px / 3 təxminən
                  style={{
                    top:
                      "backgroundY" in part && part.backgroundY === "0%"
                        ? "0px"
                        : "backgroundY" in part && part.backgroundY === "33.33%"
                        ? "116.66px"
                        : "230px",
                    left: "0px",
                    backgroundImage: `url(${currentPuzzle.fullImage})`,
                    backgroundSize: "100% 350px",
                    backgroundPosition: `0 ${"backgroundY" in part ? part.backgroundY : "0%"}`,
                    backgroundRepeat: "no-repeat",
                    opacity: 1,
                  }}
                />
              ) : null
            )}
            <img
              src={currentPuzzle.fullImage}
              alt="Full Puzzle"
              className={`absolute w-full h-full object-cover transition-opacity duration-300 ${
                placedParts.length === currentPuzzle.parts.length
                  ? "opacity-100"
                  : "opacity-30"
              }`}
            />
          </>
        ) : currentLevel === 0 ? (
          <div
            className="flex w-full h-full cursor-pointer"
            onClick={openModal}
          >
            {"image" in currentPuzzle.parts[0] ? (
              <img
                src={currentPuzzle.parts[0].image}
                alt=""
                className="object-cover"
              />
            ) : null}
          </div>
        ) : currentLevel === 1 ? (
          <div
            className={`flex w-full h-full cursor-pointer opacity-30 ${
              placedParts.length === currentPuzzle.parts.length
                ? "opacity-100"
                : "opacity-30"
            }`}
            onClick={openModal}
          >
            <img src={currentPuzzle.fullImage} alt="" />
          </div>
        ) : null}
      </div>{" "}
    </div>
  );
};

export default PuzzleGame;
