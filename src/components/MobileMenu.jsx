import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 998;
  backdrop-filter: blur(8px);
`;

const MenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 400px;
  height: 100vh;
  background: ${({ theme }) => theme.bg};
  z-index: 999;
  padding: 6rem 2rem 2rem;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 0.5rem;
  opacity: 0.7;
  transition: opacity 0.2s, transform 0.2s;
  
  &:hover {
    opacity: 1;
    transform: rotate(90deg);
  }
`;

const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MenuItem = styled(motion.a)`
  font-family: 'Inter', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => 
    theme.bg === '#000' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    padding-left: 1rem;
    color: #3b82f6;
  }

  &::before {
    content: '';
    position: absolute;
    left: -100%;
    top: 0;
    width: 4px;
    height: 100%;
    background: #3b82f6;
    transition: left 0.3s ease;
  }

  &:hover::before {
    left: 0;
  }
`;

const MenuFooter = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => 
    theme.bg === '#000' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
`;

const ContactButton = styled.a`
  display: block;
  padding: 1rem 2rem;
  border-radius: 100px;
  background: ${({ theme }) => theme.bg === '#fff' ? '#000' : '#fff'};
  color: ${({ theme }) => theme.bg === '#fff' ? '#fff' : '#000'};
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const menuVariants = {
  closed: {
    x: '100%',
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  open: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const overlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

const itemVariants = {
  closed: {
    x: 50,
    opacity: 0
  },
  open: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

function MobileMenu({ isOpen, onClose, handleNav }) {
  const menuItems = [
    { label: 'Home', target: 'hero' },
    { label: 'Work', target: 'projects' },
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' }
  ];

  const handleMenuClick = (e, target) => {
    handleNav(e, target);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />
          <MenuContainer
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <CloseButton onClick={onClose} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
              </svg>
            </CloseButton>
            
            <MenuNav>
              {menuItems.map((item, i) => (
                <MenuItem
                  key={item.target}
                  href={`#${item.target}`}
                  onClick={(e) => handleMenuClick(e, item.target)}
                  custom={i}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                >
                  {item.label}
                </MenuItem>
              ))}
            </MenuNav>

            <MenuFooter>
              <motion.div
                custom={menuItems.length}
                variants={itemVariants}
                initial="closed"
                animate="open"
              >
                <ContactButton href="#contact" onClick={(e) => handleMenuClick(e, 'contact')}>
                  Let's Talk
                </ContactButton>
              </motion.div>
            </MenuFooter>
          </MenuContainer>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
