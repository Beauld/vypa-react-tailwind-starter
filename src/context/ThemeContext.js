import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark"); // default is dark

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
// This code creates a ThemeContext using React's Context API. It provides a way to manage and toggle between dark and light themes throughout the application. The `ThemeProvider` component wraps around the application, allowing any child component to access the current theme and the function to toggle it via the `useTheme` hook.
// The `useTheme` hook simplifies the process of accessing the theme context in functional components.