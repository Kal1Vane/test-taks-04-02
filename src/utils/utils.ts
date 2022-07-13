import { ResponseServerObject, WeatherNow } from "../types/types";

export const normalaizeResponseServer = (
  {
    "main": {
      "temp": temperature,
  },
    "name": cityName,
  } : ResponseServerObject) : WeatherNow => ({
    cityName,
    temperature
  });

