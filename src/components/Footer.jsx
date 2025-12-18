// src/components/Footer.jsx
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaLocationDot,
  FaArrowRight,
  FaHeart
} from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/BlockchainClubVITB", color: "hover:text-gray-300" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/blockchain-club-vitb/posts/?feedView=all", color: "hover:text-blue-500" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@BlockchainClubVITB", color: "hover:text-red-500" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/blockchain.vitb/", color: "hover:text-pink-500" },
    { icon: <FaWhatsapp />, url: "https://chat.whatsapp.com/KI3mnptIqiR6gTgv0grRJG", color: "hover:text-green-500" },
    { icon: <FaEnvelope />, url: "mailto:blockchainclub@vitbhopal.ac.in", color: "hover:text-orange-500" },
  ];

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Club", path: "/about-club" },
    { label: "Meet the Team", path: "/about" },
    { label: "Events & Workshops", path: "/events" },
    { label: "Blog & Insights", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
    { label: "Join the Club", path: "/contact" },
  ];

  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden pt-20 pb-10">
      {/* Background Gradient/Glow - blending with body */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-orange-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="flex flex-col items-start space-y-6">
            <Link to="/" className="inline-block">
              <img src={Logo} alt="Blockchain Club Logo" className="h-24 w-auto brightness-200" />
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Empowering the next generation of Web3 innovators at VIT Bhopal University.
              We are a community driven by curiosity, code, and decentralized ideas.
            </p>

            <div className="pt-4">
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Connect With Us</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-900 border border-gray-800 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${social.color} hover:border-gray-600`}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:pl-16">
            <h4 className="text-white font-bold text-lg mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
                  >
                    <FaArrowRight className="text-xs text-orange-500 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Visit Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              Visit Us
            </h4>
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors duration-300 backdrop-blur-sm">
              <div className="flex items-start mb-4">
                <FaLocationDot className="text-orange-500 mt-1 min-w-[20px] mr-3" />
                <p className="text-sm leading-relaxed">
                  VIT Bhopal University<br />
                  Bhopal-Indore Highway, Kothrikalan<br />
                  Sehore, Madhya Pradesh - 466114
                </p>
              </div>
              <div className="flex items-center mb-6">
                <FaEnvelope className="text-orange-500 min-w-[20px] mr-3" />
                <a href="mailto:blockchainclub@vitbhopal.ac.in" className="text-sm hover:text-white transition-colors">
                  blockchainclub@vitbhopal.ac.in
                </a>
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Subscribe to our newsletter"
                  className="w-full bg-black border border-gray-700 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                />
                <button className="absolute right-2 top-2 p-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-center items-center text-sm text-gray-500">
          <p className="text-center">
            &copy; {currentYear} Blockchain Club VIT Bhopal. Made with <FaHeart className="inline text-red-500 mx-1" /> by Tech Team.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;