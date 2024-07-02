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
    const projects = useStaticQuery(graphql`
        query ProjectsQuery {
            allContentfulProject {
                nodes {
                    id
                    title
                    screenshot {
                        gatsbyImageData(layout: CONSTRAINED)
                    }
                    description {
                        description
                    }
                    github
                    link
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
                {projects.allContentfulProject.nodes.map(
                    ({ id, title, screenshot, description, github, link }) => (
                        <Panel
                            key={id}
                            large={screenshot !== undefined && screenshot !== null}
                            data-sal="slide-up"
                            data-sal-duration="500"
                            data-sal-easing="ease"
                        >
                            {(screenshot && (
                                <Panel.ImageTitle
                                    title={title}
                                    imageData={getImage(screenshot)}
                                />
                            )) || <Panel.Title title={title} />}
                            <Panel.Body>
                                <p>{description.description}</p>
                            </Panel.Body>
                            <Panel.Footer>
                                <IconLink.Group>
                                    {link && (
                                        <IconLink
                                            icon={faExternalLinkAlt}
                                            href={link}
                                        />
                                    )}
                                    {github && (
                                        <IconLink
                                            icon={faGithub}
                                            href={github}
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
