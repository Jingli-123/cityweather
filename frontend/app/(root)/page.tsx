"use client";

import Image from "next/image";
import HeroText from "./shared/HeroText";
import { useMediaQuery, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
