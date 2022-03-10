import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Title = styled.h3`
    font-weight: 600;
`

const Subtitle = styled.h4`
    font-weight: 300;
    color: var(--less-white)
`

const WorkTable = styled.table`
    margin-top: -32pt;
    border-spacing: 0pt 32pt;

    td {
        display: table-cell;
        vertical-align: top;
    }

    @media screen and (max-width: 700px) {
        margin-top: 0pt;
        border-spacing: 0pt 16pt;
        td {
            display: block;
        }
    }
`

const WorkHeader = styled.td`
    * {
        margin: 0pt;
    }
    width: auto;
    margin-bottom: 16pt;
    @media screen and (max-width: 700px) {
        margin-bottom: 8pt;
    }
`

const WorkHighlights = styled.td`
    ul {
        margin-top: 0pt;
    }
    li {
        margin: 2pt 0pt;
    }
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
            <WorkTable>
                <tbody>
                    {workunits.map(
                        ({ id, company, jobTitle, timeline, highlights }) => (
                            <tr
                                key={id}
                                data-sal="slide-up"
                                data-sal-duration="500"
                                data-sal-easing="ease">
                                <WorkHeader>
                                    <Title>{company}</Title>
                                    <Subtitle>{jobTitle}</Subtitle>
                                    <Subtitle>
                                        {timeline.start.month}{' '}
                                        {timeline.start.year}
                                        &nbsp; &mdash; &nbsp;
                                        {timeline.current
                                            ? 'Present'
                                            : `${timeline.end.month} ${timeline.end.year}`}
                                    </Subtitle>
                                </WorkHeader>
                                <WorkHighlights>
                                    <ul>
                                        {highlights.map((highlight, index) => (
                                            <li key={index}>{highlight}</li>
                                        ))}
                                    </ul>
                                </WorkHighlights>
                            </tr>
                        )
                    )}
                </tbody>
            </WorkTable>
        </section>
    )
}
