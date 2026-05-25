"use client";

import CloseButton from "@/components/ui/CloseButton";
import { PopUpProps } from "@/components/types";
import {
  CITIES,
  WEATHER_CODES,
  WEATHER_ICONS,
  CURRENT_UNITS,
} from "@/lib/constance";
import useWeather from "../hook/useWeather";
import { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import dayjs from "dayjs";

export default function PopUp({ onClose, cityName }: PopUpProps) {
  const { loading, currentWeather, getCurrentWeather } = useWeather();
  const city = CITIES.find((item) => item.name === cityName);
  useEffect(() => {
    getCurrentWeather(city?.latitude as number, city?.longitude as number);
  }, [getCurrentWeather]);

  const weather = WEATHER_CODES[currentWeather?.weather_code || 0];
  const WeatherIcon = WEATHER_ICONS[currentWeather?.weather_code || 0];
  return (
    <div className=" bg-blue-500/10 backdrop-blur-md border border-white/20 rounded-lg border z-40">
      {loading ? (
        <div className="flex items-center justify-center">
          <Button size="small" loading={loading} variant="text" disabled>
            Disabled
          </Button>
        </div>
      ) : (
        <>
          {" "}
          <div className="flex justify-end p-1">
            <CloseButton onClose={onClose} />
          </div>
          <div className="flex flex-col px-6 gap-6 mb-6">
            <div className="flex flex-row items-center gap-2">
              <Typography variant="h6" gutterBottom>
                {cityName}
              </Typography>
            </div>
            <div className="flex flex-row items-center gap-2">
              Time: {dayjs(currentWeather?.time).format("YYYY-MM-DD")}
            </div>
            <div className="flex flex-row items-center gap-2">
              Weather: {weather}
              <WeatherIcon size={40} />
            </div>
            <div className="flex flex-row items-center gap-2">
              Temperature: {currentWeather?.temperature_2m}
              {CURRENT_UNITS.temperature_2m}
            </div>
            <div className="flex flex-row items-center gap-2">
              Temperature: {currentWeather?.wind_speed_10m}
              {CURRENT_UNITS.wind_speed_10m}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
