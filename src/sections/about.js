import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'photo description';
    place-items: center;
    gap: 16pt;

    @media screen and (max-width: 900px) {
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        grid-template-areas:
            'photo'
            'description';
    }
`

const Description = styled.div`
    grid-area: description;
    font-size: 18pt;
`

const Blurb = styled.p`
    display: block;
    margin: 16pt 0pt;
`

const StyledLink = styled.a`
    /* Remove content */
    &:before {
        content: '';
    }

    /* Panel */
    border-radius: 8pt;
    -webkit-box-shadow: 4px 4px 21px -6px rgba(0, 0, 0, 0.37);
    -moz-box-shadow: 4px 4px 21px -6px rgba(0, 0, 0, 0.37);
    box-shadow: 4px 4px 21px -6px rgba(0, 0, 0, 0.37);

    /* Alignment */
    display: inline-flex;
    align-items: center;

    /* Spacing */
    margin: 16pt 0pt;
    padding: 8pt 12pt;

    /* Coloring */
    background-color: var(--secondary);
    color: var(--secondary-text);

    transition: 0.25s ease-in-out;
    &:hover {
        -webkit-box-shadow: 4px 4px 18px 0px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 4px 4px 18px 0px rgba(0, 0, 0, 0.5);
        box-shadow: 4px 4px 18px 0px rgba(0, 0, 0, 0.5);
    }

    /* Font and icon */
    .text {
        font-weight: 500;
    }
    .icon {
        font-size: 20pt;
        margin-right: 8pt;
    }
`

const article = (subject) => (/^[aeiouAEIOU]/.test(subject) ? 'an' : 'a')

export default function About() {
    // Query
    const about = useStaticQuery(graphql`
        query AboutQuery {
            site {
                siteMetadata {
                    description
                    contact {
                        github
                    }
                }
            }
            profile: file(relativePath: {eq: "images/profile.jpg"}) {
                childImageSharp {
                    gatsbyImageData(
                        layout: FIXED, 
                        width: 300, 
                        aspectRatio: 1,
                        transformOptions: {duotone: {highlight: "#0088ff", shadow: "#000000"}}
                    )
                }
            }
            workYaml(timeline: { current: { eq: true } }) {
                jobTitle
                company
            }
        }
    `)

    return (
        <section id="about">
            <h1
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-easing="ease">
                About Me
            </h1>
            <Grid>
                <GatsbyImage
                    image={getImage(about.profile)}
                    style={{
                        gridArea: 'photo',
                        borderRadius: '8pt',
                        boxShadow: '4px 4px 21px -6px rgba(0, 0, 0, 0.37)'
                    }}
                />
                <Description>
                    <Blurb
                        data-sal="slide-up"
                        data-sal-delay="200"
                        data-sal-duration="500"
                        data-sal-easing="ease">
                        {about.site.siteMetadata.description
                            .replace('#jobTitle', `${article(about.workYaml.jobTitle)} ${about.workYaml.jobTitle}`)
                            .replace('#company', about.workYaml.company)}
                    </Blurb>
                    <StyledLink
                        href={`https://github.com/${about.site.siteMetadata.contact.github}`}
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-duration="500"
                        data-sal-easing="ease">
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                        <span className="text">Check out my GitHub</span>
                    </StyledLink>
                </Description>
            </Grid>
        </section>
    )
}
