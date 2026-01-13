import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MobileMenu from './MobileMenu';

const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 20;
  box-sizing: border-box;
  padding: 1.5rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme, $scrolled }) =>
    theme.bg === '#000'
      ? $scrolled
        ? 'rgba(0,0,0,0.60)'
        : 'rgba(0,0,0,0.80)'
      : $scrolled
      ? 'rgba(255,255,255,0.80)'
      : 'rgba(255,255,255,0.80)'};
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid
    ${({ theme }) => (theme.bg === '#000' ? 'rgba(170,170,170,0.18)' : 'rgba(34,34,34,0.08)')};
  border-radius: 0 0 1rem 1rem;
  backdrop-filter: blur(24px);
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: ${({ theme, $scrolled }) =>
    theme.bg === '#000' && $scrolled
      ? '0 2px 16px 0 rgba(34,34,34,0.18)'
      : theme.bg !== '#000' && $scrolled
      ? '0 2px 16px 0 rgba(170,170,170,0.18)'
      : 'none'};
`;

const Name = styled.a`
  font-size: 1.4rem;
  font-weight: 800;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: -0.5px;

  &::before {
    content: '</>';
    color: #3b82f6;
    font-family: monospace;
    font-weight: 900;
    font-size: 1.1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
  flex: 1;
  justify-content: flex-end;
  margin-right: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  opacity: 0.5;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;

  &:hover, &:focus {
    opacity: 1;
    letter-spacing: 0.3em;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #3b82f6;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Switch = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.text};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  opacity: 0.7;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

const ContactBtn = styled.a`
  padding: 0.8rem 1.8rem;
  border-radius: 100px;
  background: ${({ theme }) => theme.bg === '#fff' ? '#000' : '#fff'};
  color: ${({ theme }) => theme.bg === '#fff' ? '#fff' : '#000'};
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: transform 0.2s, background 0.2s;
  cursor: pointer;
  &:hover, &:focus {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1000;
  transition: opacity 0.2s;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const HamburgerIcon = styled.div`
  width: 24px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.text};
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  ${({ $isOpen }) => $isOpen && `
    span:nth-child(1) {
      transform: rotate(45deg) translateY(9px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translateY(-9px);
    }
  `}
`;





function Header({ mode, setMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNav = (e, target) => {
    e.preventDefault();
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeaderBar $scrolled={scrolled}>
        <Name href="#" onClick={e => handleNav(e, 'hero')}>Valdrin Shala</Name>
        <Nav>
          <NavLink href="#" onClick={e => handleNav(e, 'hero')}>Home</NavLink>
          <NavLink href="#" onClick={e => handleNav(e, 'projects')}>Work</NavLink>
          <NavLink href="#" onClick={e => handleNav(e, 'about')}>About</NavLink>
        </Nav>
        <Controls>
          <Switch onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')} aria-label="Toggle dark/light mode">
            <svg
              width="18"
              height="18"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7.5 1.5V0.5M7.5 14.5V13.5M13.5 7.5H14.5M1.5 7.5H0.5M11.7426 3.25736L12.4497 2.55025M2.55025 12.4497L3.25736 11.7426M12.4497 12.4497L11.7426 11.7426M3.25736 3.25736L2.55025 2.55025M7.5 10.5C5.84315 10.5 4.5 9.15685 4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5C9.15685 4.5 10.5 5.84315 10.5 7.5C10.5 9.15685 9.15685 10.5 7.5 10.5Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Switch>
          <ContactBtn href="#contact">Let's Talk</ContactBtn>
          <HamburgerButton 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <HamburgerIcon $isOpen={mobileMenuOpen}>
              <span />
              <span />
              <span />
            </HamburgerIcon>
          </HamburgerButton>
        </Controls>
      </HeaderBar>
      
      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        handleNav={handleNav}
      />
    </>
  );
}

export default Header;
