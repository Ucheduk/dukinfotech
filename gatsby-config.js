module.exports = {
  siteMetadata: {
    title: `Dukstack - A Full Stack Developer`,
    description: `Uche Nwakwuo {duk_stack} Portfolio Website. Made with 💜 for Gatsby`,
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
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `wp-api.dukinfotech.com.ng`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
