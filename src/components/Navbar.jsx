import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
  const scrollThreshold = 3000; // Increase this value to slow down shrinking

  const width = Math.max(
    minWidth,
    maxWidth - (scrollY / scrollThreshold) * (maxWidth - minWidth)
  );

  // Dynamic background color transition
  const maxOpacity = 1; // Fully opaque
  const minOpacity = 0.2; // Minimum opacity
  const opacity = Math.max(
    minOpacity,
    maxOpacity - (scrollY / scrollThreshold) * (maxOpacity - minOpacity)
  );

  const blackToGoldenThreshold = scrollThreshold / 2;
  const goldenToGlassThreshold = scrollThreshold;

  let backgroundColor;
  if (scrollY <= blackToGoldenThreshold) {
    // Transition from black to translucent #f7921a
    const ratio = scrollY / blackToGoldenThreshold;
    const r = Math.round(0 + ratio * (247 - 0)); // 0 to 247
    const g = Math.round(0 + ratio * (146 - 0)); // 0 to 146
    const b = Math.round(0 + ratio * (26 - 0)); // 0 to 26
    backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
  } else if (scrollY <= goldenToGlassThreshold) {
    // Transition from translucent #f7921a to glass
    const ratio = (scrollY - blackToGoldenThreshold) / (goldenToGlassThreshold - blackToGoldenThreshold);
    const r = Math.round(247 + ratio * (255 - 247)); // 247 to 255
    const g = Math.round(146 + ratio * (255 - 146)); // 146 to 255
    const b = Math.round(26 + ratio * (255 - 26)); // 26 to 255
    backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
  } else {
    // Fully glass
    backgroundColor = `rgba(255, 255, 255, ${opacity})`;
  }

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
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm font-semibold hover:text-orange-500 ${isActive ? "text-orange-500" : "text-gray-100"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {!isMenuOpen && (
          <div className="hidden lg:block">
            <img
              src={vitLogo}
              alt="VIT Logo"
              className={`transition-all duration-700 ${ // Increased duration
                scrollY > 50 ? "h-[2.5rem]" : "h-[3rem]"
                }`}
            />
          </div>
        )}
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer text-white" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                          `-m-3 flex items-center rounded-md p-3 text-sm font-semibold ${isActive ? "text-orange-500" : "text-gray-100"
                          }`
                        }
                      >
                        <span className="ml-3 text-base font-medium">
                          {item.name}
                        </span>
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
