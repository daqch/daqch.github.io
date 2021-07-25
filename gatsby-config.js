/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path");

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: path.join(__dirname, "/src/pages/markdown-pages"),
      },
    },
    `gatsby-transformer-remark`,
  ],
};
