import styled from "styled-components";
import { darkGreenBtnClass } from "./constants";

export const StyledContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const StyledNavbar = styled.nav`
  height: 107px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.div`
  font-weight: 700;
  line-height: 37.5px;
  color: var(--yellow);
  height: 100%;
  display: flex;
  align-items: center;
  img {
    width: 64.81px;
    height: 67.16px;
  }
  span {
    color: var(--orange);
  }
  h2 {
    margin-left: 5px;
  }
`;

export const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: auto 60px;
`;

export const StyledButtonList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    margin-left: 40px;
  }

  .${darkGreenBtnClass} {
    background-color: var(--complementary-dark-green);
    color: var(--white);
  }
`;
