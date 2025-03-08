import React from "react";
import { useDrag } from "react-dnd";

interface PuzzlePieceProps {
  id: number;
  image: string;
}

const PuzzlePiece: React.FC<PuzzlePieceProps> = ({ id, image }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "puzzle", // 🔥 Eyni olmalıdır!
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  console.log("🎯 PuzzlePiece render oldu:", id);
  
  return (
    <div ref={drag} className={`cursor-pointer p-2 border ${isDragging ? "opacity-50" : ""}`}
      onMouseDown={() => console.log("🎯 Drag başladı:", id)}
    >
      <img src={image} alt={`Puzzle part ${id}`} className="w-[100px]" />
    </div>
  );
};

export default PuzzlePiece;
