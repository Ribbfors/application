import React from "react";
import { NavbarData } from "./NavbarData";
import { Link } from "react-router-dom";
import styled from "styled-components";
import WbSunny from "@material-ui/icons/WbSunny";

const MyNavbar = styled.section`
  background-color: ${(props) => props.theme.secondaryBodyColor}};
  color: ${(props) => props.theme.textColor};
  min-height: 10vh;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const NavbarWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: ${(props) => props.theme.width};
margin: auto;

a{
  text-decoration: none;
}

}
  `;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  li {
    margin: 0 1rem;
  }
  span {
    color: ${(props) => props.theme.secondaryTextColor};
  }

  svg {
    margin-right: 0.2rem;
    color: ${(props) => props.theme.body};
  }
`;
function Navbar({ theme, setTheme }) {
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <MyNavbar>
      <NavbarWrapper>
        <Link to={"/"}>
          <h1 className="logo">
            AR<span>.</span>
          </h1>
        </Link>
        <Nav>
          {NavbarData.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <WbSunny
            onClick={changeTheme}
            style={{ color: theme === "light" ? "yellow" : "grey" }}
          />
        </Nav>
      </NavbarWrapper>
    </MyNavbar>
  );
}

export default Navbar;
