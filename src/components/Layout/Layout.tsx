import React from "react";
import { Navbar } from "../Navbar";
import { StyledContent, StyledLayout, StyledMain } from "./styled";
import BackgroundSVG from "../../assets/images/backgroundPattern.svg";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  console.log("LAYOUT Component");
  return (
    <StyledLayout>
      <img
        className="background-svg"
        src={BackgroundSVG}
        alt="wavy background pattern"
      />
      <StyledContent>
        <Navbar />
        <StyledMain className="main-content">{children}</StyledMain>
      </StyledContent>
    </StyledLayout>
  );
};

export default Layout;
