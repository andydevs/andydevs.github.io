/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Andydevs',
        description: `Software engineer by trade. Hobbyist programmer with wide 
        experience in programming languages and frameworks. I graduated in 2020 
        from Drexel University with a Bachelor's in Computer Engineering and I'm 
        currently working as #jobTitle for #company. I'm most experienced in 
        Python and JavaScript, although I'm continuously expanding my skillset 
        and learning new things.`,
        contact: {
            email: 'akanshul97@gmail.com',
            linkedin: 'https://www.linkedin.com/in/anshul-kharbanda-03433712b/',
            github: 'andydevs',
            itch: 'andydevs'
        }
    },
    flags: {
        DEV_SSR: false
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-scroll-reveal',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Andydevs',
                short_name: 'Andydevs',
                icon: 'assets/graphics/logo.svg'
            }
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: ['rubik:300,300i,500,600,800'],
                display: 'swap'
            }
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/
                }
            }
        },

        'gatsby-transformer-sharp',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                defaults: {
                    placeholder: 'none',
                    backgroundColor: '#005580',
                    quality: 100
                }
            }
        },

        
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: 'ki8v6ao5nutn',
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/assets/`
            }
        }
    ]
}
