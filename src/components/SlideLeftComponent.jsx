import React, { useState, useEffect, useRef } from 'react';

const SlideLeftComponent = ({ children }) => {
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
      className={`transition-transform duration-700 ease-in-out transform ${
        isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
    >
      {children}
    </div>
  );
};

export default SlideLeftComponent;