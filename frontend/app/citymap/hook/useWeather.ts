"use client";

import { useCallback, useState } from "react";
import { ICurrentWeather } from "@/components/types";
import { weatherUrls } from "@/lib/apiurl";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";

export default function useWeather() {
  const { isSignedIn } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [currentWeather, setcurrentWeather] = useState<ICurrentWeather | null>(
    null,
  );

  const getCurrentWeather = useCallback(
    async (latitude: number, longitude: number, cityName?: string) => {
      setLoading(true);
      // if (!isSignedIn) {
      //   toast.error("Please login");
      //   setLoading(false);
      //   return;
      // }
      try {
        const url = weatherUrls.getCurrentWeather;
        const res = await axios.get(url(latitude, longitude));
        console.log("current weather", res);
        if (res.status === 200) {
          setcurrentWeather(res.data.current);
          const data = { ...res.data.current, cityName: cityName };
          return data;
        } else {
          setcurrentWeather(null);
          return toast.error("Something went wrong.");
        }
      } catch (err: unknown) {
        setcurrentWeather(null);
        if (err instanceof Error) {
          return toast.error(
            `Fetch current weather failed with error: ${err.message}`,
          );
        } else {
          return toast.error(
            `Fetch current weather failed with unknown error: ${err}`,
          );
        }
      } finally {
        setLoading(false);
      }
    },
    [isSignedIn],
  );

  return { loading, currentWeather, getCurrentWeather };
}
