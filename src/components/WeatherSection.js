import React from "react";
import Forecast from "./Forecast";
import TodayWeather from "./TodayWeather";

export default function WeatherSection(){
    const location = "Toronto"

    return (
        <div>
            <TodayWeather
            location={location}/>
            <Forecast
            location={location} />
        </div>
    )
}