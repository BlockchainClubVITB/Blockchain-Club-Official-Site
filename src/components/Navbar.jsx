import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { HamburgerMenu } from "./ui/HamburgerMenu";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import vitLogo from "../assets/vitLogo.png";


const menuItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About Club",
    to: "/about-club",
  },
  {
    name: "Team",
    to: "/about",
  },
  {
    name: "Blogs",
    to: "/blog",
  },
  {
    name: "Events",
    to: "/events",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dynamic width calculation
  const maxWidth = 100; // Maximum width as a percentage
  const minWidth = 50; // Minimum width as a percentage
  const scrollThreshold = 500; // Adjusted for faster shrinking

  const width = Math.max(
    minWidth,
    maxWidth - (scrollY / scrollThreshold) * (maxWidth - minWidth)
  );

  // Dynamic background color transition
  const scrollThresholdForBackground = 100; // When to become fully solid
  const maxOpacity = 1; // Max opacity for the solid background (changed from 0.9)
  const targetBgColor = [26, 32, 44]; // RGB for a dark gray/black

  let currentOpacity = 0;
  if (scrollY > 0) {
    currentOpacity = Math.min(maxOpacity, (scrollY / scrollThresholdForBackground) * maxOpacity);
  }
  const backgroundColor = `rgba(${targetBgColor[0]}, ${targetBgColor[1]}, ${targetBgColor[2]}, ${currentOpacity})`;

  return (
    <div
      className="sticky top-0 z-50 ease-in-out transition-all duration-700" // Increased duration
      style={{
        width: `${width}%`, // Dynamic width
        margin: "0 auto", // Center the navbar
        borderRadius: "9999px", // Capsule shape
        padding: "0.5rem 0", // Adjust padding as needed
        backgroundColor: backgroundColor, // Dynamic background color
        backdropFilter: "blur(10px)", // Glass effect
        transition: "width 0.7s, background-color 0.7s, padding 0.7s" // Apply transition to all relevant properties
      }}
    >
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {!isMenuOpen && (
          <div className="inline-flex items-center space-x-2">
            <span className="h-[10%]">
              <img
                src={Logo}
                alt="Club Logo"
                className={`transition-all duration-700 ${ // Increased duration
                  scrollY > 50 ? "h-[2.5rem]" : "h-[3.5rem]"
                  }`}
              />
            </span>
          </div>
        )}
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.1, color: "#f7921a" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `relative text-sm font-semibold transition-colors duration-300 ease-in-out flex items-center space-x-2 ${isActive
                      ? "text-accent after:scale-x-100 after:origin-bottom-left after:shadow-orange-glow"
                      : "text-gray-100"
                    } hover:text-accent hover:after:scale-x-100 hover:after:origin-bottom-left
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-accent after:w-full after:scale-x-0 after:transition-transform after:duration-300 after:ease-out`
                  }
                >
                  <span>{item.name}</span>
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>
        {!isMenuOpen && (
          <div className="hidden lg:block">
            <img
              src={vitLogo}
              alt="VIT Logo"
              className={`transition-all duration-700 ${scrollY > 50 ? "h-[2.5rem]" : "h-[3rem]"
                }`}
            />
          </div>
        )}
        <div className="lg:hidden">
          <HamburgerMenu toggle={toggleMenu} isOpen={isMenuOpen} />
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5 p-4">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-end">
                  <div className="-mr-2">
                    <HamburgerMenu toggle={toggleMenu} isOpen={isMenuOpen} />
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        onClick={toggleMenu} // Close menu on item click
                        className={({ isActive }) =>
                          `block w-full text-center rounded-md p-4 text-lg font-semibold relative transition-colors duration-300 ease-in-out flex items-center justify-center space-x-2 ${isActive
                            ? "text-accent bg-neutral-800 after:scale-x-100 after:origin-bottom-left after:shadow-orange-glow"
                            : "text-gray-100 hover:bg-neutral-800"
                          } hover:text-accent hover:after:scale-x-100 hover:after:origin-bottom-left
                          after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-accent after:w-full after:scale-x-0 after:transition-transform after:duration-300 after:ease-out`
                        }
                      >
                        <span>{item.name}</span>
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
