import Board from "@/components/Board";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-puzzle-background text-puzzle-text p-4">
      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-puzzle-primary">15 Puzzle</h1>
          <p className="text-puzzle-text/80">
            Slide the tiles to arrange them in order from 1 to 15
          </p>
        </div>
        
        <Board />

        <div className="text-center space-y-4">
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="bg-puzzle-primary/10 hover:bg-puzzle-primary/20 text-puzzle-primary border-puzzle-primary/20"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            New Game
          </Button>

          <div>
            <Link 
              to="/nine-puzzle"
              className="text-puzzle-primary hover:text-puzzle-primary/80 underline"
            >
              Try the 9 Puzzle version
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;