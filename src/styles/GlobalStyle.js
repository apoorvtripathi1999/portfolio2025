import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    overflow: hidden;
    font-family: ${theme.typography.fonts.primary};
    font-size: ${theme.typography.sizes.body};
    font-weight: ${theme.typography.weights.regular};
    background: ${theme.colors.global.background};
    color: ${theme.colors.text.primary};
    cursor: default;
    /* Desktop wallpaper with Neo-Brutalist overlay */
    background-image: 
      url('/src/assets/images/final journey.png'),
      radial-gradient(circle at 25px 25px, rgba(0, 255, 65, 0.05) 2%, transparent 50%),
      radial-gradient(circle at 75px 75px, rgba(0, 102, 255, 0.03) 1%, transparent 50%);
    background-size: cover, 100px 100px, 100px 100px;
    background-position: center, 0 0, 0 0;
    background-repeat: no-repeat, repeat, repeat;
    background-attachment: fixed;
  }

  #root {
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
  }

  /* Neo-Brutalist Cursor - Hide default cursor for crosshair system on desktop only */
  @media (min-width: 769px) {
    body {
      cursor: none;
    }
  }
  
  /* Show pointer cursor for interactive elements */
  button, a, [role="button"], input, textarea, select {
    cursor: pointer !important;
  }
  
  /* Enable touch scrolling on mobile */
  @media (max-width: 768px) {
    html, body {
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
    
    #root {
      overflow-y: auto;
    }
  }

  /* Neo-Brutalist Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 20px;
    height: 20px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.global.surface};
    border: 3px solid ${theme.colors.accents.neonGreen};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.accents.neonGreen};
    border: 2px solid ${theme.colors.global.surface};
    box-shadow: 3px 3px 0px ${theme.colors.accents.electricBlue};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.accents.electricBlue};
    box-shadow: 3px 3px 0px ${theme.colors.accents.hotPink};
  }

  ::-webkit-scrollbar-corner {
    background: ${theme.colors.global.surface};
    border: 3px solid ${theme.colors.accents.neonGreen};
  }

  /* Bold Selection styling */
  ::selection {
    background: ${theme.colors.accents.hotPink};
    color: ${theme.colors.global.background};
    text-shadow: none;
  }

  /* High-contrast focus outline */
  *:focus {
    outline: 3px solid ${theme.colors.accents.cyberYellow};
    outline-offset: 2px;
  }

  /* Custom button reset for brutalist styling */
  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  /* Link styling */
  a {
    color: ${theme.colors.text.link};
    text-decoration: underline;
    text-decoration-color: ${theme.colors.accents.neonGreen};
    text-underline-offset: 4px;
    text-decoration-thickness: 3px;
    transition: all ${theme.animations.fast};
  }

  a:hover {
    color: ${theme.colors.text.linkHover};
    text-decoration-color: ${theme.colors.accents.hotPink};
    text-shadow: 0 0 10px ${theme.colors.accents.electricBlue};
  }
`;

export default GlobalStyle;
