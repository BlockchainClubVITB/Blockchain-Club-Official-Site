  import { InfiniteMovingCards } from "./ui/infinite-moving-cards.tsx";
import EventData from "./event/EventData";
<<<<<<< HEAD

export function PastEventsCards() {
=======
import { motion, useInView } from "framer-motion";
import React from "react";

export function PastEventsCards() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

>>>>>>> ec3cdb5 (Initial commit with website changes)
  const eventData = EventData();
  const latestEvent = eventData[eventData.length - 1];
  const testimonials = latestEvent.images.map((image) => ({ source: image }));

  return (
<<<<<<< HEAD
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden md:my-6 ">
=======
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-neutral-900 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden md:my-6 "
    >
>>>>>>> ec3cdb5 (Initial commit with website changes)
      <h1 className="text-lg md:text-7xl font-normal  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 mb-6">
        OUR PAST EVENTS
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
<<<<<<< HEAD
    </div>
=======
    </motion.div>
>>>>>>> ec3cdb5 (Initial commit with website changes)
  );
}
