"use client";

import Image from "next/image";
import { CITIES, WEATHER_CODES } from "@/lib/constance";
import PopUp from "./PopUp";
import { useEffect, useState } from "react";
import MapPin from "./MapPin";
import { socket } from "@/lib/socket";
import { toast } from "sonner";

export default function CityMap() {
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  const [cityName, setCityName] = useState<string>("");

  useEffect(() => {
    socket.on("weather-alert", (data) => {
      if (data.error) {
        toast.error("Weather service temporarily unavailable.");
      }
      const weather = WEATHER_CODES[data.code];
      toast.info(`${data.city} Weather Alert: ${weather}`);
    });
    return () => {
      socket.off("weather-alert");
    };
  }, []);

  const handleOpen = (name: string) => {
    setOpenPopUp(true);
    setCityName(name);
  };

  const handleClose = () => {
    setOpenPopUp(false);
  };
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center">
      {/* Australia map */}
      <Image
        alt="australia map"
        src="/australia-map.webp"
        width={800}
        height={800}
      />
      {openPopUp && (
        <div className="absolute z-50">
          <PopUp onClose={handleClose} cityName={cityName} />
        </div>
      )}

      {/* Australia cities */}
      {CITIES.map((item) => {
        return (
          <div
            key={item.name}
            className="absolute flex"
            style={{
              top: item.top,
              left: item.left,
            }}
          >
            <MapPin
              onclick={() => handleOpen(item.name)}
              cityName={item.name}
            />
          </div>
        );
      })}
    </div>
  );
}
