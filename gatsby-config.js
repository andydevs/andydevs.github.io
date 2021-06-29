/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Andydevs'
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-yaml',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/`,
            }
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'rubik\:300,300i,500,600,800'
                ],
                display: 'swap'
            }
        }
    ]
}
