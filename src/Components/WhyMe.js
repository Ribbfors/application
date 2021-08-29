import React from "react";
import styled from "styled-components";

const Pros = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${(props) => props.theme.width};
  margin: auto;
  text-align: center;
  height: 100%;
`;

const Header = styled.h2`
  @media screen and (max-width: 440px) {
    font-size: 2rem;
  }

  font-size: 3.4rem;
`;

const Reasons = styled.h4`
  padding: 1rem 0;
  font-size: 1.2rem;
`;

function WhyMe() {
  return (
    <Pros>
      <ProsWrapper>
        <Header>When you hire me, you'll...</Header>
        <Reasons>
          Get someone who wants to keep the code clean and structured.
        </Reasons>
        <Reasons>Notice that I thrive in learning new things.</Reasons>
        <Reasons>Enjoy more laughs.</Reasons>
      </ProsWrapper>
    </Pros>
  );
}

export default WhyMe;
