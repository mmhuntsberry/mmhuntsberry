import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import Switcher from "../Switcher";

import Home from "../Home";
import { layoutHeader } from "./index.module.css";

export const Layout = ({ children }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={isDark ? "dark" : "light"}>
      <div className={layoutHeader}>
        <Home />
        <Switcher />
      </div>
      {children}
    </div>
  );
};
