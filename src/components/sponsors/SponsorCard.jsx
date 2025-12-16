import { CardBody, CardContainer, CardItem } from "../ui/sponsor-card";
import PropTypes from 'prop-types';

export function SponsorCard({ name, logo }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card 
        dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.3] dark:bg-neutral-900 
        dark:border-white/[0.2] border-black/[0.1] w-64 h-64 rounded-xl p-6 border 
        flex flex-col items-center justify-center transition-transform duration-300 
        hover:scale-105 hover:shadow-lg hover:border-emerald-500">
        
        {/* Logo Image */}
        <CardItem translateZ="100" className="w-24 h-24 rounded-lg overflow-hidden">
          <img src={logo} alt={name} className="w-full h-full object-cover" />
        </CardItem>

        {/* Sponsor Name */}
        <h2 className="text-xl font-bold text-center mt-4 transition-colors duration-300 group-hover/card:text-emerald-400">
          {name}
        </h2>
      </CardBody>
    </CardContainer>
  );
}

SponsorCard.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};
