import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Layout } from "../components/Layout";
import SEO from "../components/SEO";
import {
  post__container,
  post__title,
  post__date,
  post__pagination,
  pagination__link,
} from "./post-template.module.css";

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <div className={post__container}>
        <h1 className={post__title}>{frontmatter.title}</h1>
        <div>
          <p className={post__date}>{frontmatter.date}</p>
        </div>
        <MDXRenderer>{body}</MDXRenderer>
        <div className={post__pagination}>
          {!previous ? null : (
            <>
              {previous && (
                <Link className={pagination__link} to={previous.fields.slug}>
                  &larr; {previous.frontmatter.title}
                </Link>
              )}
            </>
          )}
          {!next ? null : (
            <>
              {next && (
                <Link className={pagination__link} to={next.fields.slug}>
                  {next.frontmatter.title} &rarr;
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        description
      }
    }
  }
`;
