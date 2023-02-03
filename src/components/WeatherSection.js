import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Forecast from "./Forecast";
import TodayWeather from "./TodayWeather";

const WeatherStyles = styled.div`
    border:var(--border);
    border-bottom:var(--border-thin);
    border-radius:15px;
    box-shadow:5px 5px 8px var(--shadow);
`

export default function WeatherSection(){
    const {location = "Toronto"} = useParams();
    return (
        <WeatherStyles>
            <TodayWeather
            location={location}/>
            <Forecast
            location={location} />
        </WeatherStyles>
    )
}