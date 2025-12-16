import { BackgroundBeams } from "./ui/background-beams.tsx";
<<<<<<< HEAD

export function BackgroundBeamsDemo({ component: Component, ...props }) {
  return (
    <div className="h-[40rem] py-20 md:my-auto w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
=======
import PropTypes from 'prop-types';
import { motion, useInView } from "framer-motion";
import React from "react";

export function BackgroundBeamsDemo({ component: Component }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-[40rem] py-20 md:my-auto w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
>>>>>>> ec3cdb5 (Initial commit with website changes)
      <div className="max-w-full mx-auto p-4 ">
        <Component />
      </div>
      <BackgroundBeams />
<<<<<<< HEAD
    </div>
  );
}
=======
    </motion.div>
  );
}

BackgroundBeamsDemo.propTypes = {
  component: PropTypes.elementType.isRequired,
};
>>>>>>> ec3cdb5 (Initial commit with website changes)
