import styled, { css } from "styled-components";

type RowTypes = {
  right?: boolean;
  align?: string;
};

export const Row = styled.div<RowTypes>`
    text-align: ${({ align }) => (align ? align : "inherit")};
    height: 100%;
    width: 50%;
    float: left;

    h2,
    span.celcius {
      font-size: 2em;
    }

    ${({ align }) =>
    align === "left" &&
    css`
        padding-left: 15px;
      `}
    img {
      position: absolute;
      top: -20px;
      right: 0;
    }
    h2 {
      margin-bottom: 0;
    }
  `;
