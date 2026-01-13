import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProjectsSection = styled(motion.section)`
  width: 100%;
  padding: 8rem 2rem;
  background: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 700;
  margin-bottom: 6rem;
  opacity: 0.6;
  text-align: center;
  width: 100%;
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12rem;
`;

const ProjectCard = styled(motion.div)`
  display: grid;
  grid-template-columns: ${({ $reverse }) => ($reverse ? '1fr 1.2fr' : '1.2fr 1fr')};
  align-items: center;
  position: relative;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const ContentBox = styled.div`
  background: #000;
  padding: 4rem;
  color: #fff;
  z-index: 2;
  margin-left: ${({ $reverse }) => ($reverse ? '0' : '-15%')};
  margin-right: ${({ $reverse }) => ($reverse ? '-15%' : '0')};
  grid-column: ${({ $reverse }) => ($reverse ? '1' : '2')};
  grid-row: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 968px) {
    margin: -20% 0 0 0;
    padding: 3rem 2rem;
    width: 90%;
    align-self: ${({ $reverse }) => ($reverse ? 'flex-start' : 'flex-end')};
    grid-column: 1;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16/10;
  overflow: hidden;
  position: relative;
  z-index: 1;
  background: #eee;
  grid-column: ${({ $reverse }) => ($reverse ? '2' : '1')};
  grid-row: 1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%) brightness(0.9);
    transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1), filter 0.8s ease;
  }

  @media (max-width: 968px) {
    grid-column: 1;
  }

  &:hover img {
    transform: scale(1.05);
    filter: grayscale(0%) brightness(1);
  }
`;

const Category = styled.span`
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${({ $color }) => $color || '#ff00ff'};
`;

const ProjectDesc = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.6;
  margin: 0;
  font-family: 'Inter', sans-serif;
`;

const ProjectTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.1;

  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
`;

const ViewLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1rem;
  transition: gap 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    gap: 1.5rem;
    svg {
      transform: translateX(5px);
    }
  }
`;

const ProjectItem = ({ project, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const isEven = index % 2 === 0;

  const categories = ['BRANDING', 'PRODUCT DESIGN', 'UI/UX DESIGN', 'WEB DEVELOPMENT'];
  const colors = ['#f8b4d9', '#f8d2b4', '#b4f8e0', '#b4d7f8'];

  return (
    <ProjectCard 
      ref={ref}
      $reverse={!isEven}
      initial={{ opacity: 0, y: 80 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ 
        duration: 1,
        ease: [0.165, 0.84, 0.44, 1]
      }}
    >
      <ImageWrapper $reverse={!isEven}>
        <img src={project.img} alt={project.title} />
      </ImageWrapper>
      <ContentBox $reverse={!isEven}>
        <Category $color={colors[index % colors.length]}>
          {categories[index % categories.length]}
        </Category>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDesc>{project.description}</ProjectDesc>
        <ViewLink href={project.url} target="_blank">
          View Project 
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4.16666 10H15.8333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ViewLink>
      </ContentBox>
    </ProjectCard>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Luta Autoservis',
      domain: 'luta-autoservis.com',
      description: 'A premium automotive service platform featuring real-time booking and comprehensive maintenance tracking.',
      url: 'https://luta-autoservis.com/',
      img: '/images/luta-autoservis.png',
    },
    {
      title: 'TR Glaubau',
      domain: 'trglaubau.com',
      description: 'Sophisticated construction and architecture portfolio showcasing large-scale infrastructure projects.',
      url: 'https://tr-glaubau.netlify.app/',
      img: '/images/Screenshot 2026-01-12 at 15.26.20.png',
    },
    {
      title: 'beinRücker Galabau',
      domain: 'beinrucker-galabau.netlify.app',
      description: 'Modern landscaping and garden design interface with a focus on visual storytelling and nature.',
      url: 'https://beinrucker-galabau.netlify.app/',
      img: '/images/Screenshot 2026-01-12 at 15.27.41.png',
    },
    {
      title: 'Creative Agency',
      domain: 'creativeagency.com',
      description: 'A minimalist digital agency showcase focusing on high-end motion design and interactive experiences.',
      url: 'https://creativeagency.com',
      img: '/images/images122.webp',
    }
  ];

  return (
    <ProjectsSection id="projects">
      <SectionTitle>Selected Works</SectionTitle>
      <ProjectsContainer>
        {projects.map((project, idx) => (
          <ProjectItem key={idx} project={project} index={idx} />
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
