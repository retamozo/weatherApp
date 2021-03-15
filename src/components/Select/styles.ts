import styled, { css } from "styled-components";

export const DropdownContainer = styled.div`
  width: 10.5em;
  margin: 0 auto;
`;

export const DropdownHeader = styled.div<{ disabled: boolean }>`
  margin-bottom: 0.8em;
  padding: 5px 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  ${({ disabled }) => disabled && css`
    &:hover{
        cursor: not-allowed;
    }
    color: gray;
  `}
 `;

export const DropdownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 10.5em;
`;

export const DropdownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
 font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding: 0 10px;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin: 15px 0;
  &:hover {
    color: #fd9e46;
  }
`;
