/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,


    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `wo7a9bdetm38`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `fs9TE1Zfprg8NL3KrO0TeP0QcqTZeqWQZd4ZU9NOaVk`,
      },
    },



    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `md`,
        // Path to the directory
        path: `${__dirname}/content`,
      },
    },


    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },


    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyC-K0KfKc3yzmh73jq9wkusJt3ptxElbDY",
          authDomain: "natasine-poruke.firebaseapp.com",
          databaseURL: "https://natasine-poruke-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "natasine-poruke",
          storageBucket: "natasine-poruke.appspot.com",
          messagingSenderId: "445616691171",
          appId: "1:445616691171:web:868cedbd26349f5d8ff2d6",
          // measurementId: "G-W9R3TLSDPG"
        }
      }
    }





  ],
}
