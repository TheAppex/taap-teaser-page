module.exports = {
  siteMetadata: {
    title: 'The Appex',
    author: `The Appex`,
    siteUrl: 'https://theappex.com',
    description: `We review and recommend the best Android Apps so you can supercharge your smartphone experience.`

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
