"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import CityMap from "./shared/CityMap";
import MobileCityMap from "./shared/MobileCityMap";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return <>{isMobile ? <MobileCityMap /> : <CityMap />}</>;
}
