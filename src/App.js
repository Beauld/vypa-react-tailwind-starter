import React from "react";
import ThemeToggleButton from './components/ThemeToggleButton';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useTheme } from "./context/ThemeContext"; // ✅ import hook

function App() {
  const { theme } = useTheme(); // ✅ get current theme

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Router>
        {/* 🔘 Theme Toggle Button always visible */}
        <ThemeToggleButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// This code sets up a React application with routing using `react-router-dom`. 
// It includes a `ThemeToggleButton` component that allows users to toggle between dark and light themes.
// The `App` component uses the `useTheme` hook to determine the current theme and applies it to the root div.
// The `Router` component defines routes for Home and Login pages only, since LoginLight has been removed.
