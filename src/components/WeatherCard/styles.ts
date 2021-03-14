import styled, { css } from "styled-components";
import { WeatherCondition } from "@/types";

type HandleBackground = (condition: WeatherCondition) => string;

const handleBackground: HandleBackground = (condition) => {
  switch (condition) {
    case "Clear":
      return `url(https://i.dlpng.com/static/png/1838191--clouds-and-sky-png-1920_1080_preview.webp)`;
    case "Drizzle":
      return `url(https://www.gardeningknowhow.com/wp-content/uploads/2019/02/clouds.jpg)`
    default:
      return `none`;
  }
};

export const Container = styled.div<{
  condition: WeatherCondition;
}>`
  border-radius: 20px;
  box-shadow: 25px 25px 40px 0px rgba(0, 0, 0, 0.33);
  overflow: hidden;
  position: relative;
  width: 70%;
  height: auto;
  display: flex;

  ${({ condition }) =>
    condition &&
    css`
      background-image: ${handleBackground(condition)};
      background-size: cover;
      background-repeat: no-repeat;
    `};
  img {
    z-index: -1;
  }
`;
