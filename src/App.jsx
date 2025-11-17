import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import BootSequence from './components/system/BootSequence';
import Desktop from './components/system/Desktop';
import Taskbar from './components/system/Taskbar';
import CrosshairCursor from './components/system/CrosshairCursor';
import LogOffScreen from './components/system/LogOffScreen';
import PowerOffScreen from './components/system/PowerOffScreen';
import ShutdownAnimations from './components/system/ShutdownAnimations';
import MobileHome from './components/mobile/MobileHome';
import useWindowsStore from './store/windowsStore';

function App() {
  const [isBootComplete, setIsBootComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { setBootComplete, systemState, isBootComplete: storeBootComplete } = useWindowsStore();

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBootComplete = () => {
    setIsBootComplete(true);
    setBootComplete(true);
  };

  // Handle restart - reset boot sequence
  useEffect(() => {
    if (!storeBootComplete && isBootComplete) {
      setIsBootComplete(false);
    }
  }, [storeBootComplete, isBootComplete]);

  // Show boot sequence if not complete
  if (!isBootComplete) {
    return (
      <>
        <GlobalStyle />
        <BootSequence onBootComplete={handleBootComplete} />
      </>
    );
  }

  // Show power-off screen
  if (systemState === 'powered-off') {
    return (
      <>
        <GlobalStyle />
        <PowerOffScreen />
      </>
    );
  }

  // Show log-off screen
  if (systemState === 'logged-off') {
    return (
      <>
        <GlobalStyle />
        <LogOffScreen />
      </>
    );
  }

  // Show mobile interface on small screens
  if (isMobile) {
    return (
      <>
        <GlobalStyle />
        <MobileHome />
      </>
    );
  }

  // Show desktop interface
  return (
    <>
      <GlobalStyle />
      <Desktop />
      <Taskbar />
      <CrosshairCursor />
      {systemState === 'logging-off' && <ShutdownAnimations type="logging-off" />}
      {systemState === 'powering-off' && <ShutdownAnimations type="powering-off" />}
    </>
  );
}

export default App;