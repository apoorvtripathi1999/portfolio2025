import { useState, useEffect, useCallback } from 'react';

// Throttle function for performance optimization
const throttle = (func, delay) => {
  let timeoutId;
  let lastExecTime = 0;
  
  return function (...args) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    isMoving: false
  });

  const updateMousePosition = useCallback((event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
      isMoving: true
    });
  }, []);

  const throttledUpdateMousePosition = useCallback(
    throttle(updateMousePosition, 16), // ~60fps
    [updateMousePosition]
  );

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = (event) => {
      throttledUpdateMousePosition(event);

      // Reset moving state after a brief delay
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setMousePosition(prev => ({
          ...prev,
          isMoving: false
        }));
      }, 150);
    };

    // Add event listener to document to capture global mouse movement
    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [throttledUpdateMousePosition]);

  return mousePosition;
};

export default useMousePosition;