import React from "react";
import styled from "styled-components";
import { TimelineData } from "./TimelineData";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline(theme) {
  const MyStory = styled.section`
    min-height: 100vh;
  `;

  const MyTimeline = styled.div`
    padding: 4rem 0rem;

    .vertical-timeline::before {
      background: ${(props) => props.theme.textColor};
    }

    .vertical-timeline-element-icon {
      background: ${(props) => props.theme.timelineIconBackground};
      color: ${(props) => props.theme.timelineIcon};
    }
  `;

  const TimelineText = styled.p`
    color: ${(props) => props.theme.cardTextColor};
  `;
  const TimelineHeader = styled.h3`
    color: ${(props) => props.theme.cardTextColor};
  `;

  return (
    <MyStory>
      <MyTimeline>
        <VerticalTimeline style={{ color: "blue" }}>
          {TimelineData.map((item, index) => {
            return (
              <VerticalTimelineElement
                key={index}
                date={item.date}
                icon={item.icon}
              >
                <TimelineHeader className="vertical-timeline-element-title">
                  {item.title}
                </TimelineHeader>

                <TimelineText>{item.description}</TimelineText>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </MyTimeline>
    </MyStory>
  );
}

export default Timeline;
