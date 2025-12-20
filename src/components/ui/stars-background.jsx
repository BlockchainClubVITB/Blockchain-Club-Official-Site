import React, { useMemo } from "react";
import { motion } from "framer-motion";

export const StarsBackground = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      size: Math.random() * 1.5 + 0.5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 3,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          className="bg-amber-500/40 rounded-full blur-[1px] shadow-[0_0_8px_rgba(245,158,11,0.4)]"
        />
      ))}
      
      {/* Subtle Golden Nebula Clouds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.03),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.02),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.02),transparent_50%)]" />
    </div>
  );
};
