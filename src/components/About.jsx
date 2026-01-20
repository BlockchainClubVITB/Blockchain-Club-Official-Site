import { ThreeDCardDemo } from "./3DCard.jsx";
import { BackgroundBeams } from "./ui/background-beams.tsx";
import { StarsBackground } from "./ui/stars-background.jsx";
import {
  HemrajSir,
  Soumyak,
  Ayushi_New,
  Mrityunjay_New,
  Aana
} from "../assets/PanelMembers";
import Teams from "./Team/Teams";
import { motion } from "framer-motion";

const users = [
  {
    name: "Dr. Hemraj S Lamkuche",
    image: HemrajSir,
    position: "Faculty Coordinator",
    isFaculty: true,
  },
  {
    name: "Mrityunjay Singh",
    image: Mrityunjay_New,
    position: "President",
    isFaculty: false,
  },
  {
    name: "Aana Jain",
    image: Aana,
    position: "Vice-President",
    isFaculty: false,
  },
  {
    name: "Ayushi",
    image: Ayushi_New,
    position: "Chairman",
    isFaculty: false,
  },
  {
    name: "Soumyak Pransuman Behera",
    image: Soumyak,
    position: "Financial Head",
    isFaculty: false,
  },
];

const About = () => {
  return (
    <div className="min-h-screen w-full bg-black relative flex flex-col items-center justify-center antialiased overflow-x-hidden">
      <div className="max-w-7xl mx-auto p-4 relative z-10 w-full pt-20 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-8">
            MEET THE <br /> PANEL.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            The visionary leaders driving innovation and excellence at the Blockchain Club.
            Our team is dedicated to building the future of Web3.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10 md:gap-y-16 mb-32 max-w-7xl mx-auto">
          {/* Row 1: President & Faculty Coordinator */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-20 max-w-4xl mx-auto w-full">
            {users.slice(0, 2).map((user, index) => (
              <ThreeDCardDemo
                key={index}
                name={user.name}
                image={user.image}
                position={user.position}
                isTop={user.isFaculty}
              />
            ))}
          </div>

          {/* Row 2:( VP, Chairman, Financial Head) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-x-10 w-full">
            {users.slice(2).map((user, index) => (
              <ThreeDCardDemo
                key={index + 2}
                name={user.name}
                image={user.image}
                position={user.position}
                isTop={user.isFaculty}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full py-20"
        >
          <div className="absolute inset-0 bg-orange-500/5 blur-[120px] rounded-full"></div>
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-20 relative z-10">
            OUR TEAMS
          </h2>
          <Teams />
        </motion.div>
      </div>
      <BackgroundBeams />
      <StarsBackground />
    </div>
  );
};

export default About;
