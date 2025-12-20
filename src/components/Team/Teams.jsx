import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TeamData from "./TeamData";
import { TiltCard } from "./TiltCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Teams() {
  const [teams, setTeams] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const teamData = TeamData();
    setTeams(teamData);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teams.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teams.length) % teams.length
    );
  };

  return (
    <div className="pb-20">
      <div className="flex items-center justify-center w-full gap-4 md:gap-12">
        <button
          onClick={handlePrev}
          className="group relative z-10 p-4 rounded-xl bg-zinc-900 border border-amber-500/20 text-amber-500/40 hover:text-orange-500 hover:border-orange-500/50 transition-all duration-500 shadow-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors" />
          <ChevronLeft size={28} className="relative z-10 group-hover:-translate-x-1 transition-transform" />
        </button>

        {teams.length > 0 && (
          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Link to={`/about/${teams[currentIndex].name}`} key={teams[currentIndex].id}>
              <TiltCard teamName={teams[currentIndex].name} />
            </Link>
            
            {/* Pagination Indicator */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
              {teams.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 transition-all duration-500 rounded-full ${i === currentIndex ? 'w-8 bg-orange-500' : 'w-2 bg-zinc-800'}`} 
                />
              ))}
            </div>
          </div>
        )}

        <button
          onClick={handleNext}
          className="group relative z-10 p-4 rounded-xl bg-zinc-900 border border-amber-500/20 text-amber-500/40 hover:text-orange-500 hover:border-orange-500/50 transition-all duration-500 shadow-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors" />
          <ChevronRight size={28} className="relative z-10 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default Teams;
