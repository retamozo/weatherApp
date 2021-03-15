import { Container, WeatherCard } from "@/components";
import { WeatherApi } from "@/types";
import React, { FunctionComponent } from "react";

export const PrincipalWeather: FunctionComponent<{
  isFetching: boolean;
  isError: boolean;
  weather?: WeatherApi;
}> = ({ isFetching, isError, weather }) =>
{
  if (isFetching) {
    return <Container>Cargando el clima actual... 👀</Container>;
  }

  if (isError || !weather) {
    return <Container>Uy, no puedo mostrarte el clima de hoy 😢</Container>;
  }

  return (
    <Container>
      <WeatherCard data={weather} />;
    </Container>
  );
};
