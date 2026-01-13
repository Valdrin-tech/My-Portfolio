import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 9rem 3rem 5rem 4rem;
    opacity: ${({ $animate }) => ($animate ? 1 : 0)};
    transform: ${({ $animate }) => ($animate ? 'translateY(0)' : 'translateY(40px)')};
  transition: opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1);
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0rem 1rem 1.5rem 1rem;
`;

const IntroLine = styled.div`
  font-size: 1.08rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.85;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Availability = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 1.02rem;
  color: #43ff7c;
  font-weight: 500;
  margin-right: 0.5rem;
  &::before {
    content: '';
    display: inline-block;
    width: 0.7em;
    height: 0.7em;
    background: #43ff7c;
    border-radius: 50%;
    margin-right: 0.4em;
    box-shadow: 0 0 6px #43ff7c99;
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.text};
  margin-top: 1.1rem;
  line-height: 1;
`;

const Tagline = styled.p`
  font-size: 1.18rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  margin-top: 0.2rem;
  max-width: 500px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.2rem;
`;

const HeroButton = styled.a`
  padding: 0.85rem 2.2rem;
  border-radius: 100px;
  border: 1.5px solid ${({ theme }) => theme.text};
  background: ${({ primary, theme }) =>
    primary
      ? theme.bg === '#000'
        ? '#fff'
        : '#000'
      : 'transparent'};
  color: ${({ primary, theme }) =>
    primary
      ? theme.bg === '#000'
        ? '#000'
        : '#fff'
      : theme.text};
  font-size: 1.08rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.18s, color 0.18s;
  cursor: pointer;
  &:hover, &:focus {
    background: ${({ primary, theme }) =>
      primary
        ? theme.bg === '#000'
          ? '#eaeaea'
          : '#222'
        : theme.text};
    color: ${({ primary, theme }) =>
      primary
        ? theme.bg === '#000'
          ? '#000'
          : '#fff'
        : theme.bg};
  }
`;


const Hero = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
      <HeroSection id="hero" $animate={animate}>
      <Intro>
        <IntroLine>
          <span role="img" aria-label="waving hand">👋</span>
          Hello, I'm Valdrin
          Frontend Developer & UI Builder
        </IntroLine>
      </Intro>
      <Name>Crafting modern, accessible web interfaces <br /> with clean code, performance, and precision.</Name>
      <Tagline>
        Turning ideas into interactive interfaces. <br /> JavaScript • React • Tailwind CSS • UI/UX • Responsive Design
      </Tagline>
      <ButtonGroup>
        <HeroButton href="#projects">View Projects</HeroButton>
        <HeroButton href="#contact" primary>Book a free call</HeroButton>
      </ButtonGroup>
      <div style={{ marginTop: '1.5rem' }}>
        <Availability>Available for work</Availability>
      </div>
    </HeroSection>
  );
};

export default Hero;
