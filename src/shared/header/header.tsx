import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import UserIcon from "../../assets/icon/user icon.svg";
import Logo from "../../assets/images/logo header.svg";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`${
        scroll > 0 ? "bg-white" : "bg-transparent"
      } shadow-md relative mx-auto flex justify-center items-center z-[99999] ${
        scroll > 0 ? "h-0" : "h-[70px]"
      }`}
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${
          scroll > 0 ? "bg-white" : "bg-transparent"
        } max-w-[1600px] mx-auto flex justify-between gap-8 items-center fixed w-full rounded-xl px-2 py-4 ${
          scroll > 0 ? "mt-24" : "mt-0"
        } z-[9999] transition-all duration-200 ${
          scroll > 0 ? "shadow-md" : "shadow-none"
        }`}
      >
        {/* Logo & Button */}
        <div className="flex items-center space-x-15">
          <Link to="/">
            <img src={Logo} alt="TechBridge Logo" className="h-8" />
          </Link>
          <motion.button
            whileTap={{ scale: 0.7 }}
            className="bg-[#008DD294] text-white text-[12px] px-4 py-2 font-bold rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Dizayna Başla
          </motion.button>
        </div>

        <div className="flex gap-12 items-center">
          {/* Navigation */}
          <nav className="hidden text-[14px] xl:text-[18px] lg:flex space-x-[64px] text-black ">
            <Link to="/" className="hover:text-blue-600 transition-all">
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
            <motion.button
              whileTap={{ scale: 0.7 }}
              className="hidden md:flex bg-[#FDD446] text-[#08244E] text-[16px] px-4 py-2 font-bold rounded-lg hover:bg-yellow-500 transition cursor-pointer"
            >
              Bağış et
            </motion.button>
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
      </motion.div>

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
    </motion.header>
  );
};

export default Header;
