module.exports = {
  siteMetadata: {
    title: 'The Android Apps Project',
    author: `The Android Apps Project`,
    siteUrl: 'https://taap.netlify.com',
    description: `The Best Android Apps. Reviewed.`

  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://theappex.us18.list-manage.com/subscribe/post-json?u=06dcce05a26a15a3a08b2066e&amp;id=b71672f575`,
      },
    },
  ],
};
