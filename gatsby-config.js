const siteMetadata = require('./data/site-config')

module.exports = {
  plugins: [
      {
          resolve: 'gatsby-theme-factly',
          options: {
            client: 'factly',
            metaData: siteMetadata
          }
      }
  ]
}