import React from "react";
import { Link } from "react-router-dom";
import WatchVideoIcon from "../../assets/icon/Watch Video Button.svg"

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-[450px] bg-[#6BBDE5B0] flex flex-col md:flex-row items-center justify-around px-4 py-8 md:py-12 md:px-16 rounded-lg shadow-lg">
      {/* Left Side: Image & Icons */}
      <div className="flex items-center space-x-4">
        <img src="/banner-image.png" alt="Creative Banner" className="w-48 md:w-64" />
      </div>
      
      {/* Right Side: Text & Button */}
      <div className="text-center md:text-center">
        <h2 className="text-2xl md:text-[32px] font-bold text-[#08244E]">
          Yaradıcılığın məktəbinə <br /> buradan keç!
        </h2>
        <div className="mt-4 flex flex-col md:flex-col items-center md:items-center gap-[10px]">
          <button className="bg-[#FDD446] cursor-pointer text-[#08244E] px-6 py-1 rounded-[30px] text-[20px] font-bold shadow-md hover:bg-yellow-500 transition">
            Keçid et
          </button>
          <Link to="#" className="text-gray-800 text-sm flex items-center space-x-2 hover:underline">
            <img src={WatchVideoIcon} alt="WatchVideoIcon" />
              <span>Videonu izlə</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
