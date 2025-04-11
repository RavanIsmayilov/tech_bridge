import { useState } from "react";
import DragDropHeader from "../../components/dragdrop/dragdropheader";
import { ImArrowUp, ImArrowRight, ImArrowLeft, ImArrowDown } from "react-icons/im";
import Rect1 from '../../assets/icon/Rectangle23971.svg';
import Rect2 from '../../assets/icon/Rectangle23970.svg';
import Rect3 from '../../assets/icon/blocks.svg';
import Ilan from '../../assets/images/ilan.svg';
import Yuva from '../../assets/images/yuva.svg';
import Qush from '../../assets/images/qush.svg';
import RectangleIlan from '../../assets/images/ilan-reactangle.svg';
import IcraEt from '../../assets/images/icraEt.svg';

const DragDropPage: React.FC = () => {
  const levels = [
    { id: 1, instruction: "Bloku klikləyin", image: "" },
    { id: 2, instruction: "Bloku hədəfə aparın", image: "" },
    { id: 3, instruction: "Yeni tapşırıq", image: "" },
  ];

  const [currentLevel, setCurrentLevel] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [commands, setCommands] = useState<string[]>([]);

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

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: any) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropzoneId: string) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const draggableElement = document.getElementById(id)?.cloneNode(true) as HTMLElement;
    const uniqueId = `${id}-${new Date().getTime()}`;
    draggableElement.id = uniqueId;
    draggableElement.setAttribute("draggable", "true");
    draggableElement.addEventListener("dragstart", (e) => handleDragStart(e, uniqueId));
    const dropzone = document.getElementById(dropzoneId) as HTMLElement;
    dropzone.appendChild(draggableElement);
    setCommands(prevCommands => [...prevCommands, uniqueId]);
  };

  const isCollision = (x: number, y: number) => {
    const birdSize = 50;
    const rect = { left: 50, top: 50, right: 170, bottom: 90 };
    return (
      x < rect.right &&
      x + birdSize > rect.left &&
      y < rect.bottom &&
      y + birdSize > rect.top
    );
  };

  const isOutOfBounds = (x: number, y: number) => {
    const birdSize = 50;
    const container = { left: 0, top: 0, right: 450, bottom: 350 };
    return (
      x < container.left ||
      x + birdSize > container.right ||
      y < container.top ||
      y + birdSize > container.bottom
    );
  };

  const shake = (el: HTMLElement) => {
    el.animate([
      { transform: 'translate(0, 0)' },
      { transform: 'translate(5px, 0)' },
      { transform: 'translate(-5px, 0)' },
      { transform: 'translate(0, 0)' }
    ], {
      duration: 300,
      iterations: 1
    });
  };

  const handleExecute = () => {
    const bird = document.getElementById('bird');
    if (!bird) return;

    let posX = 100; // начальная позиция по X
    let posY = 250; // начальная позиция по Y
    const delay = 500;

    commands.forEach((fullId, index) => {
      const blockId = fullId.split('-').slice(0, 2).join('-');
      setTimeout(() => {
        let newX = posX;
        let newY = posY;
        switch (blockId) {
          case 'block-1':
            newY -= 50;
            break;
          case 'block-2':
            newY += 50;
            break;
          case 'block-3':
            newX += 50;
            break;
          case 'block-4':
            newX -= 50;
            break;
          default:
            break;
        }

        if (isCollision(newX, newY) || isOutOfBounds(newX, newY)) {
          shake(bird); 
          return;
        }

        posX = newX;
        posY = newY;
        bird.style.transition = 'transform 0.4s ease';
        bird.style.transform = `translate(${posX}px, ${posY}px)`;
      }, index * delay);
    });
  };

  const handleRemove = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const elementToRemove = document.getElementById(id);
    if (elementToRemove && elementToRemove.parentElement?.id === 'right-container') {
      elementToRemove.remove();
      setCommands(prevCommands => prevCommands.filter(command => command !== id));
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      <DragDropHeader currentLevel={currentLevel} goToLevel={goToLevel} />
      <div className="flex items-center justify-around">
        <div
          id="left-container"
          className="relative flex flex-col gap-6 p-15 items-center w-[343px] h-full border-r-4 border-[#FDD446] -mt-45"
          onDragOver={handleDragOver}
          onDrop={handleRemove}
        >
          {blocks.map((item) => (
            <div
              key={item.id}
              id={`block-${item.id}`}
              className="relative text-[40px] cursor-pointer w-50 h-20 flex items-center justify-evenly text-white rounded-lg"
              draggable="true"
              onDragStart={(e) => handleDragStart(e, `block-${item.id}`)}
            >
              <img src={Rect3} alt="img" className="absolute inset-0 -z-1 h-[90px] object-cover rounded-lg" />
              <span className="ml-2">{item.text}</span>
              {item.arrow}
            </div>
          ))}
          <div className="relative w-[220px] h-[100px] cursor-pointer">
            <img src={Rect2} alt="logo" className="absolute w-[300px] h-[150px]" />
            <img src={Rect1} alt="logo" className="absolute w-[175px] h-[165px] -right-2" />
          </div>
        </div>

        <div
          id="right-container"
          className="w-[700px] h-[550px] -mt-35 overflow-y-auto p-4 flex flex-col gap-4"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'right-container')}
        />

        <div className="flex align-top h-screen flex-col gap-3.5">
          <div className="relative bg-[#FDD446] w-[450px] h-[350px] mt-2">
            <img src={Ilan} alt="photo" className="absolute top-12 left-4" />
            <img src={Yuva} alt="photo" className="absolute right-0 bottom-5" />
            <img id="bird" src={Qush} alt="photo" className="absolute left-0 top-0" style={{ transform: 'translate(100px, 250px)' }} />
            <img src={RectangleIlan} alt="photo" className="absolute top-15 left-1" />
          </div>
          <div className="flex flex-col justify-around gap-5 w-full h-[150px]">
            <div
              className="w-[200px] p-2 bg-[#C068A6] rounded-[10px] cursor-pointer transform transition-transform duration-300 hover:scale-103"
              onClick={handleExecute}
            >
              <img src={IcraEt} alt="photo" />
            </div>
            <div className="flex justify-center align-middle w-[200px] p-3 bg-[#C068A6] rounded-[10px] cursor-pointer transform transition-transform duration-300 hover:scale-103">
              <span className="text-white font-semibold text-[23px]">Addımlar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragDropPage;
