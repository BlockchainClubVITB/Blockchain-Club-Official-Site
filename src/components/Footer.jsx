import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

function Footer() {
  return (
    <section className="relative overflow-x-hidden py-1 bg-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center w-full px-4">
            {/* Logo and Nav Links */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
              <img src={Logo} alt="Logo" className="h-[5rem]" />
              <Link
                  className="p-3 rounded-full border-2 border-amber-500 hover:bg-amber-500 transition-colors duration-200 cursor-pointer text-base font-medium text-gray-100 hover:text-gray-900"
                  to={"/about"}
                >
                  About Us
                </Link>
                <Link
                  className="p-3 rounded-full border-2 border-amber-500 hover:bg-amber-500 transition-colors duration-200 cursor-pointer text-base font-medium text-gray-100 hover:text-gray-900"
                  to={"/contact"}
                >
                  Contact Us
              </Link>
            </div>

            {/* Social Media */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
              <p className="text-base font-medium text-gray-100 mr-4">
                Connect with Us:
              </p>
              <span className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/blockchain-club-vitb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-blue-500 hover:bg-blue-500 transition-colors duration-200 cursor-pointer"
                >
                  <Linkedin className="text-gray-100 hover:text-accent text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/blockchain.vitb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-pink-500 hover:bg-pink-500 transition-colors duration-200 cursor-pointer"
                >
                  <Instagram className="text-gray-100 hover:text-accent text-xl" />
                </a>
              </span>
            </div>
          </div>
          {/* Copyright */}
          <div className="w-full text-center mt-8">
            <h4 className="text-white text-sm">
              &copy; Reserved to BlockchainClubVITB
            </h4>
          </div>
      </div>
    </section>
  );
}

export default Footer;
