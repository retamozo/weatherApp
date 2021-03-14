import { Container } from "@/components";
import { useWeatherApi } from "@/hooks";
import React, { FunctionComponent } from "react";
import { Forecast } from "../Forecast";
import { PrincipalWeather } from "../PrincipalWeather";

export const WeatherWidget: FunctionComponent = () => {
  const {
    state: { isError, weather, isFetching },
  } = useWeatherApi({ initialFetch: true });

  if (isFetching) {
    return <Container>Cargando...</Container>;
  }

  if (isError || !weather) {
    return <Container>Uy, no puedo mostrarte el clima de hoy 😢</Container>;
  }

  return (
    <>
      <PrincipalWeather isFetching isError weather={weather.current} />
      <Forecast isFetching isError forecast={weather.forecast} />
    </>
  );
};
