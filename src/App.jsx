import React, { useEffect, useState } from 'react';
import WeatherDisplay from './Components/WeatherDisplay';
import SearchBar from "./Components/SearchBar"
const App = () => {
  const [CityName, setCityName] = useState("Delhi")
  const [weatherData, setWeatherData] = useState(null);
  const [forcastData, setForcastData] = useState(null)

  async function Weather() {
    const apiKey = "fb3b875ea1ce4aae0063c60c33679710";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${apiKey}`;
    const forcastUrl = `https://api.openweathermap.org/data/2.5/forecast?&units=metric&appid=${apiKey}&q=${CityName}`
    try {
      let response = await fetch(url)
      let forcastResponse = await fetch(forcastUrl)
      let data = await response.json();
      let forcastData = await forcastResponse.json();
      if (response.ok && forcastResponse.ok) {
        setWeatherData(data);
        setForcastData(forcastData);
        setCityName("")
        let ScrollBtn = document.getElementById("ScrollBtn")
        ScrollBtn.style.display = "flex"
      }
      else {
        alert('Please Enter A Valid City Name');
      }
    } catch (error) {
      alert(error)
    }

  }
  useEffect(() => {
    const fetchData = async (CityName) => {
      const apiKey = "fb3b875ea1ce4aae0063c60c33679710";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${apiKey}`;
      const forcastUrl = `https://api.openweathermap.org/data/2.5/forecast?&units=metric&appid=${apiKey}&q=${CityName}`
      try {
        let response = await fetch(url)
        let forcastResponse = await fetch(forcastUrl)
        let data = await response.json();
        let forcastData = await forcastResponse.json();
        if (response.ok && forcastResponse.ok) {
          setWeatherData(data);
          setForcastData(forcastData);
        }
        else {
          alert('Please Enter A Valid City Name');
        }
      } catch (error) {
        alert(error)
      }
    };

    fetchData(CityName);
  }, [])

  return (
    <div className='w-full h-auto'>
      <SearchBar cityname={CityName} setCityName={setCityName} Weather={Weather} />
      <WeatherDisplay weatherData={weatherData} forcastData={forcastData} />
    </div>
  );
};

export default App;