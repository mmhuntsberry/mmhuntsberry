import React from "react";
import { Link } from "react-scroll";
import Title from "../components/Title";
import Occupation from "../components/Occupation";
import Nav from "../components/Nav";
import ProjectList from "../components/ProjectList";

import {
  appContainer,
  appTitleContainer,
  projects__links,
  projects__title,
  projects__image,
} from "./index.module.css";
import { useSiteMetadata } from "../utils/hooks/useSiteMetadata";
import { Layout } from "../components/Layout";
import SEO from "../components/SEO";

export default function Home() {
  const { title, description, occupation } = useSiteMetadata();

  return (
    <Layout>
      <SEO title={title} description={description} />
      <div className={appContainer}>
        <div className={appTitleContainer}>
          <Title title={title} />
          <Occupation occupation={occupation} />
          <Nav />
          <div className={projects__links}>
            <h5 className={projects__title}>Projects</h5>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                className={projects__image}
              >
                <path d="M23.245 4L12 18.374.781 4 0 4.619 12 20 24 4.609 23.245 4z" />
              </svg>
            </Link>
          </div>
        </div>
        <ProjectList />
      </div>
    </Layout>
  );
}
