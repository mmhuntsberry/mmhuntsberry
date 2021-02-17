import React, { useContext } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { home__icon } from "./home.module.css";
import { ThemeContext } from "../../contexts/themeContext";

const Home = () => {
  const { isDark } = useContext(ThemeContext);
  const { pathname } = useLocation();
  return (
    <Link to="/">
      {pathname === "/" ? (
        <h4 className={`${home__icon} ${isDark ? "dark" : "light"}`}>
          {"\u007B \u007D"}
        </h4>
      ) : (
        <h4 className={`${home__icon} ${isDark ? "dark" : "light"}`}>
          {"\u007BHome\u007D"}
        </h4>
      )}
    </Link>
  );
};

export default Home;
