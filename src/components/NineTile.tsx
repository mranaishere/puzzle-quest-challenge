import { cn } from "@/lib/utils";

interface TileProps {
  number: number;
  position: number;
  onClick: () => void;
}

const NineTile = ({ number, position, onClick }: TileProps) => {
  const row = Math.floor(position / 3);
  const col = position % 3;

  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute w-[calc(33.333%-4px)] h-[calc(33.333%-4px)]",
        "bg-puzzle-tile rounded-lg shadow-lg",
        "flex items-center justify-center",
        "text-3xl font-bold text-puzzle-secondary",
        "transition-all duration-200 hover:scale-105",
        "focus:outline-none focus:ring-2 focus:ring-puzzle-primary"
      )}
      style={{
        top: `calc(${row * 33.333}% + 2px)`,
        left: `calc(${col * 33.333}% + 2px)`,
      }}
    >
      {number}
    </button>
  );
};

export default NineTile;