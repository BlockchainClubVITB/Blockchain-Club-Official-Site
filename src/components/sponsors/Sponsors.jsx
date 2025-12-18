import { SponsorCard } from "./SponsorCard";
import accelchainLogo from "../../assets/Sponsors/accelchain-logo-removebg-preview.png";
import PropTypes from 'prop-types';
import { motion, useInView } from "framer-motion";
import React from "react";

const Sponsors = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  // Sponsor Data
  const sponsors = [
    { id: 1, name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
    { id: 2, name: "PW Skills", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbPsqWjwEnrezAerXg5Okq-dYCtFgvW5K0xA&s" },
    { id: 3, name: "Accelchain", logo: accelchainLogo },
    { id: 4, name: "InterviewBuddy", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxT6W2J3-40UX9t2ELVsd2lBlaVIsMk63iKQ&s", url: "https://www.interviewbuddy.net/" },
    { id: 5, name: "SYBGEN", logo: "https://sdn.signalhire.co/storage/company/5d92/0d2b/8015/aec7/d1db/fbe5/7a31/39e1.webp", url: "https://sybgen.com/" },
    { id: 6, name: "StockGro", logo: "https://www.stockgro.club/static/favicon.png", url: "https://www.stockgro.club/" },
    { id: 7, name: "WaySpire", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVMBPcumRRNeBXzKcstJPH-AsT3Y_azE4mw&s", url: "https://wayspire.in/" }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-neutral-900 text-white pt-16 pb-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-normal text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 mb-6">
          OUR SPONSORS
        </h2>

        <p className="text-center text-xl mb-8">
          We thank our partners for supporting the Blockchain Club&apos;s initiatives.
        </p>

        {/* First Row - 4 sponsors per row on Desktop, 1 per row on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {sponsors.slice(0, 4).map((sponsor) => (
            <SponsorWrapper key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>

        {/* Second Row - 3 sponsors per row on Desktop, Centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-6 mt-6">
          {sponsors.slice(4, 7).map((sponsor) => (
            <SponsorWrapper key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Sponsor Wrapper Component
const SponsorWrapper = ({ sponsor }) => {
  return (
    <div className="flex justify-center">
      <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
        <div className="w-full max-w-xs">
          <SponsorCard name={sponsor.name} logo={sponsor.logo} />
        </div>
      </a>
    </div>
  );
};

SponsorWrapper.propTypes = {
  sponsor: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Sponsors;
