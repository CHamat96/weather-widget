import React from "react";
import { useParams } from "react-router-dom";
import Forecast from "./Forecast";
import TodayWeather from "./TodayWeather";

export default function WeatherSection(){
    const {location = "Toronto"} = useParams();
    return (
        <div>
            <TodayWeather
            location={location}/>
            <Forecast
            location={location} />
        </div>
    )
}