export type WeatherNow = {
  cityName : string,
  temperature: number,
}
export type ObjectMain = {
  temp : number,
}

export interface ResponseServerObject {
  main: ObjectMain,
  name: string,
}