import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer: React.FC = () => {
	return (
		<footer className="bg-[#99D1ED] text-white  w-full h-[400px] flex items-center justify-center">
			{/* Логотип */}
			{/* <div className="w-full h-[30px] bg-[#666] flex justify-center items-center">LOGO</div> */}

			{/* Контейнер с двумя блоками */}
			<div className="flex justify-between w-[80%] mx-auto p-4">
				{/* Левый блок */}
				<div className="w-[250px] h-[150px] bg-[#D9D9D9] rounded-[14px] shadow-[0px_4px_4px_0px_#00000040]">
					<div className="w-full h-[40px] flex justify-around items-center">
						<span className="font-bold text-[20px] text-[#08244E]">Sualın var?</span>
						<span className="text-[#08244E]">gəl görüşək!</span>
					</div>
					<button className="bg-[#08244E] rounded-[20px] w-[150px] h-[40px] cursor-pointer text-[19px] ml-12 mt-8 font-[400] shadow-[4px_5px_4px_0px_#00000040]">Sualını yaz</button>
				</div>

				{/* Правый блок */}
				<div className="w-[900px] h-[150px] flex justify-around items-center">
					<div className="w-[100px] h-[100px] text-center">
						<span className="text-[#08244E] font-bold text-[22px]">Kəşf et</span>
						<ul className="list-disc ml-11">
							<li className="text-start">FAQs</li>
							<li className="text-start">Blog</li>
						</ul>
					</div>
					<div className="w-[200px] h-[100px] text-center">
						<span className="text-[#08244E] font-bold text-[22px]">Linklər</span>
						<ul className="list-disc ml-23 w-[115px]">
							<li className="text-start">Məxfilik Siyasəti</li>
							<li className="text-start">İstifadə Şərtləri</li>
						</ul>
					</div>
					<div className="w-[200px] h-[100px] text-center">
						<span className="text-[#08244E] font-bold text-[22px]">Bizi izləyin</span>
						<div className="flex justify-around items-center w-[130px] h-[30px] ml-11 mt-1">
							<a href="#"><span className="text-[23px] transition duration-300 delay-0 hover:text-black"><FaXTwitter /></span></a>
							<a href="#"><span className="text-[23px] transition duration-300 delay-0 hover:text-black"><FaLinkedinIn /></span></a>
							<a href="#"><span className="text-[23px] transition duration-300 delay-0 hover:text-black"><FaInstagram /></span></a>
						</div>
					</div>
					<div className="w-[200px] h-[100px] text-center">
						<span className="text-[#08244E] font-bold text-[22px]">Əlaqə saxla</span>
						<ul className="list-disc ml-18">
							<li className="text-start">1800-5723-575</li>
							<li className="text-start">support@supertails.com</li>
						</ul>
						<button type="submit" className="py-2 px-4 self-end bg-[#D9D9D9] rounded-[30px] text-[#08244E] font-[600] text-[15px] shadow-[3px_4px_4px_0px_#00000040] mt-5 transform translate-x-[55%] cursor-pointer">Mesaj göndər</button>
					</div>
				</div>
			</div>
		</footer>

	);
};

export default Footer;
