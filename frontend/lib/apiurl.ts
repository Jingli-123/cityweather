export const API_URL =
  process.env.NEXT_PUBLIC_API_URL;

export const weatherUrls = {
  getCurrentWeather: (latitude: number, longitude: number) =>
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m`,
};

