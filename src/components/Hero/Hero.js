import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> My Personal Portfolio
      </SectionTitle>
      <SectionText>
        This is a demo personal portfolio as a part of course-based by
        JavaScript Mastery, built with React & NextJS themed with
        styled-components.
      </SectionText>
      <Button onClick={() => (window.location = "https://iwebdev.tech")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
