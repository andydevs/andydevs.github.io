import React from 'react'
import Panel from '../components/panel'
import Grid from '../components/grid'
import { graphql, useStaticQuery } from 'gatsby'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import IconLink from '../components/iconlink'
import { getImage } from 'gatsby-plugin-image'
import Section from '../components/section'

export default function Projects() {
    // Query
    const {
        allProjectsYaml: { nodes: projects }
    } = useStaticQuery(graphql`
        query ProjectsQuery {
            allProjectsYaml {
                nodes {
                    id
                    title
                    image {
                        childImageSharp {
                            gatsbyImageData(
                                layout: CONSTRAINED
                                transformOptions: {
                                    duotone: {
                                        highlight: "#0088ff"
                                        shadow: "#000000"
                                    }
                                }
                            )
                        }
                    }
                    description
                    main
                    github
                }
            }
        }
    `)

    // Render
    return (
        <Section id="projects">
            <h1
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-easing="ease"
            >
                Stuff I've Made
            </h1>
            <Grid>
                {projects.map(
                    ({ id, title, image, description, github, main }) => (
                        <Panel
                            key={id}
                            large={image !== undefined && image !== null}
                            data-sal="slide-up"
                            data-sal-duration="500"
                            data-sal-easing="ease"
                        >
                            {(image && (
                                <Panel.ImageTitle
                                    title={title}
                                    imageData={getImage(image)}
                                />
                            )) || <Panel.Title title={title} />}
                            <Panel.Body>
                                <p>{description}</p>
                            </Panel.Body>
                            <Panel.Footer>
                                <IconLink.Group>
                                    {main && (
                                        <IconLink
                                            icon={faExternalLinkAlt}
                                            href={main}
                                        />
                                    )}
                                    {github && (
                                        <IconLink
                                            icon={faGithub}
                                            href={`https://github.com/${
                                                github.includes('/')
                                                    ? github
                                                    : 'andydevs/' + github
                                            }`}
                                        />
                                    )}
                                </IconLink.Group>
                            </Panel.Footer>
                        </Panel>
                    )
                )}
            </Grid>
        </Section>
    )
}
