import React, { useState } from "react";
import PuzzleGame from "../../components/puzzle_game/puzzle_game";
import PuzzleModal from "../../components/puzzle_game/puzzle_modal";
import PuzzleHeader from "../../components/puzzle_game/puzzle_header";

import puzzle1 from "../../assets/images/puzzle1.svg";
import puzzle2 from "../../assets/images/puzzle1.svg";
import puzzle3 from "../../assets/images/puzzle1.svg";
import TurnIcon from "../../assets/icon/TurnIcon.svg";

const levels = [
  { id: 1, instruction: "Bloku klikləyin", image: puzzle1 },
  { id: 2, instruction: "Bloku hədəfə aparın", image: puzzle2 },
  { id: 3, instruction: "Yeni tapşırıq", image: puzzle3 },
];

const PuzzleGamePage: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [completed, setCompleted] = useState(false);
  
  const nextLevel = () => {
    setCurrentLevel((prevLevel) => {
      console.log("Səviyyə dəyişdi:", prevLevel + 1);
      return prevLevel + 1;
    });
    setCompleted(false);
  };
  
  

  const goToLevel = (level: number) => {
    setCurrentLevel(level);
    setCompleted(false);
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <PuzzleHeader currentLevel={currentLevel} goToLevel={goToLevel} />

      {/* Təlimatlar Bölməsi */}
      <div className="bg-[#08244E] text-white text-center py-2 text-[24px] font-bold">Təlimatlar</div>
      <div className="border border-[#FDD446] mx-14 my-2 py-4 text-center text-[22px] font-semibold text-[#08244E]">
        {levels[currentLevel].instruction}
      </div>

      {/* İş Sahəsi */}
      <div className="bg-[#08244E] text-white py-2 flex px-14 justify-end">
        <div className="flex items-center justify-between w-[54%]">
          <span className="bg-[#08244E] text-white text-center text-[24px] font-bold">İş sahəsi</span>
          <button onClick={() => window.location.reload()} className="cursor-pointer self-end">
            <img className="" src={TurnIcon} alt="TurnIcon" />
          </button>
        </div>
      </div>

      {/* Puzzle Game */}
      <div className="flex justify-center mx-14">
        <PuzzleGame currentLevel={currentLevel} setCompleted={setCompleted}  />
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
