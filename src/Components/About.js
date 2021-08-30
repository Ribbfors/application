import React from "react";
import { AboutData } from "./AboutData";
import styled from "styled-components";

const AboutSection = styled.section`
  min-height: 100vh;
  background: ${(props) => props.theme.secondaryBodyColor};
`;

const AboutWrapper = styled.div`
  min-height: 100vh;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    color: ${(props) => props.theme.secondaryTextColor};
    padding: 0.5rem 0;
    margin-bottom: 1.2rem;
    text-align: center;
  }

  p {
    color: ${(props) => props.theme.secondaryTextColor};
    padding: 0;
    maring: 0;
  }

  span {
    font-size: 2.4rem;
  }
`;

const HeaderTwo = styled.h2`
  padding-top: 2rem;
  color: ${(props) => props.theme.secondaryTextColor};
  margin: auto;
  width: ${(props) => props.theme.width};
  text-align: center;
`;

function About() {
  return (
    <AboutSection className="test">
      <HeaderTwo> Some facts about me...</HeaderTwo>
      <AboutWrapper>
        {AboutData.map((item, index) => {
          return (
            <div key={index}>
              <h3>
                <span>{item.icon}</span>
                {item.fact}
              </h3>
            </div>
          );
        })}
      </AboutWrapper>
    </AboutSection>
  );
}

export default About;
