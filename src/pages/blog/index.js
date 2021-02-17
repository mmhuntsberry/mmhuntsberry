import { graphql, Link } from "gatsby";
import React from "react";
import { Layout } from "../../components/Layout";
import {
  posts__container,
  post,
  post__title,
  post__date,
  post__excerpt,
} from "./blog.module.css";

export default ({ data }) => {
  return (
    <Layout theme="dark">
      <div className={`${posts__container}`}>
        {data.allMdx.nodes.map(({ excerpt, slug, frontmatter }) => (
          <article className={post}>
            <header>
              <h3 className={post__title}>
                <Link to={slug}>{frontmatter.title}</Link>
              </h3>
              <small className={post__date}>{frontmatter.date}</small>
            </header>
            <p className={post__excerpt}>{excerpt}</p>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query POSTS_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
        }
        slug
      }
    }
  }
`;
