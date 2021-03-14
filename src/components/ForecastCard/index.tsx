import { DailyForecast } from "@/types";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Row } from "../Row";

export const ForecastCard: FunctionComponent<{ data: DailyForecast }> = ({
  data,
}) => {
  return (
    <Container>
      <Row>
        <h3>Dia</h3>
        <i>
          icono
          <br />
          9° 19°
        </i>
      </Row>
    </Container>
  );
};

export const Container = styled.div`
  border-radius: 20px;
  box-shadow: 25px 25px 40px 0px rgba(0, 0, 0, 0.33);
  overflow: hidden;
  position: relative;
  width: 10%;
  height: auto;
  display: flex;
`;
