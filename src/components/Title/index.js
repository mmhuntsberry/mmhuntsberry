import React from "react";
import { appTitle } from "./title.module.css";

const AppTitle = ({ title }) => {
  return <h1 className={appTitle}>{title}</h1>;
};

export default AppTitle;
