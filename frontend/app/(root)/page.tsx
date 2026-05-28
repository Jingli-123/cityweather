"use client";

import Image from "next/image";
import HeroText from "./shared/HeroText";
import { useEffect, useState } from "react";
import { socket } from "@/lib/socket";
import { toast } from "sonner";
import { useMediaQuery, useTheme } from "@mui/material";
import { CITIES, WEATHER_CODES } from "@/lib/constance";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    socket.on("weather-alert", (data) => {
      if(data.error){
        toast.error('Weather service temporarily unavailable.')
        return;
      }
      const weather = WEATHER_CODES[data.code];
      toast.info(`${data.city} Weather Alert: ${weather}`);
    });
    return () => {
      socket.off("weather-alert");
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {isMobile ? (
        <Image
          src="/mobile-homepage.png"
          alt="Background"
          fill
          priority
          className="object-cover object-top"
        />
      ) : (
        <Image
          src="/homepage.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-top"
        />
      )}

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <HeroText />
      </div>
    </div>
  );
}
