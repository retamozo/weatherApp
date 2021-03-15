import styled from "styled-components";

export const Header = styled.div`
  padding-left: 15px;
  text-align: left;
`;

export const Footer = styled(Header)`
    display: flex;
    width: 100%;
  p {
    margin-bottom: 0;
  }
  & > div.row {
    width: 50%;
  }
`;
