import { WiDaySunny, WiThunder, WiDayFog, WiDayHail, WiDaySnow, WiCloudy, WiCloudyWindy, WiStormShowers, WiRain, WiShowers, WiThunderstorm, WiDayCloudy, WiDaySunnyOvercast, WiLightning } from 'react-icons/wi'

export default function HandleWeatherIcon({ condition }){
  const conditionsArray = ["clear", "rain", "cloudy", "snow", "mist", "fog", "wind", "thunder", "storm", "sunny", "sun", "overcast", "clouds", "lightning"]
  const currentCondition = conditionsArray.filter((item) => condition.toLowerCase().includes(item))[0]
  const conditionIcon = () => {
    switch (currentCondition) {
        case "clear": return <WiDaySunny />;
        case "rain": return <WiRain />;
        case "clouds": return <WiDayCloudy />;
        case "overcast": return <WiDaySunnyOvercast />; 
        case "lightning": return <WiLightning />;
        case "snow": return <WiDaySnow />;
        case "thunder": return <WiThunderstorm />;;
        case "hail": return <WiDayHail />;
        case "mist": return <WiDayFog />;
        case "fog": return <WiDayFog />;
        case "showers": return <WiShowers />;
        case "wind": return <WiCloudyWindy />;
        case "storm": return  <WiStormShowers />;
        default: return <WiDaySunnyOvercast />;
    }
  }
    return (
      <div className="weatherIcon">{ conditionIcon() } </div>
    )
  }