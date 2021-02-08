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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-remark-images`,
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
            name: `posts`,
            path: `${__dirname}/src/furniture`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `posts`,
            path: `${__dirname}/src/img`,
        },
    },
  ],
}
