import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import UserIcon from "../../assets/icon/user icon.svg";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md py-3 px-6">
            <div className="max-w-[1600px] mx-auto flex justify-between items-center">
                {/* Logo & Button */}
                <div className="flex items-center space-x-8">
                    <img src="" alt="TechBridge Logo" className="h-8" />
                    <button className="bg-[#008DD294] text-white text-[12px] px-4 py-1 font-bold rounded-lg hover:bg-blue-600 transition cursor-pointer">
                        Dizayna Başla
                    </button>
                </div>

                {/* Navigation */}
                <nav className="hidden lg:flex space-x-[64px] text-gray-700">
                    <Link to="#" className="hover:text-blue-600">Ana səhifə</Link>
                    <Link to="#" className="hover:text-blue-600">Haqqımızda</Link>
                    <Link to="#" className="hover:text-blue-600">Xəbərlər & Tədbirlər</Link>
                    <Link to="#" className="hover:text-blue-600">Platforma</Link>
                    <Link to="#" className="hover:text-blue-600">Əlaqə</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* User Icon */}
                <div className="hidden lg:flex">
                    <img className="cursor-pointer" src={UserIcon} alt="user_icon" />
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="lg:hidden flex flex-col items-center bg-white shadow-md py-4 space-y-4">
                    <Link to="#" className="hover:text-blue-600">Ana səhifə</Link>
                    <Link to="#" className="hover:text-blue-600">Haqqımızda</Link>
                    <Link to="#" className="hover:text-blue-600">Xəbərlər & Tədbirlər</Link>
                    <Link to="#" className="hover:text-blue-600">Platforma</Link>
                    <Link to="#" className="hover:text-blue-600">Əlaqə</Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
