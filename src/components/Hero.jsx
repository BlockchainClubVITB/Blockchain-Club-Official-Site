import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Lottie from "react-lottie";
import { TypewriterEffectSmoothDemo } from "./HeroTypewriter";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import BitcoinData from "../assets/Lottie/BitcoinAnimation.json";
import { GoogleGeminiEffectDemo } from "./google-gemini-effect";
import { BackgroundBeamsDemo } from "./BackgroundBeams";
import { CardHoverEffectDemo } from "./CardHoverEffect";
import { PastEventsCards } from "./PastEvents";
import Sponsors from "./sponsors/Sponsors";

const COLORS_TOP = ["#1a202c", "#800080", "#1a202c"];

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const BitcoinAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: BitcoinData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {/* <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-50 left-0 top-0 w-full h-full flex items-center justify-center bg-neutral-900 bg-opacity-50 "
          >
            <div className="relative bg-white rounded-lg p-6">
              <button onClick={closeModal} className="absolute top-2 right-2">
              &#x274C;
              </button>
              <a href="https://forms.gle/CxV51K1SzXiQCzKg9" target="_blank">
                <img src={eventImg} alt="Event" className=" h-[25rem] md:h-[45rem] w-full"/>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
          backgroundImage,
        }}
        className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full md:w-[1182px] mx-auto space-y-4 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <TypewriterEffectSmoothDemo className="font-poppins" />
            <p className="my-6 max-w-2xl mx-auto text-center font-poppins text-base leading-relaxed md:text-lg md:leading-relaxed">
              Learn • Build • Innovate in Web3
            </p>
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              whileTap={{
                scale: 0.985,
              }}
              onClick={() => {
                window.open("https://dub.sh/blockchain-club", "_blank");
              }}
              className="group relative flex w-fit items-center gap-1.5 rounded-full bg-accent px-8 py-4 md:px-6 md:py-3 font-semibold text-white shadow-lg transition-colors hover:bg-accent/80 mx-auto"
            >
              Join Us!
              <ArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </div>
          <div className="w-full md:w-2/5 flex justify-center items-center">
            <Lottie
              options={BitcoinAnimationOptions}
              height={400}
              width={400}
            />
          </div>
        </div>

        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
      <section>
        <div className="flex flex-col md-flex-row justify-center items-center">
          <div className=""></div>
        </div>
      </section>
      {/* Motive */}
      <GoogleGeminiEffectDemo />
      <BackgroundBeamsDemo component={CardHoverEffectDemo} />
      <Sponsors />
      <section>
        <PastEventsCards />
      </section>
    </>
  );
};

export default Hero;
