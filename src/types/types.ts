export type WeatherNow = {
  cityName : string,
  speedWind: number,
  temperature: number,
}
export type Wind = {
  speed : number,
  deg : number,
}
export interface ResponseServerObject {
  wind: Wind,
  name: string,
}