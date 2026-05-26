import {
  Sun,
  CloudSun,
  Cloud,
  CloudFog,
  CloudRain,
  CloudDrizzle,
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
    cityPic: "/darwin.png",
  },
  {
    name: "Perth",
    latitude: -31.9505,
    longitude: 115.8605,
    top: "55%",
    left: "36%",
    cityPic: "/perth.png",
  },
  {
    name: "Brisbane",
    latitude: -27.4698,
    longitude: 153.0251,
    top: "45%",
    left: "65%",
    cityPic: "/brisbane.png",
  },
  {
    name: "Adelaide",
    latitude: -34.9285,
    longitude: 138.6007,
    top: "62%",
    left: "54%",
    cityPic: "/adelaide.png",
  },
  {
    name: "Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
    top: "57%",
    left: "64%",
    cityPic: "/sydney.png",
  },
  {
    name: "Canberra",
    latitude: -35.2809,
    longitude: 149.13,
    top: "62%",
    left: "62%",
    cityPic: "/canberra.png",
  },
  {
    name: "Melbourne",
    latitude: -37.8136,
    longitude: 144.9631,
    top: "67%",
    left: "58%",
    cityPic: "/melbourne.png",
  },
  {
    name: "Hobart",
    latitude: -42.8821,
    longitude: 147.3272,
    top: "77%",
    left: "61%",
    cityPic: "/hobart.png",
  },
];

export const WEATHER_CODES: Record<number, string> = {
  0: "Clear sky",

  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",

  45: "Fog",
  48: "Depositing rime fog",

  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",

  56: "Light freezing drizzle",
  57: "Dense freezing drizzle",

  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",

  66: "Light freezing rain",
  67: "Heavy freezing rain",

  71: "Slight snow fall",
  73: "Moderate snow fall",
  75: "Heavy snow fall",

  77: "Snow grains",

  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",

  85: "Slight snow showers",
  86: "Heavy snow showers",

  95: "Thunderstorm",

  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

export const WEATHER_ICONS: Record<number, any> = {
  0: Sun,

  1: CloudSun,
  2: CloudSun,
  3: Cloud,

  45: CloudFog,
  48: CloudFog,

  51: CloudDrizzle,
  53: CloudDrizzle,
  55: CloudDrizzle,

  56: CloudDrizzle,
  57: CloudDrizzle,

  61: CloudRain,
  63: CloudRain,
  65: CloudRain,

  66: CloudRain,
  67: CloudRain,

  71: CloudSnow,
  73: CloudSnow,
  75: CloudSnow,

  77: CloudSnow,

  80: CloudRain,
  81: CloudRain,
  82: CloudRain,

  85: CloudSnow,
  86: CloudSnow,

  95: CloudLightning,
  96: CloudLightning,
  99: CloudLightning,
};

export const CURRENT_UNITS: Record<string, string> = {
  temperature_2m: "°C",
  wind_speed_10m: "km/h",
};
