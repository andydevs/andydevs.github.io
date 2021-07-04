import React from 'react'
import Panel from '../components/panel'
import Grid from '../components/grid'
import { graphql, useStaticQuery } from 'gatsby'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import IconLink from '../components/iconlink'

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
                            fluid(
                                base64Width: 600
                                duotone: {
                                    highlight: "#00aaff"
                                    shadow: "#333333"
                                }
                            ) {
                                base64
                            }
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
        <section id="projects">
            <h1
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-easing="ease">
                Stuff I've Made
            </h1>
            <Grid>
                {projects.map(
                    ({ id, title, image, description, github, main }, index) => (
                        <Panel
                            key={id}
                            large={image !== undefined && image !== null}
                            data-sal="slide-up"
                            data-sal-duration="500"
                            data-sal-easing="ease">
                            {image && (
                                <Panel.ImageTitle
                                    title={title}
                                    base64={image.childImageSharp.fluid.base64}
                                />
                            )}
                            <Panel.Body>
                                {!image && <h3>{title}</h3>}
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
                                            href={`https://github.com/andydevs/${github}`}
                                        />
                                    )}
                                </IconLink.Group>
                            </Panel.Footer>
                        </Panel>
                    )
                )}
            </Grid>
        </section>
    )
}
