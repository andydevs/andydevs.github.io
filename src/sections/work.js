import React from 'react'
import Panel from '../components/panel'
import Grid from '../components/grid'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Title = styled.h3`
    font-weight: 600;
`

const Subtitle = styled.h4`
    font-weight: 300;
    font-style: italic;
`

export default function Work() {
    // Query
    const {
        allWorkYaml: { nodes: workunits }
    } = useStaticQuery(graphql`
        query WorkQuery {
            allWorkYaml {
                nodes {
                    id
                    company
                    jobTitle
                    timeline {
                        current
                        start {
                            month
                            year
                        }
                        end {
                            month
                            year
                        }
                    }
                    highlights
                }
            }
        }
    `)

    // Render
    return (
        <section id="work-experience">
            <h1>Where I've Worked</h1>
            <Grid>
                {workunits.map(
                    ({ id, company, jobTitle, timeline, highlights }) => (
                        <Panel key={id}>
                            <Panel.Body>
                                <Title>{company}</Title>
                                <Subtitle>{jobTitle}</Subtitle>
                                <Subtitle>
                                    {timeline.start.month} {timeline.start.year}
                                    &nbsp; &mdash; &nbsp;
                                    {timeline.current
                                        ? 'Present'
                                        : `${timeline.end.month} ${timeline.end.year}`}
                                </Subtitle>
                                <hr />
                                <ul>
                                    {highlights.map((highlight, index) => (
                                        <li key={index}>{highlight}</li>
                                    ))}
                                </ul>
                            </Panel.Body>
                        </Panel>
                    )
                )}
            </Grid>
        </section>
    )
}
