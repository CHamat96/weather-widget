import React from "react";
import styled from "styled-components";
import HandleWeatherIcon from "../hooks/HandleWeatherIcon";
import useFetch from "../hooks/useFetch";

const TodayStyles = styled.div`
    padding:25px 10px;

    .weatherDescription {
        text-transform:capitalize;
    }

    .weatherFlex {
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;
    }
    .weatherDetails {
        text-align:left;
        p {
            margin:2px 0;
            line-height:2.8rem;
        }
        @media screen and (max-width:400px){
            text-align:center;
        }
    }
`

export default function TodayWeather({ location }){
    const {data, loading, error } = useFetch('weather', location)
    if(loading){
        return (
            <h2>Loading...</h2>
        )
    }
    if(error){
        const errorMessage = `${error}`
        return (
            <h2>{errorMessage}</h2>
        )
    }
    const weatherCondition = data.weather[0]
        return (
            <TodayStyles className="todayWeather">
                <h2>Today</h2>
                <div className="weatherDetails">
                    <div className="weatherFlex">
                        <HandleWeatherIcon
                        condition ={weatherCondition.description}/>
                        <div>
                            <p className="temp todayTemp">
                                {Math.floor(data.main.temp)}&deg;
                            </p>
                            <p className="weatherDescription">{weatherCondition.description}</p>
                        </div>
                    </div>
                </div>
            </TodayStyles>
        )
}