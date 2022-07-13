import { useState } from 'react';
import { BASED_URL, DEFAULT_CITY } from '../../const/const';
import { WeatherNow } from '../../types/types';
import { normalaizeResponseServer } from '../../utils/utils';
import './app.css';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [isError,setError] = useState<boolean>(false);
  const [isDisabled,setDisabled] = useState<boolean>(false);
  const [dataWeather,setDataWeater] = useState<null | WeatherNow>(null);
  
  async function fetchWeather(){
    try {
    const response = await fetch(`${BASED_URL}data/2.5/weather?lat=${DEFAULT_CITY.latitude}&lon=${DEFAULT_CITY.longitude}&appid=${API_KEY}&units=metric`);
    const data = normalaizeResponseServer(await response.json())
    return data;
    } catch (error){
      setError(true);
    }
  }
 

  async function onClickButton(){
    setDisabled(true);
    const weatherNow = await fetchWeather();
    if(weatherNow){
       setDataWeater(weatherNow);
       setDisabled(false);
    } else {
      setDisabled(false);
    }
  }
  
  return (
    <section className="app__section flex justify-center items-center flex-col gap-40 transition-transform">
      <h1 className="text-center text-3xl font-bold cursor-default">
        Узнать погоду в городе Челябинск.
      </h1>
      <section className="flex justify-center items-center flex-col gap-1">
        <button className="text-center flex pr-10 pl-10 gap-1 border border-indigo-500 py-1 rounded-md text-base hover:border-indigo-800 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 " onClick={onClickButton} disabled={isDisabled} >
        <svg className=" transition-opacity animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="rgb(99 102 241)" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
          Click</button>
        {isError && <h4 className="text-center uppercase cursor-default text-rose-800 text-base">Error</h4>}
        {dataWeather && <div className="text-center cursor-default text-3xl font-bold ">{dataWeather.temperature}&deg; Температура сейчас</div>}
      </section>
    </section>
  );
}

export default App;
