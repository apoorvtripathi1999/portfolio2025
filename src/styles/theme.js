// Neo-Brutalist Dark Mode Theme Configuration
// Bold, High-Contrast Design System

export const theme = {
  // Neo-Brutalist Color Palette
  colors: {
    // Global Dark Mode Base
    global: {
      background: '#0A0A0A',
      surface: '#111111',
      surfaceElevated: '#1A1A1A',
    },

    // Bright Accent Colors
    accents: {
      neonGreen: '#00FF41',
      electricBlue: '#0066FF', 
      hotPink: '#FF0080',
      cyberYellow: '#FFFF00',
      acidOrange: '#FF6600',
      toxicPurple: '#8000FF',
      laserRed: '#FF0033'
    },

    // Window System
    window: {
      activeTitleBar: {
        gradient: {
          from: '#00FF41',
          to: '#00CC33'
        }
      },
      inactiveTitleBar: {
        gradient: {
          from: '#333333',
          to: '#2A2A2A'
        }
      },
      body: '#111111',
      border: '#00FF41',
      borderThick: '4px',
      shadow: '8px 8px 0px #00FF41',
      shadowHover: '12px 12px 0px #00FF41'
    },
    
    // Taskbar System
    taskbar: {
      background: {
        gradient: {
          from: '#1A1A1A',
          to: '#0A0A0A'
        }
      },
      border: '#0066FF',
      startButton: {
        background: '#0066FF',
        backgroundHover: '#0080FF',
        text: '#FFFFFF',
        border: '#0066FF',
        shadow: '4px 4px 0px #004080'
      }
    },
    
    // Multi-colored Window Variants
    windowVariants: {
      education: { border: '#00FF41', shadow: '#00FF41', titleBar: '#00FF41' },
      workExperience: { border: '#0066FF', shadow: '#0066FF', titleBar: '#0066FF' },
      technologies: { border: '#FF0080', shadow: '#FF0080', titleBar: '#FF0080' },
      projects: { border: '#FFFF00', shadow: '#FFFF00', titleBar: '#FFFF00' },
      about: { border: '#FF6600', shadow: '#FF6600', titleBar: '#FF6600' },
      articles: { border: '#8000FF', shadow: '#8000FF', titleBar: '#8000FF' },
      research: { border: '#FF0033', shadow: '#FF0033', titleBar: '#FF0033' },
      youtube: { border: '#FF0080', shadow: '#FF0080', titleBar: '#FF0080' },
      resume: { border: '#FF6B35', shadow: '#FF6B35', titleBar: '#FF6B35' },
      pong: { border: '#00FFFF', shadow: '#00FFFF', titleBar: '#00FFFF' },
      music: { border: '#FF9900', shadow: '#FF9900', titleBar: '#FF9900' }
    },
    
    // Text System
    text: {
      primary: '#FFFFFF',
      secondary: '#CCCCCC',
      light: '#FFFFFF',
      disabled: '#666666',
      accent: '#00FF41',
      link: '#0066FF',
      linkHover: '#00AAFF'
    },
    
    // Desktop & Icons
    desktop: {
      background: '#0A0A0A',
      icon: {
        background: 'rgba(0, 255, 65, 0.1)',
        backgroundHover: 'rgba(0, 255, 65, 0.2)',
        selected: 'rgba(0, 255, 65, 0.3)',
        border: '#00FF41',
        shadow: '3px 3px 0px #00FF41'
      }
    }
  },
  
  // Neo-Brutalist Typography System
  typography: {
    fonts: {
      primary: "'JetBrains Mono', 'Space Mono', 'Courier New', monospace",
      secondary: "'Inter', 'Arial Black', sans-serif", 
      display: "'Space Grotesk', 'Arial Black', sans-serif",
      mono: "'JetBrains Mono', 'Courier New', monospace"
    },
    sizes: {
      windowTitle: '14px',
      iconLabel: '11px',
      menuItem: '13px',
      userHeader: '18px',
      body: '12px',
      taskbarButton: '13px',
      clock: '12px',
      heading: '20px',
      subheading: '16px'
    },
    weights: {
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700',
      black: '900'
    }
  },
  
  // Enhanced Icon Sizes
  icons: {
    desktop: {
      small: '40px',
      large: '56px'
    },
    startMenu: '28px',
    windowTitle: '20px',
    taskbar: '20px'
  },
  
  // Bold Layout Dimensions
  layout: {
    taskbarHeight: '50px',
    windowBorderWidth: '4px',
    windowTitleHeight: '40px',
    shadowOffset: '8px',
    shadowBlur: '0px'
  },

  // Animation System
  animations: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
};

export default theme;
