module.exports = {
  siteMetadata: {
    title: `Duk Stack - Full Stack Developer`,
    description: `Uche Nwakwuo {Duk_Stack} Portfolio Website. Made with 💜 for Gatsby`,
    author: `Duk_Stack`,
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
        name: `dukstack-portfolio-site`,
        short_name: `dukstack`,
        lang: `en`,
        display: `standalone`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
