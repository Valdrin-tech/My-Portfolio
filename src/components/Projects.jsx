import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  width: 100%;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.bg};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled.a`
  background: #111;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-decoration: none;
  transition: transform 0.18s cubic-bezier(0.4,0,0.2,1), box-shadow 0.18s cubic-bezier(0.4,0,0.2,1);
  will-change: transform;
  ${({ $angle, $offset }) => `
    transform: rotate(${$angle}deg) translateY(${$offset}px);
  `}
  &:hover {
    transform: scale(1.035) rotate(0deg) translateY(-2px);
    box-shadow: 0 6px 32px 0 rgba(0,0,0,0.18);
    z-index: 2;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  background: #222;
  display: block;
`;

const ProjectInfo = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  text-align: center;
  margin-top: auto;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
`;

const ProjectTitle = styled.div`
  color: #575252ff;
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
`;

const ProjectLinkRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  margin-top: 0.2rem;
`;

const ProjectDomain = styled.span`
  color: #fff;
  font-size: 1.08rem;
  font-weight: 500;
  opacity: 0.7;
`;

const ArrowIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  background: #fff;
  color: #111;
  font-size: 1.2rem;
  margin: 1.2rem auto 0 auto;
  box-shadow: 0 1px 6px 0 rgba(0,0,0,0.08);
  transition: background 0.18s, color 0.18s;
  cursor: pointer;
  position: absolute;
  top: -0.8rem;
  right: 0.5rem;
  z-index: 3;
`;

const ProjectDesc = styled.p`
  color: #575252ff;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

// Placeholder images and info
const projects = [
  {
    title: 'Barber Cultr',
    domain: 'barbercultr.com',
    desc: 'A modern barber shop website with booking features and service listings.',
    url: 'https://barber-cultr.netlify.app/',
    img: '/images/Screenshot 2026-01-12 at 15.24.38.png',
  },
  {
    title: 'TR Glaubau',
    domain: 'trglaubau.com',
    desc: 'A construction and landscaping company website showcasing their projects and services.',
    url: 'https://tr-glaubau.netlify.app/',
    img: '/images/Screenshot 2026-01-12 at 15.26.20.png',
  },
  {
    title: 'beinRücker Galabau',
    domain: 'beinrucker-galabau.netlify.app',
    desc: 'A landscaping and garden design company showcasing their services and portfolio.',
    url: 'https://beinrucker-galabau.netlify.app/',
    img: '/images/Screenshot 2026-01-12 at 15.27.41.png',
  },
  {
    title: 'Creative Agency',
    domain: 'creativeagency.com',
    desc: 'A portfolio site for a creative agency showcasing their projects and services.',
    url: 'https://creativeagency.com',
    img: '/images/images122.webp',
  },
  {
    title: 'Finance Tool',
    domain: 'financetool.com',
    desc: 'A web application providing financial planning and budgeting tools for users.',
    url: 'https://financetool.com',
    img: '/images/images133.webp',
  },
  {
    title: 'Outdoor Blog',
    domain: 'outdoorblog.com',
    desc: 'A blog dedicated to outdoor adventures, gear reviews, and travel tips.',
    url: 'https://outdoorblog.com',
    img: '/images/image.6.webp',
  },
];

const Projects = () => (
  <ProjectsSection id="projects">
    <ProjectsGrid>
      {projects.map((project, idx) => {
        // Alternate angles and offsets for a 'breaking' collage look
        const angles = [-4, 3, -2, 5, -3, 2];
        const offsets = [-10, 12, -6, 14, -8, 10];
        const angle = angles[idx % angles.length];
        const offset = offsets[idx % offsets.length];
        return (
          <ProjectCard
            key={idx}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            $angle={angle}
            $offset={offset}
          >
            <ProjectImage src={project.img} alt={project.title} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDesc>{project.desc}</ProjectDesc>
              <ProjectLinkRow>
                <ProjectDomain>{project.domain}</ProjectDomain>
              </ProjectLinkRow>
              <ArrowIcon>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 11L11 7M11 7H7M11 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </ArrowIcon>
            </ProjectInfo>
          </ProjectCard>
        );
      })}
    </ProjectsGrid>
  </ProjectsSection>
);

export default Projects;
