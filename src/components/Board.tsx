import { useEffect, useState } from "react";
import Tile from "./Tile";
import { toast } from "sonner";

const WINNING_ARRANGEMENT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

const Board = () => {
  const [tiles, setTiles] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  const shuffleTiles = () => {
    const newTiles = [...WINNING_ARRANGEMENT];
    for (let i = newTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newTiles[i], newTiles[j]] = [newTiles[j], newTiles[i]];
    }
    setTiles(newTiles);
    setMoves(0);
  };

  useEffect(() => {
    shuffleTiles();
  }, []);

  const checkWin = (newTiles: number[]) => {
    return JSON.stringify(newTiles) === JSON.stringify(WINNING_ARRANGEMENT);
  };

  const handleTileClick = (index: number) => {
    const emptyIndex = tiles.indexOf(0);
    const row = Math.floor(index / 4);
    const emptyRow = Math.floor(emptyIndex / 4);
    const col = index % 4;
    const emptyCol = emptyIndex % 4;

    if (
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow)
    ) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
      setTiles(newTiles);
      setMoves(moves + 1);

      if (checkWin(newTiles)) {
        toast("Congratulations! You solved the puzzle!", {
          description: `You completed it in ${moves + 1} moves!`,
        });
      }
    }
  };

  return (
    <div className="w-full max-w-md aspect-square relative bg-puzzle-secondary/20 rounded-xl p-2">
      {tiles.map((number, index) =>
        number !== 0 ? (
          <Tile
            key={number}
            number={number}
            position={index}
            onClick={() => handleTileClick(index)}
          />
        ) : null
      )}
    </div>
  );
};

export default Board;