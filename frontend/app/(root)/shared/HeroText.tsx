"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  "Realtime Weather",
  "Live City Alerts",
  "Modern Fullstack App",
];

export default function HeroText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-24 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          key={texts[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-[#2e3ef4]"
        >
          {texts[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}