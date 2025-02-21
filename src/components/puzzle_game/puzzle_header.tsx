import React from "react";

interface PuzzleHeaderProps {
  currentLevel: number;
  goToLevel: (level: number) => void;
}

const PuzzleHeader: React.FC<PuzzleHeaderProps> = ({ currentLevel, goToLevel }) => {
  return (
    <div className="bg-blue-100 flex justify-between items-center px-6 py-3">
      {/* Logo */}
      <div className="text-lg font-bold text-blue-900">Tech Equity</div>

      {/* Dərs Məlumatı */}
      <div className="flex items-center space-x-4">
        <span className="font-semibold text-blue-900">Dərs {currentLevel + 1}:</span>
        <span className="text-gray-700">Drag & Drop</span>
      </div>
      
      {/* Proqres göstəricisi */}
      <div className="flex space-x-1">
        {Array(3).fill(0).map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer ${i === currentLevel ? 'bg-blue-900' : 'bg-gray-400'}`}
            onClick={() => goToLevel(i)}
          />
        ))}
      </div>
      
      {/* İstifadəçi və Menü */}
      <div className="flex items-center space-x-4">
        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold">Aysel ⬆</span>
        <button className="text-xl">⋮</button>
      </div>
    </div>
  );
};

export default PuzzleHeader;
