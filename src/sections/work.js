import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Title = styled.h3`
    font-weight: 600;
`

const Subtitle = styled.h4`
    font-weight: 300;
    font-style: italic;
`

const WorkGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    @media screen and (max-width: 700px) {
        grid-template-columns: auto;
    }
`

const WorkHeader = styled.div`
    * { margin: 0pt; }
    margin-bottom: 16pt;
    @media screen and (max-width: 700px) {
        margin-bottom: 8pt;
    }
`

const WorkHighlights = styled.div`
    ul { margin-top: 0pt; }
    li { margin: 4pt 0pt; }
    margin-bottom: 32pt;
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
            <h1
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-easing="ease">
                Where I've Worked
            </h1>
            <WorkGrid>
                {workunits.map(
                    ({ id, company, jobTitle, timeline, highlights }) => (
                        <React.Fragment key={id}>
                            <WorkHeader
                                data-sal="slide-up"
                                data-sal-duration="500"
                                data-sal-easing="ease">
                                <Title>{company}</Title>
                                <Subtitle>{jobTitle}</Subtitle>
                                <Subtitle>
                                    {timeline.start.month} {timeline.start.year}
                                    &nbsp; &mdash; &nbsp;
                                    {timeline.current
                                        ? 'Present'
                                        : `${timeline.end.month} ${timeline.end.year}`}
                                </Subtitle>
                            </WorkHeader>
                            <WorkHighlights
                                data-sal="slide-up"
                                data-sal-duration="500"
                                data-sal-easing="ease">
                                <ul>
                                    {highlights.map((highlight, index) => (
                                        <li key={index}>{highlight}</li>
                                    ))}
                                </ul>
                            </WorkHighlights>
                        </React.Fragment>
                    )
                )}
            </WorkGrid>
        </section>
    )
}