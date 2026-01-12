import styled from 'styled-components';

const AboutSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 3.5rem;
  padding: 8rem 2rem 3rem 2rem;
  box-sizing: border-box;
`;

const AboutImageWrap = styled.div`
  flex: 0 0 340px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const AboutImage = styled.img`
  width: 380px;
  height: 380px;
  object-fit: cover;
  border-radius: 50%;
  background: #111;
  border: 1px solid #fff;
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.18);
  position: relative;
  z-index: 1;
  /* White outline effect */
  outline: 8px solid #fff;
  margin-top: 100px;
  margin-right: 30px;
`;

const AboutContent = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 600px;
`;

const AboutTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.bg === '#fff' ? '#444' : '#fff'};
`;

const AboutIntro = styled.p`
  font-size: 1.18rem;
  color: #fff;
  opacity: 0.85;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.bg === '#fff' ? '#444' : '#fff'};
`;

const AboutBody = styled.p`
  font-size: 1.08rem;
  color: #fff;
  opacity: 0.85;
  margin-top: 0.5rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.bg === '#fff' ? '#444' : '#fff'};
`;

const AboutLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
`;

const AboutLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.08rem;
  color: ${({ theme }) => theme.bg === '#fff' ? '#222' : '#fff'};
  background: ${({ theme }) => theme.bg === '#fff' ? '#f3f3f3' : '#181818'};
  border-radius: 8px;
  padding: 0.7rem 1.2rem;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.bg === '#fff' ? '#e0e0e0' : '#222'};
  position: relative;
  transition: background 0.18s, color 0.18s;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    left: 2.2rem;
    right: 1.2rem;
    bottom: 0.4rem;
    height: 2px;
    background: ${({ theme }) => theme.bg === '#fff' ? '#222' : '#fff'};
    border-radius: 2px;
    opacity: 0;
    transform: scaleX(0) translateY(6px);
    transform-origin: left;
    transition:
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &:hover:after, &:focus:after {
    opacity: 1;
    transform: scaleX(1) translateY(0);
  }
  &:hover, &:focus {
    background: ${({ theme }) => theme.bg === '#fff' ? '#222' : '#fff'};
    color: ${({ theme }) => theme.bg === '#fff' ? '#fff' : '#000'};
  }
  &[aria-disabled="true"] {
    pointer-events: none;
    opacity: 1;
    cursor: default;
  }
`;
const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.18em;
  margin-right: 0.7rem;
`;

const About = () => (
    <AboutSection id="about">
        <AboutImageWrap>
            <AboutImage src="/images/Profile.picture(2).jpg" alt="Valdrin Shala" />
        </AboutImageWrap>
        <AboutContent>
            <AboutTitle>A little about me</AboutTitle>
            <AboutIntro>
                Welcome to my digital playground — where ideas become interactive experiences.
            </AboutIntro>
            <AboutBody>
                I’m Valdrin, a passionate Frontend Developer specializing in bringing user interfaces to life through clean code, thoughtful interaction, and a deep appreciation for visual design. I believe the web is more than just content on a screen — it’s an experience — and my mission is to create websites and digital products that feel intuitive, meaningful, and effortless to use.
                As you explore my portfolio, you’ll see examples of this philosophy in action — projects that not only showcase my technical skills, but represent my dedication to building experiences that are fast, responsive, accessible, and designed with intention. I’m constantly learning, improving, and pushing my craft forward, and I’m excited to continue growing with every new challenge and project ahead.
                Now, as a freelance Frontend Developer, I collaborate with startups, brands, and business owners to turn ideas into functional products. From designing responsive interfaces to building scalable systems in code, I love every step of the process — especially solving problems that sit at the intersection of design and development. I also leverage no-code platforms when it makes sense, ensuring businesses have the most efficient and sustainable solution for their needs.
            </AboutBody>
            <AboutLinks>
                <AboutLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Icon>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" fill="currentColor" />
                        </svg>
                    </Icon>
                    Follow on LinkedIn
                </AboutLink>
                <AboutLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Icon>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor" />
                        </svg>
                    </Icon>
                    Follow on GitHub
                </AboutLink>
                <AboutLink as="div" aria-disabled="true">
                  <Icon>
                    <svg width="20" height="20" viewBox="52 42 88 66" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
                      <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
                      <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
                      <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
                      <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
                    </svg>
                  </Icon>
                  Valdrinsh.12@gmail.com
                </AboutLink>
            </AboutLinks>
        </AboutContent>
    </AboutSection>
);

export default About;
