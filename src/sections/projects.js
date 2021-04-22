import React from "react"
import Panel from "../components/panel";
import Grid from "../components/grid";
import { graphql, useStaticQuery } from "gatsby"
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import IconLink from "../components/iconlink";

export default function Projects() {
    // Query
    const { allProjectsYaml: { nodes: projects } } = useStaticQuery(graphql`
        query ProjectsQuery {
            allProjectsYaml {
                nodes {
                    id
                    title
                    image {
                        childImageSharp {
                            fluid(base64Width: 600) {
                                base64
                            }
                        }
                    }
                    description
                    website
                    github
                }
            }
        }
    `)

    // Render
    return (
        <section id="projects">
            <h1>Projects</h1>
            <Grid>
                {projects.map(({ id, title, image, description, github, website }) => 
                    <Panel key={id}>
                        { image && <Panel.Image alt={title} src={image.childImageSharp.fluid.base64} /> }
                        <Panel.Body>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            { website && <IconLink icon={faGlobe} href={website}/> }
                            { github && <IconLink icon={faGithub} href={`https://github.com/andydevs/${github}`}/> }
                        </Panel.Body>
                    </Panel>
                )}
            </Grid>
        </section>
    )
}