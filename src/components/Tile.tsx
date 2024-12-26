import { cn } from "@/lib/utils";

interface TileProps {
  number: number;
  position: number;
  onClick: () => void;
}

const Tile = ({ number, position, onClick }: TileProps) => {
  const row = Math.floor(position / 4);
  const col = position % 4;

  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute w-[calc(25%-4px)] h-[calc(25%-4px)]",
        "bg-puzzle-tile rounded-lg shadow-lg",
        "flex items-center justify-center",
        "text-2xl font-bold text-puzzle-secondary",
        "transition-all duration-200 hover:scale-105",
        "focus:outline-none focus:ring-2 focus:ring-puzzle-primary"
      )}
      style={{
        top: `calc(${row * 25}% + 2px)`,
        left: `calc(${col * 25}% + 2px)`,
      }}
    >
      {number}
    </button>
  );
};

export default Tile;