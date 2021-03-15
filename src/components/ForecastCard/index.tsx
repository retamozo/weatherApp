import { DailyForecast } from "@/types";
import { formatDate, capitalizeFirstChar, getWeatherImage } from "@/utils";
import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { Row } from "../Row";
import { Footer, Header } from "./styles";

export const ForecastCard: FunctionComponent<{ data: DailyForecast }> = ({
  data,
}) => {
  const { dt, weather, sunrise, sunset, temp } = data;

  const imageUri = getWeatherImage(weather[0].icon);

  return (
    <Container>
      <Row overrides={rowOverride}>
        <Header>
          <h3>{capitalizeFirstChar(formatDate(dt).today)}</h3>
          <small>{capitalizeFirstChar(weather[0].description)}</small>
          <img src={imageUri} alt="weather-image" />
        </Header>
        <br />
        <Footer>
          <div className="row">
            <p>Amanece: {formatDate(sunrise).hour}~</p>
            <p>Anochece: {formatDate(sunset).hour}~</p>
          </div>
          <div className="row">
            <p>Max: {temp.max}</p>
            <p>Min: {temp.min}</p>
          </div>
        </Footer>
      </Row>
    </Container>
  );
};

export const Container = styled.div`
  border-radius: 20px;
  box-shadow: 25px 25px 40px 0px rgba(0, 0, 0, 0.33);
  position: relative;
  width: 20%;
  height: auto;
  display: flex;
  h3 {
    margin-bottom: 0;
  }
  img {
    z-index: -1;
    position: absolute;
    top: -20px;
    right: -20px;
    height: 100px;
    width: 100px;
  }
`;

const rowOverride = css`
  width: 100%;
`;
