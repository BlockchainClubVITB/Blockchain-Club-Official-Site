// src/components/AboutUs.jsx
import { BackgroundBoxesDemo } from "./BackgroundBoxes.jsx";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="mx-auto max-w-full">
        {/* Hero Section */}
        <BackgroundBoxesDemo
          heading={"ABOUT OUR CLUB"}
          subheading={
            "Where Innovation Meets Blockchain Technology"
          }
        />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          {/* Club Description */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-orange-500 mr-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Blockchain Club is a vibrant and progressive group of blockchain aficionados.
              In order to promote information sharing and creativity, the club holds lively
              talks, workshops, and hackathons that are centered on examining the revolutionary
              potential of blockchain technology. Come explore the world of decentralized
              networks and game-changing apps with us.
            </p>
          </div>

          {/* Features/Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 group hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-500/20 rounded-lg mr-4 group-hover:bg-orange-500/30 transition-colors">
                  <FaUsers className="text-orange-500 text-2xl" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors">Community</h3>
              </div>
              <p className="text-gray-400">
                Join a thriving community of blockchain enthusiasts, developers, and innovators.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 group hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-500/20 rounded-lg mr-4 group-hover:bg-orange-500/30 transition-colors">
                  <FaLightbulb className="text-orange-500 text-2xl" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors">Innovation</h3>
              </div>
              <p className="text-gray-400">
                Explore cutting-edge blockchain technologies and their real-world applications.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 group hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-500/20 rounded-lg mr-4 group-hover:bg-orange-500/30 transition-colors">
                  <FaCalendarAlt className="text-orange-500 text-2xl" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors">Events</h3>
              </div>
              <p className="text-gray-400">
                Participate in workshops, hackathons, and tech talks led by industry experts.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 group hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-500/20 rounded-lg mr-4 group-hover:bg-orange-500/30 transition-colors">
                  <FaMapMarkerAlt className="text-orange-500 text-2xl" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors">Location</h3>
              </div>
              <p className="text-gray-400">
                Based at VIT Bhopal University, serving as a hub for blockchain education.
              </p>
            </div>
          </div>

          {/* Location Section */}
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-orange-500 mr-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Location</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start mb-6">
                  <FaMapMarkerAlt className="text-orange-500 text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">VIT Bhopal University</h3>
                    <p className="text-gray-300">
                      Bhopal-Indore Highway<br />
                      Kothrikalan, Sehore<br />
                      Madhya Pradesh - 466114<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4">What We Do</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Weekly Technical Sessions</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Blockchain Hackathons</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Industry Expert Talks</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Project Development</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Research & Innovation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h4 className="text-xl font-bold mb-4">Join Our Community</h4>
                <p className="text-gray-300 mb-6">
                  Whether you&apos;re a beginner curious about blockchain or an experienced developer,
                  there&apos;s a place for you in our club. Together, we&apos;re building the future of
                  decentralized technology.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <p className="text-orange-400 font-semibold">&quot;Blockchain is not just a technology, it&apos;s a revolution.&quot;</p>
                  </div>
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <p className="text-orange-400 font-semibold">&quot;Join us in shaping the decentralized future.&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Explore Blockchain?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our events and workshops to dive deep into blockchain technology,
              smart contracts, DeFi, NFTs, and more.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/events" className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 inline-block">
                Join Events
              </Link>
              <Link to="/contact" className="px-8 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 inline-block">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;