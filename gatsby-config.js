module.exports = {
  siteMetadata: {
    siteUrl: `https://pb&j.com`,
    title: `Peanut Butter & Jelly`,
    description: `They go together.`,
    author: `John Grisham`,
    logo: 'pb&j.png',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto', 'Open Sans', 'Libre Baskerville'],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
        plugins: [`gatsby-transformer-json`],
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-css-modules-typings`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Peanut Butter and Jelly template`,
        short_name: `PB & J`,
        start_url: `/`,
        background_color: `#4e2378`,
        theme_color: `#4e2378`,
        display: `minimal-ui`,
        icon: `src/images/pb&j.png`,
      },
    },
  ],
};
