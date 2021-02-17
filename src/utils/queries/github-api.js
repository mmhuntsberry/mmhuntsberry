exports.githubApiQuery = `
  query($github_login: String!) {
      user(login: $github_login) {
        name
        repositories(first: 100) {
          nodes {
            id
            name
            description
            url
            isPrivate
            homepageUrl
            updatedAt
            forkCount 
            openGraphImageUrl
            stargazers {
            totalCount
            }
            primaryLanguage {
              name
            }
            languages(first: 10) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  `;
