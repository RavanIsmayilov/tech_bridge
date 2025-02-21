import { useState } from 'react';
import Tips from '../../assets/icon/tips.svg';
import Atom from '../../assets/icon/atom.svg';
import Trianqle from '../../assets/icon/triangle.svg'

const CourseProgress = () => {
	const [isOperatorsOpen, setIsOperatorsOpen] = useState(false);
	const [isEventsOpen, setIsEventsOpen] = useState(false);
	const [isArdicaliqOpen, setIsArdicaliqOpen] = useState(false); // State for Ardıcılıq section

	return (
		<div className='max-w-[1200px] h-auto mx-auto p-6'>
			<h1 className="text-[#08244E] text-3xl font-bold mb-4">Məktəbəqədər Express (2025)</h1>
			<p className="text-gray-700 mb-6">
				Aşağıdakı dərsləri öz tempinlə keçərək kompüter elmlərini öyrən! Kompüter proqramları yaratmağı və
				əyləncəli tapşırıqları yerinə yetirməyi öyrən! Oyunlar və yaradıcı layihələr hazırlayaraq dostların,
				ailən və müəllimlərinlə paylaş!
			</p>
			<div className="flex flex-col sm:flex-row justify-start gap-4 mb-6">
				<button className="cursor-pointer bg-yellow-400 px-6 py-3 rounded-lg font-semibold shadow-[4px_5px_4px_0px_rgba(0,_0,_0,_0.35)]">
					İndi sına
				</button>
				<button className="cursor-pointer transition-all duration-300 border-3 border-[#FDD446] shadow-[4px_5px_4px_0px_rgba(0,_0,_0,_0.35)] px-6 py-3 rounded-lg font-semibold hover:shadow-[4px_5px_4px_0px_#FDD446]">
					Kömək alın
				</button>
			</div>

			{/* Main Sections */}
			<div className='grid grid-cols-1 gap-4 '>
				{/* Ardıcılıq Section */}
				<div>
					<button
						className="bg-blue-900 text-white p-6 rounded-lg w-full text-left cursor-pointer text-lg font-semibold flex justify-start gap-3"
						onClick={() => setIsArdicaliqOpen(prev => !prev)}
						aria-expanded={isArdicaliqOpen}
						aria-controls="ardiciliq-content"
					>
						<img src={Trianqle} alt="icon" className={isArdicaliqOpen ? '-rotate-90 w-[13px] h-auto transition-all duration-300' : "w-[13px] h-auto transition-all duration-300"} />
						Ardıcılıq
					</button>
					{isArdicaliqOpen && (
						<div id="ardiciliq-content" className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-0">
							<div className="flex flex-col md:flex-row items-center justify-between gap-5">
								<span className="font-semibold bg-[#007396] text-white px-4 py-1 rounded-[18px]">Dərsin adı</span>
								<div className="flex flex-wrap justify-center  w-full md:w-[900px] gap-4">
									<div className="flex items-center gap-4 text-[14px] tex t-[#08244E] text-center">
										<img src={Atom} alt="icon" className="w-[45px] sm:w-14 sm:h-auto" />
										<span className='text-[10px] w-[100px] text-center sm:w-[150px] sm:text-[15px]'>"Angry Birds" proqramlaşdırma</span>
									</div>
									<div className="flex items-center gap-2 text-[14px] text-[#08244E] text-center">
										<img src={Tips} alt="icon" className="w-[45px] sm:w-14 sm:h-auto" />
										<span className='text-[10px] w-[100px] text-center sm:w-[150px] sm:text-[15px]'>"Rey və BB-8" proqramlaşdırma</span>
									</div>
									<div className="flex items-center gap-2 text-[14px] text-[#08244E] text-center">
										<img src={Tips} alt="icon" className="w-[45px] sm:w-14 sm:h-auto" />
										<span className='text-[10px] w-[100px] text-center sm:w-[150px] sm:text-[15px]'>"Harvester" proqramlaşdırma</span>
									</div>
									<div className="flex items-center gap-2 text-[14px] text-[#08244E] text-center">
										<img src={Tips} alt="icon" className="w-[45px] sm:w-14 sm:h-auto" />
										<span className='text-[10px] w-[100px] text-center sm:w-[120px] sm:text-[17px] sm:text-center'>"Scrat" Ardıcılıq</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-4">
								<span className="font-semibold bg-[#007396] text-white px-6 py-1 rounded-[18px] text-[15px]">İrəliləyiş</span>
								<div className="flex flex-row gap-2.5  justify-between ">
									<div className='items-center hidden sm:flex'>
										<img src={Atom} alt="icon" className="w-[45px] sm:w-14 sm:block sm:ml-0.5" />
									</div>
									<div className='flex max-w-[430px] lg:max-w-[100%] xl:overflow-hidden overflow-x-scroll'>
										{[...Array(10)].map((_, i) => (
											<div className='relative flex items-center w-[72.2px]'>
												<div key={i} className="w-11 h-10 flex items-center justify-center rounded-full bg-[#1491B873] text-[#08244E] cursor-pointer ml-8">{i + 1}</div>
												{i < 9 && (
													<span className='absolute flex gap-6 bg-[#81C0D1] w-[34px] h-[5px] left-18'></span>
												)}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Dövr operatorları Section */}
				<div>
					<button
						className="bg-blue-900 text-white p-6 rounded-lg w-full text-left cursor-pointer text-lg font-semibold flex justify-start gap-3"
						onClick={() => setIsOperatorsOpen(prev => !prev)}
						aria-expanded={isOperatorsOpen}
						aria-controls="operators-content"
					>
						<img src={Trianqle} alt="icon" className={isOperatorsOpen ? '-rotate-90 w-[13px] h-auto transition-all duration-300' : "w-[13px] h-auto transition-all duration-300"}></img>
						Dövr operatorları
					</button>
					{isOperatorsOpen && (
						<div id="operators-content" className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-0">
							<p>Burada dövr operatorları ilə bağlı məlumatlar yer alır...</p>
						</div>
					)}
				</div>

				{/* Tədbirlər Section */}
				<div>
					<button
						className="bg-blue-900 text-white p-6 rounded-lg w-full text-left cursor-pointer text-lg font-semibold flex justify-start gap-3"
						onClick={() => setIsEventsOpen(prev => !prev)}
						aria-expanded={isEventsOpen}
						aria-controls="events-content"
					>
						<img src={Trianqle} alt="icon" className={isEventsOpen ? '-rotate-90 w-[13px] h-auto transition-all duration-300' : "w-[13px] h-auto transition-all duration-300"} />
						Tədbirlər
					</button>
					{isEventsOpen && (
						<div id="events-content" className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-0">
							<p>Burada tədbirlər haqqında məlumatlar yer alır...</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CourseProgress;
