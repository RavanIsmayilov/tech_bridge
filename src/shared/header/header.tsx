import React from "react";
import UserIcon from "../../assets/icon/user icon.svg"
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md py-3 px-6">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-8">
                <img src="" alt="TechBridge Logo" className="h-8" />
                <button className="bg-[#008DD294] text-white text-[12px] px-4 py-1 font-bold rounded-lg hover:bg-blue-600 transition cursor-pointer  ">
                    Dizayna Başla
                </button>
            </div>

        <div className="flex items-center gap-[64px]">
            {/* Navigation */}
            <nav className="hidden md:flex space-x-[64px] text-gray-700">
            <Link to="#" className="hover:text-blue-600">
                Ana səhifə
            </Link>
            <Link to="#" className="hover:text-blue-600">
                Haqqımızda
            </Link>
            <Link to="#" className="hover:text-blue-600">
                Xəbərlər & Tədbirlər
            </Link>
            <Link to="#" className="hover:text-blue-600">
                Platforma
            </Link>
            <Link to="#" className="hover:text-blue-600">
                Əlaqə
            </Link>
            </nav>

            <div className="flex">
                <img className="cursor-pointer" src={UserIcon} alt="user_icon" />
            </div>
        </div>
        </div>
        </header>
    );
    };

export default Header;
