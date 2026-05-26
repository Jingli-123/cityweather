"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useWeather from "@/app/citymap/hook/useWeather";

const texts = ["Realtime Weather", "Live City Alerts", "Modern Fullstack App"];

export default function HeroText() {
  const [index, setIndex] = useState(0);
  const { loading, currentWeather, getCurrentWeather } = useWeather();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-[85%] md:w-150 flex items-center justify-center overflow-hidden bg-blue-500/10 backdrop-blur-md border border-white/20">
      <AnimatePresence mode="wait">
        <motion.h1
          key={texts[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-5xl text-black font-bold p-2"
        >
          {texts[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
