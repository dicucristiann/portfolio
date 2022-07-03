import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Greetings!
My name is Cristian Dicu, and I'd like to tell you a little bit about myself.
I started learning to code a year ago and have since gone on to create some awesome and exciting projects. I am currently employed as a Coupa Analyst at Xoomworks, a division of Accenture, in Cluj-Napoca, Romania, and in my spare time, I explore new web development tools intending to become a front-end web developer. I've made a few projects that you may see while browsing my portfolio and learning more about me.
        </SectionText>
        <Button onClick={() => window.location = 'https://drive.google.com/uc?export=download&id=131F6IsQQu6rH5qzaNbRI45gx0VFhudki'} >Download CV</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;