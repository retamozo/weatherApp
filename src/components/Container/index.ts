import styled, { css } from "styled-components";

export const Container = styled.div.attrs(() => ({
  "data-testid": "container"
}))<{ overrides?: ReturnType<typeof css> }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  ${({ overrides }) => overrides && css`
    ${overrides}
  `}
`;