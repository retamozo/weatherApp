import { render } from "@testing-library/react";
import "jest-styled-components";
import React from "react";
import { css } from "styled-components";
import { Container } from "../index";

describe("Generic <Container /> component", () => {
  it("Render with style overrided", () => {
    const style = css`
      background: yellow;
      width: 12323px;
    `;
    const { getByTestId } = render(<Container overrides={style} />);

    expect(getByTestId("container")).toHaveStyleRule("background: yellow; width: 12323px;");
  });
});
