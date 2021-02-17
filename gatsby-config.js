/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config();
const { githubApiQuery } = require("./src/utils/queries/github-api");

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Matthew Huntsberry",
    occupation: "User Experience Engineer",
    description:
      "A developer specializing in the user's experience.  I help tie design and developement together.",
    url: "https://www.mmhuntsberry.com", // No trailing slash allowed!
    twitterUsername: "@mmhuntsberry",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-github-api`,
      options: {
        url: "https://api.github.com/graphql", // default Github GraphQL v4 API endpoint

        // token: required by the GitHub API
        token: process.env.GITHUB_TOKEN,

        // GraphQLquery: defaults to a search query
        graphQLQuery: githubApiQuery,

        // variables: defaults to variables needed for a search query
        variables: {
          github_login: process.env.GITHUB_USER,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `posts`,
      },
    },
  ],
};
