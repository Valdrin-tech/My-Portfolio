import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const themes = {
  dark: {
    bg: '#000',
    text: '#fff',
  },
  light: {
    bg: '#fff',
    text: '#000',
  },
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s, color 0.2s;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

const App = () => {
  const [mode, setMode] = useState('light');
  const theme = themes[mode];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header mode={mode} setMode={setMode} />
      <Hero />
      <Projects />
      <About />
      <Skills />
        {/* ...existing sections/components... */}
        <Footer />
      {/* ...existing sections/components... */}
    </ThemeProvider>
  );
}

export default App;