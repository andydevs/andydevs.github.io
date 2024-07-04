import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { format } from 'date-fns'
import styled from 'styled-components'
import Section from '../components/section'
import { Remark } from 'react-remark'

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
        content: '‒';
        margin-right: 8pt;
        color: var(--secondary);
    }
`

export default function Work() {
    // Query
    const work = useStaticQuery(graphql`
        query WorkQuery {
            allContentfulWorkExperience(sort: {endDate: DESC}) {
                nodes {
                    id
                    companyName
                    jobTitle
                    details {
                        details
                    }
                    startDate
                    endDate
                    currentlyWorking
                }
            }
        }
    `)

    // Render
    return (
        <Section id="work-experience">
            <h1
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-easing="ease"
            >
                Where I've Worked
            </h1>
            <WorkTable>
                <tbody>
                    {work.allContentfulWorkExperience.nodes.map(
                        ({ id, companyName, jobTitle, details, startDate, endDate, currentlyWorking }) => {
                            let start = new Date(startDate)
                            let end = endDate && new Date(endDate)
                            let datefmt = 'MMMM yyyy'
                            return (
                                <tr
                                    key={id}
                                    data-sal="slide-up"
                                    data-sal-duration="500"
                                    data-sal-easing="ease"
                                >
                                    <WorkHeader>
                                        <Title>{companyName}</Title>
                                        <Subtitle>{jobTitle}</Subtitle>
                                        <Subtitle>
                                            {format(start, datefmt)}
                                            &nbsp; &mdash; &nbsp;
                                            {currentlyWorking ? 'Present' : format(end, datefmt)}
                                        </Subtitle>
                                    </WorkHeader>
                                    <WorkHighlights>
                                        <Remark
                                            rehypeReactOptions={{
                                                components: {
                                                    ul: (props) => <WorkHighlightsList {...props}/>,
                                                    li: (props) => <WorkHighlight {...props}/>
                                                }
                                            }}>
                                            {details.details}
                                        </Remark>
                                    </WorkHighlights>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </WorkTable>
        </Section>
    )
}
