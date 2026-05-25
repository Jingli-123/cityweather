"use client";

import { Typography } from "@mui/material";
import { FiMapPin } from "react-icons/fi";
import { IMapPinProps } from "@/components/types";

export default function MapPin({ onclick, cityName }: IMapPinProps) {
  return (
    <>
      <button>
        <FiMapPin color="blue" size={28} />
      </button>
      <button
        onClick={onclick}
        className="bg-blue-500/10 backdrop-blur-md border border-white/20 rounded-md px-2 hover:cursor-pointer hover:text-blue-500"
      >
        <Typography>{cityName}</Typography>
      </button>
    </>
  );
}
