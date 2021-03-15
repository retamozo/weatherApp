import { cleanup, render } from "@testing-library/react";
import "jest-styled-components";
import React from "react";
import { css } from "styled-components";
import { Row } from "../index";

// Eventhough I'm importing @testing-library/react/dont-cleanup-after-each from jest config,
// for some reason, components are not being unmounted after run test suites
// https://testing-library.com/docs/react-testing-library/setup/#cleanup 🤔

afterEach(cleanup);

describe("Generic <Row /> component", () => {
  it("Render with style overrides", () => {
    const style = css`
      background: yellow;
      width: 12323px;
    `;
    const { getByTestId } = render(<Row overrides={style} />);
    expect(getByTestId("row")).toHaveStyleRule(
      "background: yellow; width: 12323px;",
    );
  });

  it("Custom styling via props", () => {
    const { getByTestId } = render(<Row align="left" />);
    expect(getByTestId("row")).toHaveStyleRule(" padding-left: 15px");
  });
});
