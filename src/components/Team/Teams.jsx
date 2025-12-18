import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
    <div>
      <h1 className="text-lg md:text-5xl font-normal  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 my-6">
        OUR TEAMS
      </h1>
      <div className="flex items-center justify-center w-full">
        <button
          onClick={handlePrev}
          className="z-10 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 focus:outline-none mr-4"
        >
          <ChevronLeft size={24} />
        </button>
        {teams.length > 0 && (
          <NavLink to={`/about/${teams[currentIndex].name}`} key={teams[currentIndex].id}>
            <TiltCard teamName={teams[currentIndex].name} />
          </NavLink>
        )}
        <button
          onClick={handleNext}
          className="z-10 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 focus:outline-none ml-4"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default Teams;
