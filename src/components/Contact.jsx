import { BackgroundBoxesDemo } from "./BackgroundBoxes";
import { SignupFormDemo } from "./Form";
import ContactAnimationJson from "../assets/Lottie/ContactAnimationData.json";
import Lottie from "react-lottie";
import { motion } from "framer-motion";

function Contact() {
  const ContactAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: ContactAnimationJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="h-full w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <BackgroundBoxesDemo
          heading={"CONTACT US!!"}
          subheading={"We want to hear from you"}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-black"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-7xl py-12 md:py-24">
            <div className="grid items-center justify-items-center gap-4 md:gap-8 lg:gap-x-4 lg:gap-y-10 lg:grid-cols-2 overflow-x-hidden">
              {/* contact from */}
              <SignupFormDemo />
              <Lottie
                options={ContactAnimationOptions}
                className="hidden md:block"
                height={400}
                width={400}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
