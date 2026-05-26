"use client";

import MobileCityCard from "./MobileCityCard";
import useWeather from "../hook/useWeather";
import { useEffect, useState } from "react";
import { ICurrentWeather } from "@/components/types";
import dayjs from "dayjs";
import { socket } from "@/lib/socket";
import { toast } from "sonner";
import { CITIES, WEATHER_CODES } from "@/lib/constance";

export default function MobileCityMap() {
  const [cityWeather, setCityWeather] = useState<ICurrentWeather[]>([]);
  const { loading, getCurrentWeather } = useWeather();
  useEffect(() => {
    socket.on("weather-alert", (data) => {
      console.log(data);
      const weather = WEATHER_CODES[data.code];
      toast.error(`${data.city} Weather Alert: ${weather}`);
    });
    return () => {
      socket.off("weather-alert");
    };
  }, []);

  useEffect(() => {
    const fetchAll = async () => {
      const res: ICurrentWeather[] = await Promise.all(
        CITIES.map((city) =>
          getCurrentWeather(city.latitude, city.longitude, city.name),
        ),
      );
      setCityWeather(res || []);
      console.log("data", res);
    };
    fetchAll();
  }, []);

  const CITYOBJ = cityWeather.map((city) => {
    const cityobj = CITIES.find((item) => item.name === city.cityName);
    return {
      ...city,
      cityobj,
    };
  });
  return (
    <div className="mt-[80px]">
      {CITYOBJ.map((item) => {
        console.log("cityobj", item);
        return (
          <div
            key={item.cityName}
            className="flex items-center justify-center w-full"
          >
            <MobileCityCard
              cityName={item.cityName as string}
              cityPic={item.cityobj?.cityPic as string}
              date={dayjs(item.time).format("YYYY-MM-DD")}
              weather={WEATHER_CODES[item.weather_code || 0]}
              loading={loading}
            />
          </div>
        );
      })}
    </div>
  );
}
