import React, { useState } from "react";
import PuzzleGame from "../../components/puzzle_game/puzzle_game";
import PuzzleModal from "../../components/puzzle_game/puzzle_modal";
import PuzzleHeader from "../../components/puzzle_game/puzzle_header";

import puzzle1 from "../../assets/images/puzzle1.svg";
import puzzle2 from "../../assets/images/puzzle1.svg";
import puzzle3 from "../../assets/images/puzzle1.svg";

const levels = [
  { id: 1, instruction: "Bloku klikləyin", image: puzzle1 },
  { id: 2, instruction: "Bloku hədəfə aparın", image: puzzle2 },
  { id: 3, instruction: "Yeni tapşırıq", image: puzzle3 },
];

const PuzzleGamePage: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [completed, setCompleted] = useState(false);

  const nextLevel = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setCompleted(false);
    }
  };

  const goToLevel = (level: number) => {
    setCurrentLevel(level);
    setCompleted(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <PuzzleHeader currentLevel={currentLevel} goToLevel={goToLevel} />

      {/* Təlimatlar Bölməsi */}
      <div className="bg-blue-900 text-white text-center py-2 text-xl font-bold">Təlimatlar</div>
      <div className="border border-yellow-500 mx-6 my-2 p-4 text-center text-lg font-semibold">
        {levels[currentLevel].instruction}
      </div>

      {/* İş Sahəsi */}
      <div className="bg-blue-900 text-white text-center py-2 text-xl font-bold flex justify-between px-6">
        <span>İş sahəsi {currentLevel + 1}</span>
        <button onClick={() => window.location.reload()} className="text-white text-xl">↻</button>
      </div>

      {/* Puzzle Game */}
      <div className="flex justify-center p-6">
        <PuzzleGame currentLevel={currentLevel} setCompleted={setCompleted} />
      </div>

      {/* Modal */}
      <PuzzleModal
        isOpen={completed}
        onClose={() => setCompleted(false)}
        currentLevel={currentLevel}
        onNext={nextLevel}
      />
    </div>
  );
};

export default PuzzleGamePage;
