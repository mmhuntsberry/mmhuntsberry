import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  project__list,
  project__item,
  project__title,
  project__description,
  project__updated,
  tags__container,
  tag,
} from "./project-list.module.css";

const ProjectList = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allGithubData {
          nodes {
            data {
              user {
                repositories {
                  nodes {
                    description
                    forkCount
                    id
                    name
                    homepageUrl
                    openGraphImageUrl
                    updatedAt(fromNow: true)
                    url
                    languages {
                      nodes {
                        name
                      }
                    }
                    stargazers {
                      totalCount
                    }
                    isPrivate
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const repos = data.allGithubData.nodes[0].data.user.repositories.nodes;

  console.log(repos);

  return (
    <ul id="projects" className={`${project__list}`}>
      {repos.reverse().map((repo) => {
        return (
          repo.isPrivate !== true && (
            <li key={repo.id} className={project__item}>
              <h2 className={project__title}>
                <a href={repo.homepageUrl || repo.url}>{repo.name}</a>
              </h2>
              <i className={project__updated}>Updated: {repo.updatedAt}</i>
              <p className={project__description}>{repo.description}</p>
              <ul className={tags__container}>
                {repo.languages.nodes.map((lang) => (
                  <li className={tag} key={lang.name}>
                    {lang.name}
                  </li>
                ))}
              </ul>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default ProjectList;
