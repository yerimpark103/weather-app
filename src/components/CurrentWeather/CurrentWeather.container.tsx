import axios from "axios";
import {useEffect, useState} from "react";

import CurrentWeatherUI from "./CurrentWeather.presenter";
import {Weather} from "./CurrentWeather.types";

const urlBase = "https://api.weatherapi.com/v1/";

export default function CurrentWeather() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [weather, setWeather] = useState<Weather>({});

  useEffect(() => {
    getGeolocation();
  }, [lat, lon, weather]);

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchWeatherBasedOnPosition);
    } else {
      alert("Please enable geolocation on your browser.");
    }
  };

  const fetchWeatherBasedOnPosition = async (position: any) => {
    console.log(position);
    setLat(position?.coords.latitude);
    setLon(position?.coords.longitude);
    const data = await axios.get(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${urlBase}current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_API_KEY}&q=${lat},${lon}&aqi=no&lang=ko`
    );
    setWeather(data.data.current);
    console.log(weather);
  };
  return <CurrentWeatherUI weather={weather} />;
}
