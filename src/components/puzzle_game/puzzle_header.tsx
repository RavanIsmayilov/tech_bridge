import React from "react";
import LogoHeader from "../../assets/images/logo header.svg"
import ThreeDot from "../../assets/icon/three dot row.svg"
import UpArrow from "../../assets/icon/Polygon 12.svg"

interface PuzzleHeaderProps {
  currentLevel: number;
  goToLevel: (level: number) => void;
}

const PuzzleHeader: React.FC<PuzzleHeaderProps> = ({ currentLevel, goToLevel }) => {
  return (
    <div className="bg-[#99D1ED7A] flex justify-between items-center px-14 py-3">
      {/* Logo */}
      <div className=""><img src={LogoHeader} alt="LogoHeader" /></div>

      {/* Dərs Məlumatı */}
      <div className="flex items-center space-x-4">
        <span className="font-bold text-[20px] text-[#08244E]">Dərs {currentLevel + 1}:</span>
        <span className="text-[#08244E] font-medium text-[20px]">Drag & Drop</span>
      </div>
      
      {/* Proqres göstəricisi */}
      <div className="flex space-x-2 items-center">
        {Array(3).fill(0).map((_, i) => (
          <button
            key={i}
            className={`w-[20px] h-[20px] flex justify-center items-center rounded-full cursor-pointer 
              ${i === currentLevel ? 'bg-[#08244E] text-white font-bold p-4' : 'bg-[#08244E9E]'}`}
            onClick={() => goToLevel(i)}
          >
            {i === currentLevel ? i + 1 : ""}
          </button>
        ))}
      </div>
      
      {/* İstifadəçi və Menü */}
      <div className="flex items-center gap-[50px]">
        <button className="flex items-center gap-2 bg-[#08244EB2] text-[#FDD446] px-3 py-1 rounded-[3px] font-semibold cursor-pointer">Aysel 
          <img src={UpArrow} alt="" />
        </button>
        <button className="cursor-pointer">
          <img className="w-[40px] h-[40px]" src={ThreeDot} alt="ThreeDot" />
        </button>
      </div>
    </div>
  );
};

export default PuzzleHeader;
