module.exports = {
  siteMetadata: {
    author: `Atharva Kawtikwar`,
    title: `Kawti's Personal Website`,
    description: `An example of making use of emotion and tailwind`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    locale: `en_GB`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: `images`,
      },
    },
   
    },
    `gatsby-plugin-offline`,
  ],
};
