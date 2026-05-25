import {
  Sun,
  CloudSun,
  Cloud,
  CloudFog,
  CloudRain,
  CloudSnow,
  CloudLightning,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "City Map", href: "/citymap" },
  { label: "Sign In", href: "/sign-in" },
];

export const CITIES = [
  {
    name: "Darwin",
    latitude: -12.4634,
    longitude: 130.8456,
    top: "18%",
    left: "48%",
  },
  {
    name: "Perth",
    latitude: -31.9505,
    longitude: 115.8605,
    top: "55%",
    left: "36%",
  },
  {
    name: "Brisbane",
    latitude: -27.4698,
    longitude: 153.0251,
    top: "45%",
    left: "65%",
  },
  {
    name: "Adelaide",
    latitude: -34.9285,
    longitude: 138.6007,
    top: "62%",
    left: "54%",
  },
  {
    name: "Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
    top: "57%",
    left: "64%",
  },
  {
    name: "Canberra",
    latitude: -35.2809,
    longitude: 149.13,
    top: "62%",
    left: "62%",
  },
  {
    name: "Melbourne",
    latitude: -37.8136,
    longitude: 144.9631,
    top: "67%",
    left: "58%",
  },
  {
    name: "Hobart",
    latitude: -42.8821,
    longitude: 147.3272,
    top: "77%",
    left: "61%",
  },
];

export const WEATHER_CODES: Record<number, string> = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  61: "Rain",
  71: "Snow",
  95: "Thunderstorm",
};

export const WEATHER_ICONS: Record<number, any> = {
  0: Sun,
  1: CloudSun,
  2: CloudSun,
  3: Cloud,
  45: CloudFog,
  51: CloudRain,
  61: CloudRain,
  71: CloudSnow,
  95: CloudLightning,
};

export const CURRENT_UNITS: Record<string, string> = {
  temperature_2m: "°C",
  wind_speed_10m: "km/h",
};
