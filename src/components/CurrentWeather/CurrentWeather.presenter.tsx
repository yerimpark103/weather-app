import {Container, ElevatedCard} from "@/common/uiStyles";
import getClothingByWeather from "@/utils/clothingByWeather";
import {Weather} from "./CurrentWeather.types";

export default function CurrentWeatherUI(props: Weather) {
  return (
    <Container>
      <ElevatedCard>
        지금 날씨는
        <h1>{props.weather.temp_c ? props.weather.temp_c : "..."}°C</h1>
        <strong>{props.weather.condition?.text}</strong>입니다
        {props.weather.feelslike_c !== props.weather.temp_c ? (
          <h2>
            체감온도는{" "}
            {props.weather.feelslike_c ? props.weather.feelslike_c : "..."}°C
          </h2>
        ) : null}
        {props.weather.weather?.main >= 200 &&
        props.weather.weather?.main >= 699 ? (
          <div>우산을 챙겨가세요.</div>
        ) : null}
        <div>
          <h2>뭘 입냐면...</h2>
          <span>{getClothingByWeather(props.weather.feelslike_c)}</span>
        </div>
      </ElevatedCard>
    </Container>
  );
}
