module.exports = {
  siteMetadata: {
    title: `Jei Rebua`,
    description: `Good day! My name is Jesson, a web developer based in the Philippines. I work as a developer for almost 3 years. I use ReactJS for my font-end and Laravel for back-end in my projects. I used to focus more on the backend because most of my projects only requires minimal design but recently i've been focusing on improving my skills more on CSS, designing UI/UX.`,
    author: `@jhayrebua`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
