import React from "react";
import { Link } from "gatsby";
import navItems from "../../data/icons/navigation-data";
import { nav, navList, navItem, navIcon, navTitle } from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={nav}>
      <ul className={navList}>
        {navItems.map((item) =>
          item.title === "blog" ? (
            <Link to={item.href} key={item.title}>
              <li className={navItem}>
                <svg
                  className={navIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={item.viewBox}
                >
                  <path d={item.path} />
                </svg>
                <h4 className={navTitle}>{item.title}</h4>
              </li>
            </Link>
          ) : (
            <a href={item.href} key={item.title}>
              <li className={navItem}>
                <svg
                  className={navIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={item.viewBox}
                >
                  <path d={item.path} />
                </svg>
                <h4 className={navTitle}>{item.title}</h4>
              </li>
            </a>
          )
        )}
      </ul>
    </nav>
  );
};

export default Nav;
