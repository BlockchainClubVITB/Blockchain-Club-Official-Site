import { BackgroundBeams } from "./ui/background-beams.tsx";
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
      <div className="max-w-full mx-auto p-4 ">
        <Component />
      </div>
      <BackgroundBeams />
    </motion.div>
  );
}

BackgroundBeamsDemo.propTypes = {
  component: PropTypes.elementType.isRequired,
};
