module.exports = {
  siteMetadata: {
    title: `Pulling Teeth`,
    description: `Archive of music, merch, flyers, and more for Pulling Teeth - Baltimore hardcore.`,
    siteUrl: `https://pullingteethmd.com`,
    socialImage: `ABSOLUTE PATH TO IMAGE IN STATIC FOLDER`,
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
          families: ['Cinzel Decorative:700,900', 'PT Serif: 400, 400i, 700'],
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
        name: `Pulling Teeth - Baltimore Hardcore`,
        short_name: `Pulling Teeth`,
        start_url: `/`,
        background_color: `#111111`,
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
};
