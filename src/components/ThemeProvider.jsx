import React, { useState, useEffect, createContext } from 'react';

// Step 1: Create a context
const ThemeContext = createContext();

// Step 2: Create a provider
function ThemeProvider({ children }) {
  // Step 3: Define state for dark mode
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return JSON.parse(savedDarkMode || 'false');
  });

  // Step 4: Save dark mode to local storage when it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    // document.body.classList.toggle('bg-[#fffff]', !darkMode); // Light mode background color
    document.body.classList.toggle('bg-stone-900', darkMode); 
 

  }, [darkMode]);

  // Step 5: Provide dark mode state and setter to all children
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Export the provider and context
export { ThemeProvider, ThemeContext };
