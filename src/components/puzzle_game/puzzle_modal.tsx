import React from "react";
import CloseIcon from "../../assets/icon/x icon.svg";
import puzzle1 from "../../assets/images/puzzle1.svg";
import puzzle2 from "../../assets/images/puzzle-2.svg";
import puzzle3 from "../../assets/images/qiz-qalasi.png";
import puzzle4 from "../../assets/images/50c9f788ec30082249855fed103fcc5f.jpeg";
interface PuzzleModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLevel: number;
  onNext: () => void;
}

const levels = [
  { id: 1, image: puzzle1 },
  { id: 2, image: puzzle2 },
  { id: 3, image: puzzle3 },
  { id: 4, image: puzzle4 },
];

const PuzzleModal: React.FC<PuzzleModalProps> = ({
  isOpen,
  onClose,
  currentLevel,
  onNext,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#08244E] via-[#134074] to-[#669ee3] bg-opacity-80 backdrop-blur-lg"
      onClick={onClose}
    >
      <div
        className="flex bg-white p-12 rounded-[37px] shadow-lg text-center justify-between items-center relative w-[900px]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={levels[currentLevel].image}
          alt="Puzzle Modal"
          className="w-[300px] h-[300px]"
        />

        <div className="flex flex-col items-center gap-2">
          <button
            className="absolute top-2 right-2 border rounded-[50%] p-2 cursor-pointer"
            onClick={onClose}
          >
            <img src={CloseIcon} alt="CloseIcon" />
          </button>

          <h3 className="text-[34px] font-bold text-[#08244E]">Təbriklər!</h3>
          <p className="text-[30px] font-bold text-[#08244E]">
            Puzzle {currentLevel + 1} tamamladınız.
          </p>

          <button
            className="mt-8 px-6 py-3 bg-[#FDD446] text-[#08244E] font-bold text-[22px] rounded-[10px] cursor-pointer"
            onClick={() => {
              console.log("Davam et düyməsi basıldı!"); // Konsola yoxlama üçün əlavə edildi
              onClose();
              setTimeout(() => {
                onNext();
              }, 100);
            }}
          >
            Davam et
          </button>
        </div>
      </div>
    </div>
  );
};

export default PuzzleModal;
