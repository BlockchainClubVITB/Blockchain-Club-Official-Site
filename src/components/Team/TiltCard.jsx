import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
>>>>>>> ec3cdb5 (Initial commit with website changes)

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
<<<<<<< HEAD
      className="relative md:h-[500px] md:w-[450px] h-[300px] w-[250px] rounded-xl bg-gray-800"
=======
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 30px rgba(128, 0, 128, 0.7)", // Purple glow
      }}
      className="relative md:h-[500px] md:w-[450px] h-[300px] w-[250px] rounded-xl bg-gray-800 shadow-lg"
>>>>>>> ec3cdb5 (Initial commit with website changes)
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
<<<<<<< HEAD
        className="absolute inset-4 grid place-content-center rounded-xl bg-orange-500 shadow-lg"
=======
        className="absolute inset-4 grid place-content-center rounded-xl bg-accent shadow-lg"
>>>>>>> ec3cdb5 (Initial commit with website changes)
      >
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          {teamName}
        </p>
      </div>
    </motion.div>
  );
};
<<<<<<< HEAD
=======

TiltCard.propTypes = {
  teamName: PropTypes.string.isRequired,
};
>>>>>>> ec3cdb5 (Initial commit with website changes)
