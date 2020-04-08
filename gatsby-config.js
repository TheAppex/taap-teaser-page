module.exports = {
  siteMetadata: {
    title: 'The Appex - Discover the best of the best Android Apps',
    author: `The Appex`,
    siteUrl: 'https://theappex.com',
    description: `We review and recommend the best Android Apps so you can supercharge your smartphone experience.`

  },
  plugins: [
      {
          resolve: 'gatsby-plugin-fathom',
          options: {
              // Fathom server URL. Defaults to `cdn.usefathom.com`
            //   trackingUrl: 'your-fathom-instance.com',
              // Unique site id
              siteId: 'PDTWGZBY',
              // Domain whitelist
            //   whitelistHostnames: [
            //       'yoursite.com'
            //   ]
          }
      }
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://theappex.us18.list-manage.com/subscribe/post-json?u=06dcce05a26a15a3a08b2066e&amp;id=b71672f575`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/assets/favicon.png`,
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
  ],
};
