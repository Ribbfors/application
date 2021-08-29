import React from "react";
import "../Styles/Homepage.css";
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";
import mail from "../Images/mail.png";
import styled from "styled-components";

function HeroSection() {
  const Description = styled.section`
    .floating-icons > a:after {
      border: 1px solid ${(props) => props.theme.secondaryBodyColor};
    }

    .floating-icons > a:hover:after {
      border: 1px solid ${(props) => props.theme.secondaryBodyColor};
    }

    @media screen and (max-width: 600px) {
      .floating-icons > a:after {
        border: none;
      }

      .floating-icons > a:hover:after {
        border: none;
      }
    }
  `;

  return (
    <Description className="description">
      <div className="title">
        <h2>
          Andreas Ribbfors <br></br>
          <span>A self-taught developer</span>
          <span> & designer</span>
        </h2>
      </div>

      <div className="floating-icons">
        <a href="https://github.com/Ribbfors" className="github">
          <span>
            <img src={github} alt="github-social" />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/andreas-ribbfors/"
          className="linkedin"
        >
          <span>
            <img src={linkedin} alt="linkedin-social" />
          </span>
        </a>
        <a href="mailto:andreas@ribbfors.com" className="email">
          <span>
            <img src={mail} alt="" />
          </span>
        </a>
      </div>
    </Description>
  );
}

export default HeroSection;
