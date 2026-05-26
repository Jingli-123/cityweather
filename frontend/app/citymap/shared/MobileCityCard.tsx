"use client";

import Image from "next/image";
import { CircularProgress, Typography } from "@mui/material";
import { IMobileCityCardProps } from "@/components/types";
import useWeather from "../hook/useWeather";
import dayjs from "dayjs";
import { WEATHER_CODES } from "@/lib/constance";

export default function MobileCityCard({
  cityName,
  cityPic,
  selectedCity,
  latitude,
  longitude,
  onSelect,
}: IMobileCityCardProps) {
  const { loading, currentWeather, getCurrentWeather } = useWeather();
  const weather = currentWeather
    ? WEATHER_CODES[currentWeather.weather_code]
    : null;
  return (
    <button
      className="relative w-full h-20 overflow-hidden"
      onClick={() => {
        onSelect(cityName);
        getCurrentWeather(latitude, longitude);
      }}
    >
      {/* background pic */}
      <Image
        src={cityPic || "/sydney.png"}
        alt="Background"
        fill
        priority
        className="object-cover object-top cursor-pointer"
      />

      {/* glass top */}
      {selectedCity === cityName ? (
        <></>
      ) : (
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xs" />
      )}

      {/* content */}
      <div className="relative z-10 h-full flex items-center justify-between px-6">
        <Typography
          variant="h5"
          sx={{
            color: selectedCity === cityName ? "yellow" : "white",
          }}
        >
          {cityName}
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <div>
            {currentWeather && (
              <>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                  }}
                >
                  {dayjs(currentWeather?.time).format("YYYY-MM-DD")}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                  }}
                >
                  {weather}
                </Typography>
              </>
            )}
          </div>
        )}
      </div>
    </button>
  );
}
