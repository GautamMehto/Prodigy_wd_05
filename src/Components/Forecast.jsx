import React from 'react'
import { format, parseISO } from 'date-fns';
import sun from "../WeatherIcon/sun.png";
import clouds from "../WeatherIcon/clouds.png";
import mist from "../WeatherIcon/mist.png";
import rain from "../WeatherIcon/rain.png";
import haze from "../WeatherIcon/haze.png";
import snow from "../WeatherIcon/snow.png";
import smoke from "../WeatherIcon/smoke.png";
import drizzle from "../WeatherIcon/drizzle.png";
import hot from "../WeatherIcon/hot.png";
import cold from "../WeatherIcon/cold.png";

const Forecast = ({ forcastData }) => {
  function checkWeather(weather) {
    switch (weather) {
      case "Clear":
        return <img src={sun} alt="sun" className='w-[80%]' />;
      case "Smoke":
        return <img src={smoke} alt="smoke" className='w-[80%]' />;
      case "Haze":
        return <img src={haze} alt="haze" className='w-[80%]' />;
      case "Clouds":
        return <img src={clouds} alt="clouds" className='w-[80%]' />;
      case "snow":
        return <img src={snow} alt="snow" className='w-[80%]' />;
      case "Rain":
        return <img src={rain} alt="rain" className='w-[80%]' />;
      case "Mist":
        return <img src={mist} alt="mist" className='w-[80%]' />;
      case "Drizzle":
        return <img src={drizzle} alt="drizzle" className='w-[80%]' />;

      default:
        break;
    }
  }

  const formatDateTime = (dtText) => {
    const dt = parseISO(dtText);

    const dateFormat = 'dd-MM-yyyy';
    const date = format(dt, dateFormat);
    const timeFormat = 'hh:mm a';
    const time = format(dt, timeFormat);

    return { date, time };
  };
  const { date, time } = formatDateTime(forcastData.dt_txt);
  return (
    <div className='w-1/5 h-full flex justify-evenly items-center text-black Text3 font-semibold'>
      <div className='w-full h-full flex flex-col justify-evenly items-center'>
        <h2 className='DateTime w-full h-auto text-center text-xl '>
          {date}
          <br />
          {time}
        </h2>
        <div className='w-full h-auto flex flex-col justify-center items-center gap-0 text-xl flex-wrap'>
          {checkWeather(forcastData.weather[0].main)}
          {forcastData.weather[0].main}
          <h2 className='flex flex-wrap font-thin text-center'>
          {forcastData.weather[0].description}
          </h2>
        </div>
        <div className='w-full h-auto flex flex-col justify-center items-center gap-3 flex-wrap'>
          <h2 className='flex flex-wrap justify-evenly items-center font-bold'>
            <img src={hot} alt="Sunrise Image" className='w-[30%]' />
            {forcastData.main.temp_max} °C
          </h2>
          <h2 className='flex flex-wrap justify-evenly items-center font-bold'>
            <img src={cold} alt="Sunrise Image" className='w-[30%]' />
            {forcastData.main.temp_min} °C
          </h2>
        </div>
      </div>

    </div>
  )
}

export default Forecast