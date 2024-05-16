import React, { useState, useEffect, useRef } from 'react';

const SlideUpComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      
      const elementTop = componentRef.current.getBoundingClientRect().top;
        setIsVisible(elementTop < windowHeight);
      
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);

  return (
    <div
      ref={componentRef}
      className={`transition-transform duration-1000 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      {children}
    </div>
  );
};

export default SlideUpComponent;
