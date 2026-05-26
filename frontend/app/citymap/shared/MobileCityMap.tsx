"use client";

import MobileCityCard from "./MobileCityCard";
import { useEffect, useState } from "react";
import { socket } from "@/lib/socket";
import { toast } from "sonner";
import { CITIES, WEATHER_CODES } from "@/lib/constance";

export default function MobileCityMap() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
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

  return (
    <div className="mt-[80px]">
      {CITIES.map((item) => {
        console.log("cityobj", item);
        return (
          <div
            key={item.name}
            className="flex items-center justify-center w-full"
          >
            <MobileCityCard
              cityName={item.name as string}
              cityPic={item.cityPic as string}
              latitude={item.latitude}
              longitude={item.longitude}
              selectedCity={selectedCity || ''}
              onSelect={setSelectedCity}
            />
          </div>
        );
      })}
    </div>
  );
}
