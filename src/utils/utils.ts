import { ResponseServerObject, WeatherNow } from "../types/types";

export const normalaizeResponseServer = (
  {
    "wind": {
        "speed": speedWind,
        "deg": temperature,
    },
    "name": cityName,
  } : ResponseServerObject) : WeatherNow => ({
    cityName,
    temperature,
    speedWind
  });

