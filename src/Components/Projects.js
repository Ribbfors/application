import React from "react";
import { ProjectsData } from "./ProjectsData";
import styled from "styled-components";

const MyProjects = styled.section`
  min-height: 100vh;
  background: ${(props) => props.theme.secondaryBodyColor};
`;

const CardBackground = styled.div`
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-repeat: no-repeat;
`;

const ProjectWrapper = styled.div`
  width: ${(props) => props.theme.width};
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Card = styled.div`
  min-width: 45%;
  flex: 1 1 20rem;
  margin: 1rem 1rem;
  text-align: center;
  min-height: 40vh;
`;

const HeaderThree = styled.h3`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  span {
  }

  a {
    color: ${(props) => props.theme.secondaryTextColor};
    text-decoration: none;
  }
`;

const HeaderTwo = styled.h2`
  text-align: center;
  padding-top: 2rem;
  color: ${(props) => props.theme.secondaryTextColor};
`;

function Projects() {
  return (
    <MyProjects>
      <HeaderTwo>Projects</HeaderTwo>

      <ProjectWrapper>
        {ProjectsData.map((item, index) => {
          return (
            <Card key={index} className={item.cName}>
              <a href={item.url}>
                <CardBackground
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />
              </a>
              <HeaderThree>
                <a href={item.url}>{item.title} </a>{" "}
                <a href={item.url}>
                  <span>{item.icon}</span>{" "}
                </a>
              </HeaderThree>
            </Card>
          );
        })}
      </ProjectWrapper>
    </MyProjects>
  );
}

export default Projects;
