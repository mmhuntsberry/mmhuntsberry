import React, { createContext, useState } from "react";

const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [isDark, setTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDark, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
