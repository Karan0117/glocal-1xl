import React from "react";
import {
  StyledButtonList,
  StyledContainer,
  StyledLogo,
  StyledNavbar,
  StyledNavList,
} from "./styled";
import LogoSVG from "../../assets/images/logo.svg";
import { darkGreenBtnClass } from "./constants";
import { Link } from "react-router-dom";

interface INavItems {
  id: string;
  name: string;
  href: string;
  className?: string;
}

const Navbar = () => {
  const navItems: INavItems[] = [
    {
      id: "1",
      name: "Home",
      href: "/",
    },
    {
      id: "2",
      name: "Categories",
      href: "/categories",
    },
    {
      id: "3",
      name: "About Us",
      href: "#",
    },
    {
      id: "4",
      name: "Products",
      href: "#",
    },
    {
      id: "5",
      name: "Pet Care",
      href: "#",
    },
    {
      id: "6",
      name: "Contact",
      href: "#",
    },
  ];

  const buttonItems: INavItems[] = [
    {
      id: "1",
      name: "Sign In",
      href: "#",
      className: darkGreenBtnClass,
    },
    {
      id: "2",
      name: "Register",
      href: "#",
    },
  ];

  return (
    <StyledContainer>
      <StyledNavbar>
        <Link to="/">
          <StyledLogo className="logo">
            <img src={LogoSVG} alt="glocal logo" />
            <h2>
              <span>G</span>local
            </h2>
          </StyledLogo>
        </Link>
        <StyledNavList>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link to={item.href}>
                <p>{item.name}</p>
              </Link>
            </li>
          ))}
        </StyledNavList>
        <StyledButtonList>
          {buttonItems.map((button) => (
            <li key={button.id}>
              <Link to={button.href}>
                <button className={button.className}>{button.name}</button>
              </Link>
            </li>
          ))}
        </StyledButtonList>
      </StyledNavbar>
    </StyledContainer>
  );
};

export default Navbar;
