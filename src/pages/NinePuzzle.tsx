import NineBoard from "@/components/NineBoard";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const NinePuzzle = () => {
  return (
    <div className="min-h-screen bg-puzzle-background text-puzzle-text p-4">
      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-puzzle-primary">9 Puzzle</h1>
          <p className="text-puzzle-text/80">
            Slide the tiles to arrange them in order from 1 to 8
          </p>
        </div>
        
        <NineBoard />

        <div className="text-center">
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="bg-puzzle-primary/10 hover:bg-puzzle-primary/20 text-puzzle-primary border-puzzle-primary/20"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            New Game
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NinePuzzle;