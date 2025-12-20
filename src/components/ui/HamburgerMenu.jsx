import PropTypes from "prop-types";
import { motion } from "framer-motion";

export const HamburgerMenu = ({ toggle, isOpen }) => {
  return (
    <button
      onClick={toggle}
      className="relative z-50 w-10 h-10 flex flex-col items-center justify-center focus:outline-none"
    >
      <div className="w-6 h-5 flex flex-col justify-between items-center relative">
        <motion.span
          animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-0.5 bg-white rounded-full block origin-center"
        />
        <motion.span
          animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-0.5 bg-white rounded-full block"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-0.5 bg-white rounded-full block origin-center"
        />
      </div>
    </button>
  );
};

HamburgerMenu.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
