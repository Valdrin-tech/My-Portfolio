import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = [
  { label: 'React Js' },
  { label: 'Vue Js' },
  { label: 'React Native' },
  { label: 'Bootstrap' },
  { label: 'Tailwind CSS' },
  { label: 'Material-UI (MUI)' },
  { label: 'Framer Motion' },
  { label: 'Axios / Fetch API' },
  { label: 'React Router' },
  { label: 'Vue Router' },
  { label: 'React Hook Form' },
  { label: 'Figma / Adobe XD / Sketch' },
];

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const SkillsSection = styled(motion.section)`
  width: 100vw;
  overflow: hidden;
  background: transparent;
  padding: 2.5rem 0 2.5rem 0;
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 60s linear infinite;
`;

const MarqueeWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const SkillPill = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: ${({ theme }) => theme.text};
  font-size: 3.5rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  font-family: 'Inter', sans-serif;
  margin-right: 4rem;
  white-space: nowrap;
  opacity: 0.8;
  
  &::after {
    content: "•";
    margin-left: 4rem;
    color: ${({ theme }) => theme.text};
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    gap: 1rem;
    margin-right: 2rem;
    &::after {
      margin-left: 2rem;
    }
  }
`;

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  // Repeat the skills to ensure smooth looping
  const marqueeSkills = [...skills, ...skills, ...skills];
  return (
    <SkillsSection 
      id="skills" 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <MarqueeWrapper>
        <MarqueeTrack>
          {marqueeSkills.map((skill, i) => (
            <SkillPill key={skill.label + i}>
              {skill.label}
            </SkillPill>
          ))}
        </MarqueeTrack>
      </MarqueeWrapper>
    </SkillsSection>
  );
};

export default Skills;
