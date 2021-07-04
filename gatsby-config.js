/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Andydevs',
        name: {
            first: 'Anshul',
            last: 'Kharbanda'
        },
        description: `
        Software engineer by trade. Hobbyist programmer with wide experience 
        in programming languages and frameworks. I graduated in 2020 from Drexel 
        University with a Bachelor's in Computer Engineering and I'm currently
        working as a software developer for Raytheon. I'm also an A+ certified 
        computer technician. I'm most experienced in Python, Javascript, and C++, 
        although I'm continuously expanding my skillset and learning new things.
        `,
        contact: {
            email: 'akanshul97@gmail.com',
            linkedin: 'https://www.linkedin.com/in/anshul-kharbanda-03433712b/',
            github: 'andydevs',
            itch: 'andydevs'
        }
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-scroll-reveal',
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: ['rubik:300,300i,500,600,800'],
                display: 'swap'
            }
        },
        'gatsby-transformer-yaml',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/`
            }
        }
    ]
}
