import React from "react";
import useFetch from "../hooks/useFetch";

export default function TodayWeather(){
    const {data, loading, error } = useFetch('weather', 'Toronto')
    const iconURL = `http://openweathermap.org/img/wn`
    if(loading){
        return (
            <h2>Loading...</h2>
        )
    }
    if(error !== ''){
        return (
            <h2>{error}</h2>
        )
    }
    const weatherCondition = data.weather[0]
    return (
        <div className="currentWeather">
            <h2>Today</h2>
            <div className="weatherDetails">
                <div className="weatherFlex">
                    <img src={`${iconURL}/${weatherCondition.icon}.png`} alt={weatherCondition.description} />
                    <div>
                        <p className="temp todayTemp">
                            {data.main.temp}&deg;
                        </p>
                        <p className="weatherDescription">{weatherCondition.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}