import useFetch from "../hooks/useFetch";
import React from "react";
import styled from "styled-components";

const ForecastStyles = styled.div`
    max-width:100%;
    display:flex;
    flex-wrap:wrap;

    .forecastDay {
        border:var(--border-thin);
        border-top:var(--border);
        padding:5px;
        flex: 2 1 150px;

        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
        img {
            max-width:100px;
        }

        h3 {
            font-size:1.6rem;
        }
    }
`

export default function Forecast({ location }){
    let forecast = []
    const iconURL = `http://openweathermap.org/img/wn`

    const {data, loading, error} = useFetch(`forecast`, location)
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
    }).slice(0, 4)
    return (
        <ForecastStyles>
        {error ? <h2>{error}</h2> : ''}
        {forecast.map((day) => {
            let date = new Date(day.dt_txt).toLocaleString(`en-US`, {weekday:"short"})
            let weatherCondition = day.weather[0]
            return (
                <div className="forecastDay" key={day.dt_txt}>
                    <h3>{date}</h3>
                    <img src={`${iconURL}/${weatherCondition.icon}.png`} alt={weatherCondition.description} />
                    <p className="temp">{day.main.temp}&deg;</p>
                </div>
            )
        })}
        </ForecastStyles>
    )
}