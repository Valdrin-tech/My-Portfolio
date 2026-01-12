import styled from 'styled-components';

const FooterSection = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.bg === '#fff' ? '#eeececff' : '#1e1d1dff'};
  padding: 4rem 2rem 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.bg === '#fff' ? '#e0e0e0' : '#222'};
`;

const FooterTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 0.7rem;
  color: ${({ theme }) => theme.bg === '#fff' ? '#222' : '#fff'};
  text-align: center;
`;

const FooterSubtitle = styled.p`
  font-size: 1.13rem;
  color: ${({ theme }) => theme.bg === '#fff' ? '#444' : '#aaa'};
  margin-bottom: 2.2rem;
  text-align: center;
`;

const FooterActions = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 2.5rem;
`;

const BookButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #181818;
  color: #fff;
  font-weight: 600;
  font-size: 1.08rem;
  border-radius: 2rem;
  padding: 0.95rem 2.2rem;
  text-decoration: none;
  border: none;
  box-shadow: 0 1px 8px 0 rgba(0,0,0,0.08);
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  cursor: pointer;
  &:hover, &:focus {
    background: #fff;
    color: #000;
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.13);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.bg === '#fff' ? '#222' : '#fff'};
  font-size: 1.08rem;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.18s;
  &:hover, &:focus {
    color: #888;
  }
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #181818;
  color: #fff;
  font-weight: 600;
  font-size: 1.08rem;
  border-radius: 2rem;
  padding: 0.7rem 1.6rem;
  text-decoration: none;
  border: none;
  transition: background 0.18s, color 0.18s;
  cursor: pointer;
  &:hover, &:focus {
    background: #fff;
    color: #000;
  }
`;

const FooterCopyright = styled.div`
  margin-top: 2.5rem;
  color: ${({ theme }) => theme.bg === '#fff' ? '#565454ff' : '#c1c1c1ff'};
  font-size: 0.98rem;
  text-align: center;
`;

const Footer = () => (
  <FooterSection>
    <FooterTitle>Need a Frontend Developer on your team?</FooterTitle>
    <FooterSubtitle>
      Whether it’s a full-time opportunity, a freelance project, or technical guidance — I’d love to help turn your ideas into real, usable digital products.
      <br />
      Let’s connect and make it happen.
    </FooterSubtitle>
    <FooterActions>
      <BookButton href="mailto:Valdrinsh.12@gmail.com?subject=Let's%20work%20together!">Book a free call</BookButton>
    </FooterActions>
    <FooterLinks>
      <FooterLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        {/* LinkedIn SVG */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" fill="currentColor"/></svg>
        LinkedIn
      </FooterLink>
      <FooterLink href="https://github.com" target="_blank" rel="noopener noreferrer">
        {/* GitHub SVG */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/></svg>
        GitHub
      </FooterLink>
      <ResumeButton href="/resume.pdf" download>
        {/* Download SVG */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16v-8m0 8l-4-4m4 4l4-4M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Resume
      </ResumeButton>
    </FooterLinks>
    <FooterCopyright>
      © {new Date().getFullYear()} Valdrin Shala. All rights reserved
    </FooterCopyright>
  </FooterSection>
);

export default Footer;
