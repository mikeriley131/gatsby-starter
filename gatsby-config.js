module.exports = {
  siteMetadata: {
    title: `ROOT SITE TITLE`,
    description: `SITE META DESCRIPTION GOES HERE.`,
    siteURL: `ABSOLUTE PATH TO ROOT URL`,
    socialImage: `ABSOLUTE PATH TO IMAGE IN STATIC FOLDER`,
    author: `TWITTER HANDLE`,
  },
  plugins: [
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans:400,700'],
        },
        // custom: {
        //   families: ['CUSTOMFONT1, CUSTOMFONT2'],
        //   urls: ['/fonts/fonts.css'],
        // },
      },
    },
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
        name: `ROOT SITE TITLE`,
        short_name: `SHORT VERSION OF ROOT SITE TITLE`,
        start_url: `/`,
        background_color: `HEX VALUE`,
        theme_color: `HEX VALUE`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-accessibilityjs`,
      options: {
        injectStyles: false,
        errorClassName: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-tagmanager`,
    //   options: {
    //     id: 'GTM-ID-STRING',
    //     includeInDevelopment: true
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
