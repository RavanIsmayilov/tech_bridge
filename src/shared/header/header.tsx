    import React, { useState } from "react";
    import { Link } from "react-router-dom";
    import { Menu, X } from "lucide-react";
    import UserIcon from "../../assets/icon/user icon.svg";
    import Logo from "../../assets/images/logo header.svg";

    const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md py-5 px-6">
        <div className="max-w-[1600px] mx-auto flex justify-between gap-8 items-center">
            {/* Logo & Button */}
            <div className="flex items-center space-x-15">
            <img src={Logo} alt="TechBridge Logo" className="h-8" />
            <button className="bg-[#008DD294] text-white text-[12px] px-4 py-2 font-bold rounded-lg hover:bg-blue-700 transition cursor-pointer">
                Dizayna Başla
            </button>
            </div>

            <div className="flex gap-12 items-center">
            {/* Navigation */}
            <nav className="hidden text-[14px] xl:text-[18px] lg:flex space-x-[64px] text-black ">
                <Link to="#" className="hover:text-blue-600 transition-all">
                Ana səhifə
                </Link>
                <Link to="#" className="hover:text-blue-600 transition-all">
                Haqqımızda
                </Link>
                <Link to="#" className="hover:text-blue-600 transition-all">
                Xəbərlər & Tədbirlər
                </Link>
                <Link to="#" className="hover:text-blue-600 transition-all">
                Əlaqə
                </Link>
            </nav>
            <Link to="/donatepage">
            <button className="hidden md:flex bg-[#FDD446] text-[#08244E] text-[16px] px-4 py-2 font-bold rounded-lg hover:bg-yellow-500 transition cursor-pointer">
                Bağış et
            </button>
            </Link>


            {/* Mobile Menu Button */}
            <button
                className="lg:hidden cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* User Icon */}
            <div className="hidden lg:flex">
                <img className="cursor-pointer" src={UserIcon} alt="user_icon" />
            </div>
            </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
            <nav className="lg:hidden flex flex-col items-center bg-white shadow-md py-4 space-y-4">
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
                Əlaqə
                </Link>
                <button className="bg-[#FDD446] text-[#08244E] text-[16px] px-4 py-2 font-bold rounded-lg hover:bg-yellow-500 transition cursor-pointer">
                Bağış et
            </button>
            </nav>
        )}
        </header>
    );
    };

    export default Header;
