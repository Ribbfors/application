import React from "react";
import { FooterData } from "./FooterData";
import styled from "styled-components";

const MyFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 10vh;
  background: ${(props) => props.theme.secondaryBodyColor};

  li {
    list-style: none;
    margin 0 1rem;

    svg{
   color: black;
   font-size: 2rem;
    }
  }

  
`;

function Footer() {
  return (
    <MyFooter>
      {FooterData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <a href={item.url}>{item.icon} </a>
          </li>
        );
      })}
    </MyFooter>
  );
}

export default Footer;
