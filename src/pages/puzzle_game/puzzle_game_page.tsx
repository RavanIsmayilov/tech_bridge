import React, { useState } from "react";
import PuzzleGame from "../../components/puzzle_game/puzzle_game";
import PuzzleModal from "../../components/puzzle_game/puzzle_modal";
import PuzzleHeader from "../../components/puzzle_game/puzzle_header";
import puzzlePart1 from "../../assets/images/puzzle1.svg";
import puzzle2 from "../../assets/images/puzzle-2.svg";
import puzzle3 from "../../assets/images/qiz-qalasi.png";
import puzzle4 from "../../assets/images/50c9f788ec30082249855fed103fcc5f.jpeg";
import TurnIcon from "../../assets/icon/TurnIcon.svg";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

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
  {
    id: 4,
    instruction: "Şəkli yaratmaq üçün blokları düz",
    parts: [
      { id: 1, backgroundX: "0%" }, // Yuxarı hissə
    ],
    fullImage: puzzle4, // Bu şəkil `image.png`-də göstərdiyin tam penguin şəkli olmalıdır
  },
];

const PuzzleGamePage: React.FC = () => {
  const [searchParams, _] = useSearchParams();
  const [currentLevel, setCurrentLevel] = useState(
    Number(searchParams.get("levels")) - 1
  );
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const nextLevel = () => {
    setCurrentLevel((prevLevel) => {
      const newLevel = prevLevel + 1;
      navigate({
        pathname: "/puzzlegame",
        search: createSearchParams({
          levels: (newLevel + 1).toString(),
        }).toString(),
      });
      return newLevel;
    });
    setCompleted(false);
  };

  const goToLevel = (level: number) => {
    setCurrentLevel(level);
    setCompleted(false);
    navigate({
      pathname: "/puzzlegame",
      search: createSearchParams({
        levels: (level + 1).toString(), // +1 çünki sıfırdan başlayırıq
      }).toString(),
    });
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <PuzzleHeader
        currentLevel={currentLevel}
        goToLevel={goToLevel}
        levels={levels}
      />

      {/* Təlimatlar Bölməsi */}
      <div className="bg-[#08244E] text-white text-center py-2 text-[24px] font-bold">
        Təlimatlar
      </div>
      <div className="border border-[#FDD446] mx-14 my-2 py-4 text-center text-[22px] font-semibold text-[#08244E]">
        {levels[currentLevel].instruction}
      </div>

      {/* İş Sahəsi */}
      <div className="bg-[#08244E] text-white py-2 flex px-14 justify-end">
        <div className="flex items-center justify-between w-[54%]">
          <span className="bg-[#08244E] text-white text-center text-[24px] font-bold">
            İş sahəsi
          </span>
          <button
            onClick={() => window.location.reload()}
            className="cursor-pointer self-end"
          >
            <img className="" src={TurnIcon} alt="TurnIcon" />
          </button>
        </div>
      </div>

      {/* Puzzle Game */}
      <div className="flex justify-center mx-14">
        <PuzzleGame
          levels={levels}
          currentLevel={currentLevel}
          setCompleted={setCompleted}
        />
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
