import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import PropTypes from 'prop-types';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export const TiltCard = ({ teamName }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      whileHover={{
        scale: 1.05,
      }}
      className="relative md:h-[400px] md:w-[350px] h-[300px] w-[250px] rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-amber-500/20 hover:border-amber-500/60 transition-all duration-700 shadow-2xl overflow-hidden"
    >
      {/* Golden Technical Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700 pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' fill='none' stroke='%23f59e0b' stroke-width='1'/%3E%3C/svg%3E")`, backgroundSize: '40px 40px' }} 
      />

      {/* Technical Corner Accents - Golden */}
      <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-amber-500/30 group-hover:border-amber-500 transition-all duration-500 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-amber-500/30 group-hover:border-amber-500 transition-all duration-500 rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-amber-500/30 group-hover:border-amber-500 transition-all duration-500 rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-amber-500/30 group-hover:border-amber-500 transition-all duration-500 rounded-br-xl" />

      {/* Metadata Text - Amber */}
      <div className="absolute top-4 left-6 text-[8px] font-mono text-amber-500/40 uppercase tracking-widest">
        Branch_ID // {teamName.slice(0, 3).toUpperCase()}_0x{Math.random().toString(16).slice(2, 4)}
      </div>

      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-6 grid place-content-center rounded-lg bg-black/40 border border-amber-500/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] group"
      >
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-4xl font-black bg-clip-text text-transparent bg-gradient-to-b from-amber-200 via-amber-500 to-amber-800 px-4 tracking-tighter uppercase"
        >
          {teamName}
        </p>
        
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2"
        >
          <div className="w-8 h-[1px] bg-amber-500/30" />
          <div className="text-[9px] font-mono text-amber-500 tracking-[0.2em]">ACCESS_SECURE</div>
          <div className="w-8 h-[1px] bg-amber-500/30" />
        </div>
      </div>

      {/* Golden Glow effects */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-600/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-amber-600/10 transition-all duration-700" />
    </motion.div>
  );
};

TiltCard.propTypes = {
  teamName: PropTypes.string.isRequired,
};
