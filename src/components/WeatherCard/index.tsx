import React, { FunctionComponent } from "react";
import { Row } from "@/components/Row";
import { Container } from "./styles";
import { WeatherApi } from "@/types";
import { capitalizeFirstChar, formatDate, getWeatherImage } from "@/utils";

type CardProps = {
  isPrincipalCard?: boolean;
  data: WeatherApi;
};

export const WeatherCard: FunctionComponent<CardProps> = ({
  isPrincipalCard,
  data,
}) => {
  const { name, visibility, weather, main, dt } = data;

  const imageUri = getWeatherImage(weather[0].icon);

  return (
    <Container condition={weather[0].main}>
      <Row align="left">
        <h2>{name}</h2>
        <span>{capitalizeFirstChar(formatDate(dt).fullDate)}</span>
        <br />
        <p>{capitalizeFirstChar(weather[0].description)}</p>
      </Row>
      <Row>
        <img src={imageUri} alt="weather-image" />
        <h2>{main.temp}°</h2>
        <small>Sensación térmica: {main.feels_like}°</small>
        <br />
        <br />
        <span>
          MIN {main.temp_min}° / MAX {main.temp_max}°
        </span>
      </Row>
    </Container>
  );
};
