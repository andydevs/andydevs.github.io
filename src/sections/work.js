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

const WorkunitTable = styled.table`
    border-spacing: 16pt;
    td {
        vertical-align: top;
        display: table-cell;
    }

    @media screen and (max-width: 800px) {
        border-spacing: 0pt 16pt;
        td {
            display: block;
        }
    }
`

const TitleCell = styled.td`
    width: fit-content;
    * { margin: 4pt 0; }
`

const HighlightCell = styled.td`
    ul {
        margin-top: 0;
    }
    ul > li {
        margin: 4pt 0;
    }
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
            <WorkunitTable>
                <tbody>
                    {workunits.map(
                        ({ id, company, jobTitle, timeline, highlights }) => (
                            <tr key={id}>
                                <TitleCell>
                                    <Title>{company}</Title>
                                    <Subtitle>{jobTitle}</Subtitle>
                                    <Subtitle>
                                        {timeline.start.month} {timeline.start.year}
                                        &nbsp; &mdash; &nbsp;
                                        {timeline.current
                                            ? 'Present'
                                            : `${timeline.end.month} ${timeline.end.year}`}
                                    </Subtitle>
                                </TitleCell>
                                <HighlightCell>
                                    <ul>
                                        {highlights.map((highlight, index) => (
                                            <li key={index}>{highlight}</li>
                                        ))}
                                    </ul>
                                </HighlightCell>
                            </tr>
                        )
                    )}
                </tbody>
            </WorkunitTable>
        </section>
    )
}
