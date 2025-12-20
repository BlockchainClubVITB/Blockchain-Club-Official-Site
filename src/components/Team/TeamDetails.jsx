import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import TeamData from "./TeamData";

function TeamDetails() {
  const [team, setTeam] = useState(null);
  const [allTeams, setAllTeams] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const teamData = TeamData();
    setAllTeams(teamData);
    if (!name) {
      return;
    }
    const foundTeam = teamData.find((team) => team.name === name);
    setTeam(foundTeam);
  }, [name]);

  if (!team) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-3xl text-orange-500 animate-pulse">Loading Team...</div>
      </div>
    );
  }

  const leads = team.members.filter(
    (m) => m.position.toLowerCase() === "lead" || m.position.toLowerCase() === "co-lead"
  );
  const members = team.members.filter(
    (m) => m.position.toLowerCase() !== "lead" && m.position.toLowerCase() !== "co-lead"
  );

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Navigation Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <Link 
          to="/about" 
          className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors mb-8 group"
        >
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
          Back to All Teams
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              {team.name}
            </h1>
            <div className="h-1 w-24 bg-orange-500 mt-4 rounded-full"></div>
          </motion.div>

          {/* Team Switcher */}
          <div className="flex flex-wrap gap-2">
            {allTeams.map((t) => (
              <Link
                key={t.id}
                to={`/about/${t.name}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  t.name === team.name
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-800"
                }`}
              >
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Leads Section */}
        {leads.length > 0 && (
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-10 flex items-center">
              <span className="w-8 h-[1px] bg-orange-500 mr-4"></span>
              Team Leadership
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center sm:justify-items-start">
              {leads.map((member, index) => (
                <MemberCard key={index} member={member} isLead={true} />
              ))}
            </div>
          </div>
        )}

        {/* Members Section */}
        {members.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-10 flex items-center">
              <span className="w-8 h-[1px] bg-orange-500 mr-4"></span>
              Core Members
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {members.map((member, index) => (
                <MemberCard key={index} member={member} isLead={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MemberCard({ member, isLead }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`relative group w-full max-w-[320px] bg-gray-900/40 rounded-2xl overflow-hidden border transition-all duration-300 ${
        isLead ? "border-orange-500/30 hover:border-orange-500" : "border-gray-800 hover:border-gray-600"
      }`}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
        />
      </div>
      
      <div className="p-5">
        <h3 className={`text-xl font-bold mb-1 transition-colors ${isLead ? "text-orange-400" : "text-white"}`}>
          {member.name}
        </h3>
        <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">
          {member.position}
        </p>
      </div>

      {isLead && (
        <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">
          {member.position}
        </div>
      )}
    </motion.div>
  );
}

export default TeamDetails;
