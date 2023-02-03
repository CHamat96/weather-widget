import useFetch from "../hooks/useFetch";
import React from "react";

export default function Forecast({ location }){
    let forecast = []
    const iconURL = `http://openweathermap.org/img/wn`

    const {data, loading} = useFetch(`forecast`, location)
    if(loading){
        return (
            <h2>Loading...</h2>
        )
    }
    // API Endpoint currently returns the 5 day forecast over 40 3hr increments. Need to filter array to only one entry per day
    forecast = data.list.filter((entry) => {
        const date = entry.dt_txt
        // Only return entries from mid-day (around 12 noon)
        return date.includes('12:00:00')
    })
    return (
        <div className="weatherForecast">
        {forecast.map((day, index) => {
            let date = new Date(day.dt_txt).toLocaleString(`en-US`, {weekday:"short"})
            let weatherCondition = day.weather[0]
            return (
                <div className="forecastDay" key={day.dt_txt}>
                    <p>{date}</p>
                    <img src={`${iconURL}/${weatherCondition.icon}.png`} alt={weatherCondition.description} />
                    <p>{day.main.temp}&deg;</p>
                </div>
            )
        })}
        </div>
    )
}