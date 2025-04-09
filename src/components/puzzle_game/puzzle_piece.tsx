import React from "react";
import { useDrag } from "react-dnd";

interface PuzzlePieceProps {
  id: number;
  image?: string;
  fullImage?: string;
  backgroundY?: string;
  useSlice?: boolean;
  dropped?: boolean;
  currentLevel: number;
}

const PuzzlePiece: React.FC<PuzzlePieceProps> = ({
  id,
  image,
  fullImage,
  backgroundY = "0%",
  useSlice = false,
  dropped,
  currentLevel,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "puzzle",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return useSlice && fullImage ? (
    <div
      ref={drag}
      className="w-[100px] h-[100px] border cursor-pointer"
      style={{
        backgroundImage: `url(${fullImage})`,
        backgroundSize: `100px 300px`,
        backgroundPosition: `0 ${backgroundY}`,
        backgroundRepeat: "no-repeat",
        opacity: isDragging ? 0.5 : dropped ? 1 : 1,
      }}
    />
  ) : (
    <img
      ref={drag}
      src={image}
      alt={`Puzzle piece ${id}`}
      className={`cursor-pointer ${
        currentLevel === 1 ? "w-full h-[350px]" : "w-[100px] h-[100px]"
      } object-cover ${
        isDragging ? "opacity-50" : dropped ? "opacity-100" : "opacity-100"
      }`}
    />
  );
};

export default PuzzlePiece;
