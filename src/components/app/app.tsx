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
    const response = await fetch(`${BASED_URL}data/2.5/weather?lat=${DEFAULT_CITY.latitude}&lon=${DEFAULT_CITY.longitude}&appid=${API_KEY}`);
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
    <div className="App">
      <h1 className="text-3xl font-bold">
        Узнать погоду в городе Челябинск.
      </h1>
      <button onClick={onClickButton} disabled={isDisabled} >Click</button>
      {isError && <h4>Error</h4>}
      {dataWeather && dataWeather.temperature }
    </div>
  );
}

export default App;
