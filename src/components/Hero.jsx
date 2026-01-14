import React, { useEffect, useState } from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import { motion } from 'framer-motion';

const float = keyframes`
  0% { transform: translateY(0px) rotateX(2deg) rotateY(-2deg); }
  50% { transform: translateY(-15px) rotateX(-2deg) rotateY(2deg); }
  100% { transform: translateY(0px) rotateX(2deg) rotateY(-2deg); }
`;

const HeroSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  padding: 4rem 6rem;

  @media (max-width: 1024px) {
    padding: 8rem 2rem 4rem;
  }
`;

const HeroContent = styled.div`
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  align-items: center;
  gap: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 4rem;
  }
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  z-index: 2;
`;

const CenterCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 2000px;
  position: relative;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  z-index: 2;
  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  aspect-ratio: 0.85;
  position: relative;
  transform-style: preserve-3d;
  animation: ${float} 6s ease-in-out infinite;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    transform: scale(1.02) rotateY(10deg) rotateX(5deg);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -50px;
    left: 10%;
    width: 80%;
    height: 40px;
    background: rgba(0, 0, 0, 0.4);
    filter: blur(30px);
    border-radius: 50%;
    transform: rotateX(80deg);
    z-index: -1;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.5s ease;
  box-shadow: 0 40px 100px rgba(0,0,0,0.5);
`;

const Name = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 5.5rem;
  font-weight: 900;
  line-height: 0.9;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: -2px;
  font-style: italic;

  @media (max-width: 1200px) {
    font-size: 4rem;
  }
`;

const Title = styled.h2`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 600;
  opacity: 0.7;
`;

const Tagline = styled.p`
  font-family: 'Lora', serif;
  font-size: 1.25rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 400px;
  font-style: italic;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Availability = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  
  &::before {
    content: '';
    width: 10px;
    height: 10px;
    background: #43ff7c;
    border-radius: 50%;
    box-shadow: 0 0 12px #43ff7c;
  }
`;

const Hero = () => {
  const theme = useTheme();
  
  const heroImage = theme.bg === '#000' 
    ? "/images/hero-dark.png" 
    : "/images/Profile.picture(2).jpg";

  return (
    <HeroSection 
      id="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <HeroContent>
        <LeftCol>
          <TextGroup>
            <Name>Valdrin<br />Shala</Name>
            <Title>Frontend Developer</Title>
          </TextGroup>
        </LeftCol>
        
        <CenterCol>
          <ImageWrapper>
            <HeroImage 
              src={heroImage} 
              alt="Valdrin Shala" 
            />
          </ImageWrapper>
        </CenterCol>
        
        <RightCol>
          <TextGroup>
            <Tagline>
              Crafting modern, accessible web interfaces with clean code, performance, and precision. Turning ideas into interactive realities.
            </Tagline>
            <Availability>Available for work</Availability>
          </TextGroup>
        </RightCol>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
