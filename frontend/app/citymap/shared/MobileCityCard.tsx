"use client";

import Image from "next/image";
import { CircularProgress, Typography } from "@mui/material";
import { IMobileCityCardProps } from "@/components/types";
import useWeather from "../hook/useWeather";
import dayjs from "dayjs";
import { WEATHER_CODES, CURRENT_UNITS } from "@/lib/constance";

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
        <div className="flex flex-col gap-1">
          <Typography
            variant="h5"
            className="!m-0 !p-0"
            sx={{
              color: selectedCity === cityName ? "yellow" : "white",
            }}
          >
            {cityName}
          </Typography>
          {selectedCity === cityName ? (
            <Typography variant="caption" className="text-white !m-0 !p-0">
              {currentWeather?.temperature_2m}
              {CURRENT_UNITS.temperature_2m}
            </Typography>
          ) : (
            <Typography variant="caption" className="text-white !m-0 !p-0">
              Tap to view weather
            </Typography>
          )}
        </div>

        {loading ? (
          <CircularProgress />
        ) : (
          <div>
            {currentWeather && selectedCity === cityName && (
              <>
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                  }}
                >
                  {dayjs(currentWeather?.time).format("YYYY-MM-DD")}
                </Typography>

                <Typography
                  variant="h6"
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
