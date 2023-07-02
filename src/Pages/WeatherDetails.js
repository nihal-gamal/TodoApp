import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
import { axios } from 'axios';
import "./Wheather/weather.css"

const WeatherDetails = () => {
    const [forecast, setForecast] = useState();
    const [weather, setWeather] = useState({});
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
    const {weatherId} = useParams();
  
    useEffect(() => {
        fetch(`${api.base}weather?id=${weatherId}&appid=${api.key}&units=metric`)
        .then(res => res.json())
        .then(res => {
            setWeather(res)
            console.log("5",res)})
        .catch(error => console.log(error));
    }, [weatherId]);
    useEffect(() => {
        if (weather.coord) {
        fetch(`${api.base}forecast?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=${api.key}&units=metric`)
        .then(res => res.json())
        .then(res => {
        setForecast(res.list)
        console.log("4",res.list);
        })
        .catch(error => console.log(error));
        }
        }, [weather]);
        return (
            <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'details warm' : 'details') : 'details'}>
            <main>
            {(typeof weather.main != "undefined") ? (
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
            <div className="forecast-box" style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"}}>
            {forecast?.map((item, index) => {
            const date = new Date(item.dt_txt);
            const hours = date.getHours();
            const day = date.getDate() ;
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const temperature = Math.round(item.main.temp);
            const weatherDescription = item.weather[0].main;
            const weatherIcon = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
            
           
                        // Only show the forecast for the first 5 days
                        if (day > day + 5 || day === new Date().getDate()) {
                          return null;
                        }
            
                        return (
                          <div key={item.dt} className="forecast-item" style={{border:"1px solid #ccc" ,width:"200px",height:"200px",padding:"20px",marginBottom:"20px"}}>
                            <div className="forecast-date">{`${day}/${month}/${year}`}</div>
                            <div className="forecast-time">{`${hours}:00`}</div>
                            <img className="forecast-icon" src={weatherIcon} alt={weatherDescription} />
                            <div className="forecast-temp">{`${temperature}°c`}</div>
                            <div className="forecast-desc">{weatherDescription}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : ('')}
              </main>
            </div>
            )
            };
export default WeatherDetails;