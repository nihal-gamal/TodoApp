import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./weather.css"

function Weather() {
    const api = {
        key: "4f8e795dcd6dbf7b9f5276bff095ffc1",
        base: "https://api.openweathermap.org/data/2.5/"
      }
      const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const search = e => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }
  // useEffect(() => {
  //   if (weather.coord) {
  //     fetch(`${api.base}forecast?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=${api.key}&units=metric`)
  //       .then(res => res.json())
  //       .then(result => {
  //         setForecast(result.list);
  //         console.log("666",result);
  //       });
  //   }
  // }, [weather]);
  return (
    
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <Link to={`${weather?.id}`}>
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        </Link>
        ) : ('')}
        
      </main>
    </div>
  
  );

}

export default Weather;