import { Container, ForecastCard } from "@/components";
import { ForecastApi } from "@/types";
import React, { FunctionComponent } from "react";
import { css } from "styled-components";

export const Forecast: FunctionComponent<{
  isError: boolean;
  isFetching: boolean;
  forecast: ForecastApi;
}> = ({ forecast, isFetching, isError }) => {

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
`;
