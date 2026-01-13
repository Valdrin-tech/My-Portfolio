import React from 'react';
import styled, { keyframes } from 'styled-components';

const skills = [
  { label: 'Organizational Design' },
  { label: 'Talent Management' },
  { label: 'Project Planning' },
  { label: 'Digital Transformation' },
  { label: 'Sustainability' },
  { label: 'Product Development' },
  { label: 'Management' },
  { label: 'Strategy' },
  { label: 'Project Optimization' },
];

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const SkillsSection = styled.section`
  width: 100vw;
  overflow: hidden;
  background: transparent;
  padding: 2.5rem 0 2.5rem 0;
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 22s linear infinite;
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
  gap: 0.7rem;
  background: ${({ theme }) => theme.bg === '#fff' ? '#f4f4f4' : '#181818'};
  color: ${({ theme }) => theme.text};
  border-radius: 2rem;
  padding: 0.7rem 1.4rem 0.7rem 1.1rem;
  font-size: 1.08rem;
  font-weight: 500;
  box-shadow: 0 1px 8px 0 rgba(0,0,0,0.06);
  margin-right: 1.1rem;
  white-space: nowrap;
`;

const Skills = () => {
  // Repeat the skills to ensure smooth looping
  const marqueeSkills = [...skills, ...skills];
  return (
    <SkillsSection id="skills">
      <MarqueeWrapper>
        <MarqueeTrack>
          {marqueeSkills.map((skill, i) => (
            <SkillPill key={skill.label + i}>
              <span style={{ fontSize: '1.25em' }}>{skill.icon}</span>
              {skill.label}
            </SkillPill>
          ))}
        </MarqueeTrack>
      </MarqueeWrapper>
    </SkillsSection>
  );
};

export default Skills;
