module.exports = {
  siteMetadata: {
    title: `Hack The Valley 4`,
    description: `36 hour Hackathon at The University of Toronto Scarborough. Get your hands on some of the top hardware and API's out there and put your creativity to the test!`,
    author: `fpunny`,
  },
  plugins: [
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': './src/components',
          '@images': './src/images',
          '@layouts': './src/layouts',
          '@sections': './src/sections',
          '@utils': './src/utils'
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
