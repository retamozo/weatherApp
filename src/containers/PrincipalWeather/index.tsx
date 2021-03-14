import { Container, WeatherCard } from "@/components";
import { WeatherApi } from "@/types";
import React, { FunctionComponent } from "react";

export const PrincipalWeather: FunctionComponent<{
  isFetching: boolean;
  isError: boolean;
  weather: WeatherApi;
}> = ({ isFetching, isError, weather }) => {
  return (
    <Container>
      <WeatherCard data={weather} />;
    </Container>
  );
};
