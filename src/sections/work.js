import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Title = styled.h3`
    font-weight: 600;
    padding-left: 11pt;
    text-indent: -11pt;
    &:before {
        content: '>';
        margin-right: 4pt;
        color: var(--primary);
    }
`

const Subtitle = styled.h4`
    font-weight: 300;
    color: var(--faded);
    padding-left: 11pt;
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
    margin-bottom: 32pt;
`

const WorkHighlightsList = styled.ul`
    list-style: none;
    margin-top: 0pt;
`

const WorkHighlight = styled.li`
    margin: 2pt 0pt;
    padding-left: 15.5pt;
    text-indent: -15.5pt;
    &:before {
        content: "‒";
        margin-right: 8pt;
        color: var(--secondary);
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
                                        {timeline.start.month} {timeline.start.year}
                                        &nbsp; &mdash; &nbsp;
                                        {timeline.current
                                            ? 'Present'
                                            : `${timeline.end.month} ${timeline.end.year}`}
                                    </Subtitle>
                                </WorkHeader>
                                <WorkHighlights>
                                    <WorkHighlightsList>
                                        {highlights.map((highlight, index) => (
                                            <WorkHighlight key={index}>{highlight}</WorkHighlight>
                                        ))}
                                    </WorkHighlightsList>
                                </WorkHighlights>
                            </tr>
                        )
                    )}
                </tbody>
            </WorkTable>
        </section>
    )
}
