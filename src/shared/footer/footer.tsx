import React from "react";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const Footer: React.FC = () => {
	return (
		<footer className="bg-[#99D1ED] py-8 px-4 md:px-8 lg:px-16 h-[350px]">
		<div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-y-0">
			{/* Sol blok */}
			<div className="bg-[#D9D9D9] rounded-[14px] shadow-md p-6 w-full md:w-[300px] text-center">
			<h3 className="text-[#08244E] font-bold text-xl">Sualın var?</h3>
			<p className="text-[#08244E] mt-2">Gəl görüşək!</p>
			<button className="bg-[#08244E] text-white rounded-full px-6 py-2 mt-4 text-lg font-medium shadow-md w-full">
				Sualını yaz
			</button>
			</div>

			{/* Sağ blok */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full max-w-3xl text-center">
			<div>
				<h4 className="text-[#08244E] font-bold text-lg">Kəşf et</h4>
				<ul className="text-white space-y-2 mt-2">
				<li>
					<a href="#" className="hover:text-black">
					FAQs
					</a>
				</li>
				<li>
					<a href="#" className="hover:text-black">
					Blog
					</a>
				</li>
				</ul>
			</div>

			<div>
				<h4 className="text-[#08244E] font-bold text-lg">Linklər</h4>
				<ul className="text-white space-y-2 mt-2">
				<li>
					<a href="#" className="hover:text-black">
					Məxfilik Siyasəti
					</a>
				</li>
				<li>
					<a href="#" className="hover:text-black">
					İstifadə Şərtləri
					</a>
				</li>
				</ul>
			</div>

			<div>
				<h4 className="text-[#08244E] font-bold text-lg">Bizi izləyin</h4>
				<div className="flex justify-center gap-4 mt-2">
				<a href="#" className="text-white text-2xl hover:text-black">
					<FaXTwitter />
				</a>
				<a href="#" className="text-white text-2xl hover:text-black">
					<FaLinkedinIn />
				</a>
				<a href="#" className="text-white text-2xl hover:text-black">
					<FaInstagram />
				</a>
				</div>
			</div>

			<div>
				<h4 className="text-[#08244E] font-bold text-lg">Əlaqə saxla</h4>
				<ul className="text-white space-y-2 mt-2">
				<li>1800-5723-575</li>
				<li>support@supertails.com</li>
				</ul>
				<button className="bg-[#D9D9D9] text-[#08244E] rounded-full px-4 py-2 mt-4 text-sm font-semibold shadow-md w-full">
				Mesaj göndər
				</button>
			</div>
			</div>
		</div>
		</footer>
	);
	};

export default Footer;
