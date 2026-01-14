import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection = styled(motion.section)`
  width: 100%;
  padding: 10rem 2rem;
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem;
  }
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 6rem;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const ImageSide = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  aspect-ratio: 0.8;
  background: #111;
  position: relative;
  overflow: hidden;
  box-shadow: 40px 40px 80px rgba(0, 0, 0, 0.5);
  
  /* Creative Cut-out shape */
  clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.4), transparent);
    z-index: 1;
    mix-blend-mode: overlay;
  }

  &::after {
    content: '<Dev />';
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    font-family: 'Inter', sans-serif;
    font-weight: 900;
    font-size: 0.7rem;
    color: #fff;
    background: #3b82f6;
    padding: 2px 8px;
    z-index: 2;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

const cursorBlink = keyframes`
  from, to { opacity: 1; }
  50% { opacity: 0; }
`;

const TerminalWindow = styled.div`
  width: 100%;
  height: 100%;
  background: #0a0a0a;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  z-index: 3;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 80%);
    pointer-events: none;
  }
`;

const TerminalLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TerminalLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #666;
  font-weight: 600;
`;

const TerminalText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.1;

  span {
    color: #3b82f6;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 12px;
  height: 2px;
  background: #3b82f6;
  margin-left: 8px;
  animation: ${cursorBlink} 1s step-end infinite;
  vertical-align: middle;
`;

const DecorativeText = styled.div`
  position: absolute;
  top: -2rem;
  left: -2rem;
  font-family: 'Inter', sans-serif;
  font-size: 8rem;
  font-weight: 900;
  color: ${({ theme }) => (theme.bg === '#000' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)')};
  z-index: -1;
  font-style: italic;
  pointer-events: none;
  text-transform: uppercase;
`;

const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AboutTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -2px;
  
  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 700;
  color: #3b82f6;
  margin: 0 0 0.5rem 0;
`;

const AboutBody = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  p {
    margin: 0;
  }
`;

const ExperienceSection = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ExperienceItem = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 2rem;
  align-items: baseline;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const DateText = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ExpContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ExpTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

const ExpDesc = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.6;
  margin: 0;
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => (theme.bg === '#000' ? '#111' : '#f8f8f8')};
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: #3b82f6;
    color: #fff;
    border-color: #3b82f6;
    transform: translateY(-3px);
  }
`;

const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <AboutSection id="about">
      <DecorativeText>Vision</DecorativeText>
      <Container 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <ImageSide>
          <ImageWrapper>
            <TerminalWindow>
              <TerminalLine>
                <TerminalLabel>Current Stack</TerminalLabel>
                <TerminalText>Modern React / <span>Strong Types</span> / Meaningful Motion</TerminalText>
              </TerminalLine>
              
              <TerminalLine>
                <TerminalLabel>Focus</TerminalLabel>
                <TerminalText>High-End <span>UI</span> & Motion.</TerminalText>
              </TerminalLine>

              <TerminalLine>
                <TerminalLabel>Status</TerminalLabel>
                <TerminalText>Building <span>Future</span><Cursor /></TerminalText>
              </TerminalLine>
            </TerminalWindow>
          </ImageWrapper>
        </ImageSide>
        
        <ContentSide>
          <div>
            <Subtitle>My Story</Subtitle>
            <AboutTitle>Frontend That <br /> Feels Right.</AboutTitle>
          </div>
          
          <AboutBody>
            <p>
              I am Valdrin, a Frontend Developer and digital craftsman dedicated to building high-end interfaces that bridge the gap between human experience and technological complexity. My work is defined by a meticulous balance of aesthetic minimalism and robust engineering.
            </p>
            <p>
              Specializing in modern React ecosystems, I architect scalable web applications that prioritize performance without compromising on visual storytelling. For me, frontend development isn't just about writing code—it's about sculpting digital environments that feel intuitive, elegant, and timeless.
            </p>
          </AboutBody>

          <ExperienceSection>
            <ExperienceItem>
              <DateText>2022-2024</DateText>
              <ExpContent>
                <ExpTitle>Trainee & Junior Web Developer — Future Minds Academy</ExpTitle>
                <ExpDesc>Completed a 1.5-year intensive training program in web development and design. Built foundational skills in HTML, CSS, JavaScript, and UI/UX design. Developed small web projects and learned best practices in responsive design, prepared to work with modern frontend frameworks React and Vue.js.</ExpDesc>
              </ExpContent>
            </ExperienceItem>

            <ExperienceItem>
              <DateText>2024-PREE</DateText>
              <ExpContent>
                <ExpTitle>Frontend Developer — Creative Pulse</ExpTitle>
                <ExpDesc>Created responsive animations and interactive landing pages for award-winning marketing campaigns. Gained practical experience in HTML, CSS, JavaScript, and basic design principles.Focused on pixel-perfect component architecture and motion design. Bridged the gap between design vision and functional implementation, improving user engagement and consistency across web applications. Started working with React to build reusable UI components and streamline frontend workflows.</ExpDesc>
              </ExpContent>
            </ExperienceItem>

          </ExperienceSection>
          
          <LinksGrid>
            <ExternalLink href="https://linkedin.com" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              LinkedIn
            </ExternalLink>
            <ExternalLink href="https://github.com" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </ExternalLink>
          </LinksGrid>
        </ContentSide>
      </Container>
    </AboutSection>
  );
};

export default About;


