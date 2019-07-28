const theme = require('./src/theme')

module.exports = {
  siteMetadata: {
    title: `NodeSchool Munich`,
    description: `Open source workshops that teach web software skills.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NodeSchool Munich`,
        short_name: `NodeSchool Munich`,
        start_url: `/`,
        background_color: theme.hoverColor,
        theme_color: theme.hoverColor,
        display: `minimal-ui`,
        icon: `src/images/nodeschool-munich-logo.svg`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
