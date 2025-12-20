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

// Techy Golden Placeholder SVG
const placeholderImage = `data:image/svg+xml,%3Csvg width='400' height='500' viewBox='0 0 400 500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='500' fill='black'/%3E%3Cpath d='M200 150c44.183 0 80 35.817 80 80s-35.817 80-80 80-80-35.817-80-80 35.817-80 80-80zm0 180c66.274 0 120 53.726 120 120v20H80v-20c0-66.274 53.726-120 120-120z' fill='%23f59e0b' fill-opacity='0.2'/%3E%3Cpath d='M30 30l340 440M370 30L30 470' stroke='%23f59e0b' stroke-width='1' stroke-opacity='0.1'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='14' fill='%23f59e0b' fill-opacity='0.5' letter-spacing='4'%3EPHOTO_PENDING%3C/text%3E%3Crect x='20' y='20' width='360' height='460' fill='none' stroke='%23f59e0b' stroke-width='1' stroke-opacity='0.2'/%3E%3C/svg%3E`;

const users = [
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
  {
    name: "Dr. Hemraj S Lamkuche",
    image: HemrajSir,
    position: "Faculty Coordinator",
    isFaculty: true,
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
          {/* Row 1: President & Vice President */}
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

          {/* Row 2: Others (Chairman, Financial Head, Faculty) */}
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
