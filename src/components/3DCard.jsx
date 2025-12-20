import { CardBody, CardContainer, CardItem } from "./ui/3d-card.tsx";
import PropTypes from 'prop-types';

export function ThreeDCardDemo({ name, position, image, isTop = false, objectPosition = "center" }) {
  return (
    <CardContainer 
      className="inter-var" 
      containerClassName="py-6"
      tiltIntensity={40}
    >
      <CardBody className="bg-gradient-to-br from-zinc-900 to-black relative group/card border-amber-500/20 hover:border-amber-500/60 transition-all duration-700 w-full md:w-[24rem] h-auto rounded-xl p-7 border shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden">
        
        {/* Golden Technical Grid Background */}
        <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700 pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' fill='none' stroke='%23f59e0b' stroke-width='1'/%3E%3C/svg%3E")`, backgroundSize: '40px 40px' }} 
        />

        {/* Animated Golden Border Pulse */}
        <div className="absolute inset-0 border border-amber-500/0 group-hover:border-amber-500/30 transition-all duration-1000 rounded-xl" />

        {/* Technical Corner Accents - Golden */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-amber-500/30 group-hover/card:border-amber-500 transition-all duration-500 rounded-tl-xl" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-amber-500/30 group-hover/card:border-amber-500 transition-all duration-500 rounded-tr-xl" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-amber-500/30 group-hover/card:border-amber-500 transition-all duration-500 rounded-bl-xl" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-amber-500/30 group-hover/card:border-amber-500 transition-all duration-500 rounded-br-xl" />

        {/* Metadata/Tech Text - Amber */}
        <div className="absolute top-3 left-6 text-[7px] font-mono text-amber-500/40 group-hover/card:text-amber-500/70 transition-colors duration-500 uppercase tracking-[0.3em]">
          Core_Protocol_v3.0
        </div>
        <div className="absolute top-3 right-6 text-[7px] font-mono text-amber-500/40 group-hover/card:text-amber-500/70 transition-colors duration-500 uppercase tracking-widest">
          {Math.random().toString(16).slice(2, 10).toUpperCase()}
        </div>

        <CardItem
          translateZ="50"
          className="w-full relative overflow-hidden rounded-lg aspect-[4/5] mb-6 shadow-[0_0_40px_rgba(245,158,11,0.1)] border border-amber-500/10 group-hover/card:border-amber-500/40 transition-colors duration-500"
        >
          <img
            src={image}
            className="h-full w-full object-cover grayscale-[0.3] group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-1000 ease-out"
            style={{ objectPosition }}
            alt={name}
            loading="lazy"
            decoding="async"
          />
          
          {/* Golden Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
          <div className="absolute inset-0 ring-1 ring-inset ring-amber-500/10 group-hover/card:ring-amber-500/30 transition-all duration-500" />
          
          {/* Dynamic Light Scan Effect */}
          <div className="absolute inset-0 w-full h-1 bg-amber-500/20 blur-sm -translate-y-full group-hover/card:animate-[scan_3s_linear_infinite]" />

          {isTop && (
            <div className="absolute top-4 right-4 z-20">
              <div className="bg-gradient-to-r from-amber-600 to-amber-400 text-black text-[9px] font-black px-4 py-1.5 rounded-sm skew-x-[-15deg] shadow-[0_0_20px_rgba(245,158,11,0.4)] border-r-4 border-white">
                FACULTY
              </div>
            </div>
          )}
        </CardItem>

        <div className="relative z-10 space-y-2">
          <div className="min-w-0">
            <CardItem
              as="p"
              translateZ="50"
              className="text-amber-400 font-mono text-lg md:text-xl font-black uppercase tracking-[0.1em] flex items-center gap-3 mb-1"
            >
              <div className="flex gap-1 items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
                <div className="w-8 h-[2px] bg-gradient-to-r from-amber-500 to-transparent"></div>
              </div>
              {position}
            </CardItem>
            <CardItem
              translateZ="30"
              className="text-xl md:text-2xl font-bold text-white/90 tracking-tight flex items-center gap-2"
            >
              <span className="text-amber-500/30 text-xs font-mono">ID_</span>
              {name}
            </CardItem>
          </div>
          
          <div className="flex justify-end items-center pt-2">
            <CardItem translateZ="20" className="opacity-40 group-hover/card:opacity-100 transition-opacity">
              <div className="w-12 h-12 border-2 border-amber-500/20 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 border-t-2 border-amber-500 rounded-full animate-spin" />
                <div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,1)]" />
              </div>
            </CardItem>
          </div>
        </div>

        {/* Premium Golden Glows */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none group-hover/card:bg-amber-500/20 transition-all duration-1000" />
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none group-hover/card:bg-amber-500/10 transition-all duration-1000" />
      </CardBody>
    </CardContainer>
  );
}

ThreeDCardDemo.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isTop: PropTypes.bool,
  objectPosition: PropTypes.string,
};
