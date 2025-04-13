import React from "react";
import ThreeDots from '../../assets/icon/icon-park-outline_more.svg';
import Tech4Equityy from '../../assets/icon/TECH4equity.svg';
import Rectangle from '../../assets/icon/Rectangle.svg';
import StashArrow from '../../assets/icon/stash_arrow-retry.svg';

interface DragDropHeaderProps {
  currentLevel: number;
  goToLevel: (level: number) => void;
  onReset: () => void; // Добавляем пропс для функции сброса
}

const DragDropHeader: React.FC<DragDropHeaderProps> = ({ currentLevel, goToLevel, onReset }) => {
  return (
    <>
      <div className="bg-blue-100 flex flex-col sm:flex-row justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="text-lg font-bold text-[#08244E] cursor-pointer sm:order-1">
          <a href="../../pages/home/home_page.tsx">
            <img src={Tech4Equityy} alt="logo" />
          </a>
        </div>

        {/* Dərs Məlumatı */}
        <div className="flex items-center space-x-4 sm:order-2 mt-2 sm:mt-0">
          <span className="font-semibold text-[#08244E]">Dərs {currentLevel + 1}:</span>
          <span className="text-gray-700">Drag & Drop</span>
        </div>

        {/* Proqres göstəricisi */}
        <div className="flex space-x-1 items-center gap-1 sm:order-3 mt-2 sm:mt-0">
          {Array(10).fill(0).map((_, i) => (
            <button
              key={i}
              className={`flex items-center justify-center text-white w-3 h-3 rounded-full cursor-pointer ${i === currentLevel ? 'p-[12px] bg-[#08244E]' : 'bg-[#08244E9E]'}`}
              onClick={() => goToLevel(i)}
            >
              {i === currentLevel ? i + 1 : ""}
            </button>
          ))}
        </div>

        {/* İstifadəçi və Menü */}
        <div className="flex items-center space-x-4 sm:order-4 mt-2 sm:mt-0">
          <span className="bg-[#08244EB2] px-3 py-1 rounded-[7px] text-sm font-semibold text-[#FDD446]">Aysel ⬆</span>
          <button className="text-xl cursor-pointer">
            <img src={ThreeDots} alt="dots" />
          </button>
        </div>
      </div>

      <div className="w-full mt-[20px] h-[50px] bg-[#08244E] flex items-center justify-between">
        <div className="w-[350px] h-full border-r-4 border-[#FDD446] flex justify-center items-center font-[600]">
          <h2 className="text-white text-[25px]">Bloklar</h2>
        </div>
        <div className="flex w-[1000px] text-center justify-center">
          <div className="relative">
            <img src={Rectangle} alt="logo" className="h-[34px] w-[160px]" />
            <span className="absolute text-[19px] top-1 left-8 text-white font-bold">Təlimatlar</span>
          </div>
          <h1 className="text-[19px] font-[600] text-white mx-auto">İş sahəsi</h1>
        </div>

        <img src={StashArrow} alt="logo" className="cursor-pointer hover:-rotate-45 transition-all mr-8" onClick={onReset} />
      </div>
    </>
  );
};

export default DragDropHeader;