module.exports = {
  siteMetadata: {
    title: 'The Android Apps Project',
    author: `The Android Apps Project`,
    siteUrl: 'https://taap.netlify.com',
    description: `The Best Android Apps. Reviewed.`

  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
