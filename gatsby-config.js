require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Recipes`,
    description: `Definitely not stolen recipes made for easier access`,
    author: `Mel`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify-cache",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "TS",
        fieldName: "takeshape",
        // Url to query from
        url: `https://api.takeshape.io/project/${process.env.TAKESHAPE_PROJECT}/graphql`,
        // HTTP headers
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TAKESHAPE_TOKEN}`
        },
        // Additional options to pass to node-fetch
        fetchOptions: {}
      }
    } //a whole new line
  ]
};
