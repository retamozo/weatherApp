import { Container, ForecastCard } from "@/components";
import { ForecastApi } from "@/types";
import React, { FunctionComponent } from "react";
import { css } from "styled-components";

export const Forecast: FunctionComponent<{
  isError: boolean;
  isFetching: boolean;
  forecast?: ForecastApi;
}> = ({ forecast, isFetching, isError }) => {
  if (isFetching) {
    return <Container>Consultando el pronóstico de los próximos días... 😈</Container>;
  }

  if (isError || !forecast) {
    return (
      <Container> Ay ay ay... hubo error al cargar el pronóstico 🥺</Container>
    );
  }

  const data = forecast.daily.slice(1, 6);

  return (
    <Container overrides={style}>
      {data.map((_forecast, i) => {
        return <ForecastCard key={i + _forecast.uvi} data={_forecast} />;
      })}
    </Container>
  );
};

const style = css`
  justify-content: space-between;
  width: 70%;

  & > div:nth-child(n + 2) {
    margin: 0 20px;
  }
  & > div:last-child {
    margin: 0;
  }

  @media (max-width: 900px) {
    white-space: nowrap;
    overflow-x: auto;
    display: inline-block;
    height: 200px;
    overflow-y: hidden;
    & > div {
      display: inline-block;
      margin-right: 10%;
      width: 60%;
    }
  }
`;
