"use client";

import Image from "next/image";
import { Button, Typography } from "@mui/material";
import { IMobileCityCardProps } from "@/components/types";
import useWeather from "../hook/useWeather";
import { useEffect } from "react";
import dayjs from "dayjs";
import {
  CITIES,
  WEATHER_CODES,
  WEATHER_ICONS,
  CURRENT_UNITS,
} from "@/lib/constance";

export default function MobileCityCard({
  cityName,
  cityPic,
  loading,
  date,
  weather
}: IMobileCityCardProps) {

 
  return (
    <div className="relative w-full h-20 overflow-hidden">
      {/* background pic */}
      <Image
        src={cityPic}
        alt="Background"
        fill
        priority
        className="object-cover object-top"
      />

      {/* glass top */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xs" />

      {/* content */}
      <div className="relative z-10 h-full flex items-center justify-between px-6">
        <Typography
          variant="h5"
          sx={{
            color: "white",
          }}
        >
          {cityName}
        </Typography>
        {loading ? (
          <Button size="small" loading={loading} variant="text" disabled>
            Disabled
          </Button>
        ) : (
          <div>
            <Typography
              variant="body2"
              sx={{
                color: "white",
              }}
            >
              {date}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "white",
              }}
            >
              {weather}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}
