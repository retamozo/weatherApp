import React, { FunctionComponent } from "react";
import { Row } from "@/components/Row";
import { Container } from "./styles";
import { WeatherApi } from "@/types";
import { capitalizeFirstChar } from "@/utils";

type CardProps = {
  isPrincipalCard?: boolean;
  data: WeatherApi;
};

export const WeatherCard: FunctionComponent<CardProps> = ({
  isPrincipalCard,
  data,
}) => {
  const { name, visibility, weather, main } = data;

  const date: Date = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const today: string = date.toLocaleDateString("es-ES", options);

  const imageUri = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <Container condition={weather[0].main}>
      <Row align="left">
        <h2>{name}</h2>
        <small>{capitalizeFirstChar(today)}</small>
        <br />
        <p>{weather[0].main}</p>
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
