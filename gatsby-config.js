/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
      title: `Furniture Portfolio`,
      description: `Place to display my stuff.`,
  },
  plugins: [
      {
          resolve: `gatsby-plugin-mdx`,
          options: {
              extensions: [`.mdx`, `.md`],
          },
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `posts`,
              path: `${__dirname}/src/furniture`,
          },
      },
  ],
}
