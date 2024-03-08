import React, { useState } from 'react';
import sun from "../WeatherIcon/sun.png";
import clouds from "../WeatherIcon/clouds.png";
import mist from "../WeatherIcon/mist.png";
import rain from "../WeatherIcon/rain.png";
import haze from "../WeatherIcon/haze.png";
import snow from "../WeatherIcon/snow.png";
import smoke from "../WeatherIcon/smoke.png";
import drizzle from "../WeatherIcon/drizzle.png";
import humidity from "../WeatherIcon/humidity.png";
import wind from "../WeatherIcon/wind.png";
import windDirection from "../WeatherIcon/wind-direction.png";
import fog from "../WeatherIcon/fog.png";
import Forecast from './Forecast';
import sunrise from "../WeatherIcon/sunrise.png";
import sunset from "../WeatherIcon/sunset.png";

const WeatherDisplay = ({ weatherData, forcastData }) => {
    let time = new Date()
    let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var month = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    let data = weatherData

    if (!weatherData) {
        return <div className='w-full h-screen bg-slate-300 flex justify-center items-center gap-5 flex-col hidden'>
            <div>Loading...</div>;
        </div>
    }
    function checkWeather(weather) {
        switch (weather) {
            case "Clear":
                return <img src={sun} alt="sun" className='w-[50%]' />;
            case "Smoke":
                return <img src={smoke} alt="smoke" className='w-[50%]' />;
            case "Haze":
                return <img src={haze} alt="haze" className='w-[50%]' />;
            case "Clouds":
                return <img src={clouds} alt="clouds" className='w-[50%]' />;
            case "snow":
                return <img src={snow} alt="snow" className='w-[50%]' />;
            case "Rain":
                return <img src={rain} alt="rain" className='w-[50%]' />;
            case "Mist":
                return <img src={mist} alt="mist" className='w-[50%]' />;
            case "Drizzle":
                return <img src={drizzle} alt="drizzle" className='w-[50%]' />;

            default:
                break;
        }
    }
    const unixTimestampToDate = (timestamp) => {
        return new Date(timestamp * 1000); // Converting to milliseconds
    };
    // Formats a JavaScript Date object to a readable time string
    const formatTime = (date) => {
        return date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    };
    function checkTime(MilliTime) {
        const Time = formatTime(unixTimestampToDate(MilliTime));
        return Time
    }
    return (
        <div className='WeatherBack w-full min-h-screen flex justify-center items-center gap-5 flex-col relative z-10' id='WeatherBack'>
            <div className='Container w-[90%] h-[80%] bg-slate-50/10 backdrop-blur-sm px-5 text-white flex justify-center gap-5 items-center rounded-3xl'>
                <div className='WeatherContainer w-[35%] h-[100%] p-5 px-0 bg-slate-100/0 rounded-3xl flex flex-col justify-evenly items-center'>
                    <div className='w-full h-auto'>
                        <div className='w-full h-auto flex justify-between items-center'>
                            <h1 className='City Text2 text-3xl font-bold flex flex-col items-start'>
                                {data.name}
                                <h6 className='Text3 text-xl font-thin'> ({data.sys.country})</h6>
                            </h1>
                            <h1 className='Date Text2 text-3xl font-bold flex flex-col items-end'>
                                {time.getDate()}th.
                                {month[time.getMonth() + 1]}
                                <h6 className='Text3 text-2xl font-thin'> {daysInWeek[time.getDay()]}</h6>
                            </h1>
                        </div>
                        <div className='w-full h-auto flex justify-between items-center'>
                            <h1 className='Text2 text-xl font-bold flex justify-center items-center gap-3'>
                                <img className='w-[40px]' src={sunrise} alt="Sunrise" />
                                <h6 className='Suntime w-min Text3 text-xl font-thin'> {checkTime(data.sys.sunrise)}</h6>
                            </h1>
                            <h1 className='Text2 text-xl font-bold flex justify-center items-center gap-3'>
                                <img className='w-[40px]' src={sunset} alt="Sunset" />
                                <h6 className='Suntime w-min Text3 text-xl font-thin'>{checkTime(data.sys.sunset)}</h6>
                            </h1>
                        </div>
                    </div>
                    <div className='Temp w-full flex flex-col justify-center items-center Text1 text-8xl'>
                        <div className='flex flex-col justify-center items-center text-xl'>
                            {checkWeather(data.weather[0].main)}
                            {data.weather[0].main}
                        </div>
                        <div>
                            {Math.round(data.main.temp - 273.15)}°C
                        </div>
                    </div>
                    <div className='Other w-full flex justify-between items-center flex-wrap'>
                        <p className='OtherDetails flex flex-col justify-center items-center gap-0 text-xl'><img className='w-[40px]' src={humidity} alt="Humidity" /> {data.main.humidity}%</p>
                        <p className='OtherDetails flex flex-col justify-center items-center gap-0 text-xl'><img className='w-[40px]' src={wind} alt="wind" />  {data.wind.speed} m/s</p>
                        <p className='OtherDetails flex flex-col justify-center items-center gap-0 text-xl'><img className='w-[40px]' src={windDirection} alt="wind" />  {data.wind.deg} deg</p>
                        <p className='OtherDetails flex flex-col justify-center items-center gap-0 text-xl'><img className='w-[40px]' src={fog} alt="fog" /> {data.visibility}</p>
                    </div>
                </div>
                <div className='ForcastContainer min-w-[45%] max-w-[65%] p-[10px] h-[80vh] flex justify-center items-center bg-slate-100/50 rounded-3xl gap-3'>
                    <Forecast forcastData={forcastData.list[5]} />
                    <Forecast forcastData={forcastData.list[13]} />
                    <Forecast forcastData={forcastData.list[21]} />
                    <Forecast forcastData={forcastData.list[29]} />
                    <Forecast forcastData={forcastData.list[37]} />
                </div>
            </div>
        </div>
    );
};

export default WeatherDisplay;