import { useState } from "react";
import DragDropHeader from "../../components/dragdrop/dragdropheader";
import { ImArrowUp } from "react-icons/im";
import { ImArrowRight } from "react-icons/im";
import { ImArrowLeft } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import { HiMiniArrowPath } from "react-icons/hi2";
import Rect1 from '../../assets/icon/Rectangle23971.svg'
import Rect2 from '../../assets/icon/Rectangle23970.svg'
import Rect3 from '../../assets/icon/blocks.svg'

const DragDropPage: React.FC = () => {

	const levels = [
		{ id: 1, instruction: "Bloku klikləyin", image: "" },
		{ id: 2, instruction: "Bloku hədəfə aparın", image: "" },
		{ id: 3, instruction: "Yeni tapşırıq", image: "" },
	];

	const [currentLevel, setCurrentLevel] = useState(0);
	const [completed, setCompleted] = useState(false);

	const nextLevel = () => {
		if (currentLevel < levels.length - 1) {
			setCurrentLevel(currentLevel + 1);
			setCompleted(false);
		}
	};

	const goToLevel = (level: number) => {
		setCurrentLevel(level);
		setCompleted(false);
	};

	interface Item {
		id: any;
		text: String;
		arrow: any;
	}

	const blocks: Item[] = [
		{ id: 1, text: "Şimal", arrow: <ImArrowUp /> },
		{ id: 2, text: "Cənub", arrow: <ImArrowDown /> },
		{ id: 3, text: "Şərq", arrow: <ImArrowRight /> },
		{ id: 4, text: "Qərb", arrow: <ImArrowLeft /> },
	];

	return (
		<div className="h-screen overflow-hidden">
			<DragDropHeader currentLevel={currentLevel} goToLevel={goToLevel} />
			<div className="flex items-center justify-around ">
				<div className="relative flex flex-col gap-6 p-4 items-center w-[350px] h-full border-r-2 border-[#FDD446]">
					{blocks.map((item) => (
						<div
							key={item.id}
							className="relative text-[40px] cursor-pointer w-50 h-20 flex items-center justify-evenly text-white rounded-lg "
						>
							<img src={Rect3} alt="img" className="absolute inset-0 -z-1 h-[90px] object-cover   rounded-lg" />
							<span className="ml-2">{item.text}</span>
							{item.arrow}
						</div>
					))}
					<div className="relative w-[220px] h-[100px] cursor-pointer">
						<img src={Rect2} alt="logo" className="absolute w-[300px] h-[150px]" />
						<img src={Rect1} alt="logo" className="absolute w-[175px] h-[165px] -right-2" />
					</div>
				</div>
				<div className="bg-amber-700 w-[700px] h-[500px]">
					<p>irffueuifheufhiu</p>
				</div>
				<div className="bg-red-700 flex align-top h-screen">
					<div className="bg-[#FDD446] w-[450px] h-[350px]">
						<img src="../../assets/images/ilan.svg" alt="photo" />
						<img src="../../assets/images/yuva.svg" alt="photo" />
						<img src="../../assets/images/qush.svg" alt="photo" />
						<img src="../../assets/images/ilan-reactangle.svg" alt="photo" />
					</div>
				</div>
			</div>
		</div> 
	);
}

export default DragDropPage;
