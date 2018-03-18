module.exports = {
  siteMetadata: {
    title: `Sally's Kitchen - Shop one, 295 Exhibition St Melbourne, 3000`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-74529203-1',
        head: true
      },
    },
  ],
}
