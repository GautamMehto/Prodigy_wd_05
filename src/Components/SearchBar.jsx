import React from 'react'
import ScrollDown from "../WeatherIcon/scroll-bar.png"

const SearchBar = ({ cityname, setCityName, Weather }) => {
  return (
    <div className='Background w-full h-screen bg-slate-400 flex flex-col items-center justify-center'>
      <video src="https://cdn.pixabay.com/vimeo/543910236/bike-72566.mp4?width=1280&hash=5d29723048789e6d3617d566be58cf8ca6ab948a" className='w-full h-full absolute bottom-0 left-0 object-cover' muted autoPlay loop ></video>
      <div className='w-full h-full flex relative items-center justify-center'>
        <div className='w-full h-auto flex flex-col justify-center items-center gap-5'>
          <div className='w-full h-auto text-3xl text-white font-semibold flex items-center justify-center'>
            <h1>
              Find Weather Forecast
            </h1>
          </div>
          <div className='w-full h-auto flex justify-center items-center gap-5'>
            <input value={cityname} type="text" placeholder='Enter City Name....' className='w-2/5 p-5 py-2 backdrop-blur-md bg-white/70 rounded-tl-lg rounded-bl-lg' onChange={(e) => {
              setCityName(e.target.value)
            }}
            />
            <a href='#WeatherBack' className='btn w-max h-auto bg-white/70 backdrop-blur-md p-5 py-2 rounded-tr-lg rounded-br-lg hover:outline-1 active:scale-95 hover:bg-black hover:text-white' onClick={(e) => {
              Weather()
            }}>Search</a>
          </div>
        </div>
        <a href='#WeatherBack' className='ScrollBtn w-max h-auto p-10 py-2 rounded-lg flex flex-col gap-3 items-center justify-center absolute bottom-10 hidden text-white' id='ScrollBtn'><img className='ScrollBar w-[40px] invert' src={ScrollDown} alt="Humidity" />Scroll Down</ a>
      </div>
    </div>
  )
}

export default SearchBar;
 