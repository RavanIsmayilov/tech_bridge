import React from "react";

interface PuzzleModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLevel: number;
  onNext: () => void;
}

const PuzzleModal: React.FC<PuzzleModalProps> = ({ isOpen, onClose, currentLevel, onNext }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-md shadow-lg text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
          ✖
        </button>
        <h3 className="text-xl font-bold text-blue-900">Təbriklər!</h3>
        <p>Puzzle {currentLevel + 1} tamamladınız.</p>
        <button
          className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded"
          onClick={() => {
            onClose();
            onNext();
          }}
        >
          Davam et
        </button>
      </div>
    </div>
  );
};

export default PuzzleModal;
