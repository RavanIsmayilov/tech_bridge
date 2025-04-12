import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import PuzzlePiece from "./puzzle_piece";

interface PuzzleGameProps {
  currentLevel: number;
  setCompleted: (completed: boolean) => void;
  levels: LevelsType[];
}

interface LevelsType {
  id: number;
  instruction: string;
  parts: {
    id: number;
    image?: string;
    backgroundY?: string;
    backgroundX?: string; // bunu əlavə et
  }[];
  fullImage: string;
}

const PuzzleGame: React.FC<PuzzleGameProps> = ({
  currentLevel,
  setCompleted,
  levels,
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
      {currentLevel >= 1 && currentLevel <= 4 ? (
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-4">
            {currentPuzzle.parts
              .filter((part) => !placedParts.includes(part.id)) // yalnız düşməmiş hissələri göstər
              .map((part) => (
                <PuzzlePiece
                  currentLevel={currentLevel}
                  key={part.id}
                  id={part.id}
                  image={part.image}
                  fullImage={currentPuzzle.fullImage}
                  backgroundY={part.backgroundY}
                  backgroundX={part.backgroundX}
                  useSlice={!!(part.backgroundY || part.backgroundX)}
                  dropped={false}
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
        {currentLevel === 3 ? (
          <>
            {/* Drop olunan hissələr — solda yerləşdirilsin */}
            {currentPuzzle.parts.map((part) =>
              placedParts.includes(part.id) ? (
                <div
                  key={part.id}
                  className="absolute h-full"
                  style={{
                    width: `${100 / currentPuzzle.parts.length}%`,
                    left: `${
                      "backgroundX" in part
                        ? (parseFloat(part.backgroundX || "0") / 100) * 100
                        : 0
                    }%`,
                    top: "0px",
                    backgroundImage: `url(${currentPuzzle.fullImage})`,
                    backgroundSize: `200% 100%`,
                    backgroundPosition: `${
                      "backgroundX" in part ? part.backgroundX : "0%"
                    } 0`,
                    backgroundRepeat: "no-repeat",
                    opacity: 1,
                    // 💡 SAĞ YOX, SOL göstərilsin
                    clipPath: "inset(0 50% 0 0)",
                  }}
                />
              ) : null
            )}

            {/* Arxa fon şəkilləri: sol 30%, sağ 100% */}
            {/* Sol hissə — opacity 0.3 */}
            {/* Sol hissə — conditional opacity */}
            <img
              src={currentPuzzle.fullImage}
              alt="Left Half"
              className="absolute w-full h-full object-cover transition-opacity duration-300"
              style={{
                clipPath: "inset(0 50% 0 0)", // sol yarı
                opacity:
                  placedParts.length > 0
                    ? 1 // Əgər hissə yerləşdirilibsə, tam görün
                    : 0.3, // İstəsən burada 0.3 edə bilərsən ilkin vəziyyət üçün
              }}
            />

            {/* Sağ hissə — conditional opacity */}
            <img
              src={currentPuzzle.fullImage}
              alt="Right Half"
              className="absolute w-full h-full object-cover transition-opacity duration-300"
              style={{
                clipPath: "inset(0 0 0 50%)", // sağ yarı
                opacity:
                  placedParts.length > 0
                    ? 1 // Əgər hissə yerləşdirilibsə, tam görün
                    : 1, // İstəsən bu hissə zəif görünə bilər əvvəlcə
              }}
            />
          </>
        ) : currentLevel === 2 ? (
          <>
            {currentPuzzle.parts.map((part) =>
              placedParts.includes(part.id) ? (
                <div
                  key={part.id}
                  className="absolute w-full"
                  style={{
                    height: `${350 / currentPuzzle.parts.length}px`,
                    top: `${
                      "backgroundY" in part
                        ? (parseFloat(part.backgroundY || "0") / 100) * 350
                        : 0
                    }px`,
                    left: "0px",
                    backgroundImage: `url(${currentPuzzle.fullImage})`,
                    backgroundSize: `100% 350px`,
                    backgroundPosition: `0 ${
                      "backgroundY" in part ? part.backgroundY : "0%"
                    }`,
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
