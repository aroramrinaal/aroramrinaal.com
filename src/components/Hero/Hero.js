import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! , <br />
          I am Mrinaal Arora.
        </SectionTitle>
        <SectionText>
        I am a first year Computer Science student.
        </SectionText>
        <Button onClick={()=>window.location = "https://github.com/aroramrinaal"}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;