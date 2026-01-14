import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.bg};
  padding: 10rem 2rem 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.bg === '#fff' ? '#eee' : '#111'};
`;

const FooterTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 12vw, 10rem);
  font-weight: 500;
  line-height: 0.9;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  letter-spacing: -0.05em;
  text-transform: lowercase;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const FooterGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  gap: 5rem;
  margin-top: 4rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const FooterLabel = styled.span`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #888;
  margin-bottom: 0.5rem;
  display: block;
  font-weight: 500;
`;

const EmailLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 5vw, 4rem);
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  letter-spacing: -0.03em;
  
  &:hover {
    opacity: 0.4;
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ContactLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 400;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    justify-content: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

const FooterCopyright = styled.div`
  margin-top: 10rem;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 0.9rem;
  border-top: 1px solid ${({ theme }) => theme.bg === '#fff' ? '#eee' : '#111'};
  padding-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterSection id="contact">
      <FooterTitle>let's talk.</FooterTitle>
      
      <FooterGrid>
        <ContactInfo>
          <FooterLabel>Drop me a line</FooterLabel>
          <EmailLink href="mailto:Valdrinsh.12@gmail.com">valdrinsh.12@gmail.com</EmailLink>
        </ContactInfo>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <FooterLabel>Connect</FooterLabel>
          <SocialLinks>
            <ContactLink href="https://linkedin.com" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              LinkedIn
            </ContactLink>
            <ContactLink href="https://github.com" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Github
            </ContactLink>
            <ContactLink href="/resume.pdf" download><span style={{ fontSize: '0.8em', marginLeft: '4px' }}>↓</span> Resume </ContactLink>
          </SocialLinks>
        </div>
      </FooterGrid>

      <FooterCopyright>
        <div>© {new Date().getFullYear()} Valdrin Shala. All rights reserved.</div>
        <div>Built with passion & precision.</div>
      </FooterCopyright>
    </FooterSection>
  );
};

export default Footer;
