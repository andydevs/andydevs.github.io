import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "photo description";
    gap: 16pt;

    @media screen and (max-width: 900px) {
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        grid-template-areas:
            "photo"
            "description";
        place-items: center;
    }
`

const Image = styled.img`
    grid-area: photo;

    // Styling
    border-radius: 8pt;
    -webkit-box-shadow: 4px 4px 21px -6px rgba(0,0,0,0.37);
    -moz-box-shadow: 4px 4px 21px -6px rgba(0,0,0,0.37);
    box-shadow: 4px 4px 21px -6px rgba(0,0,0,0.37);

    max-width: 300px;

    @media screen and (max-width: 700px) {
        width: 70%;
    }
`

const Description = styled.div`
    grid-area: description;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
        "blurb blurb"
        "education skills";

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, auto);
        grid-template-areas:
            "blurb"
            "education"
            "skills";
    }
`

const SubsectionTitle = styled.h3`
    padding-bottom: 8pt;
    border-bottom: 1pt solid;
`

const Blurb = styled.p`
    grid-area: blurb;
`

const Education = styled.div`
    margin: 0pt 8pt;
    grid-area: education;
`

const Skills = styled.div`
    margin: 0pt 8pt;
    grid-area: skills;
`


export default function About() {
    // Query
    const { 
        contentYaml: { 
            blurb,
            education: {
                school,
                degree,
                graduated,
                GPA
            },
            skills
        },
        imageSharp: { fluid: { base64: profile } }
    } = useStaticQuery(graphql`
        query AboutQuery {
            contentYaml {
                blurb,
                education {
                    school,
                    degree,
                    graduated {
                        month,
                        year
                    },
                    GPA
                },
                skills
            }
            imageSharp(fluid: {originalName: {eq: "profile.jpg"}}) {
                fluid(base64Width: 600, duotone: { highlight: "#00aaff", shadow: "#000000" }) {
                    base64
                }
            }
        }
    `)
    
    return (
        <section id="about">
            <h1>About</h1>
            <Grid>
                <Image alt="Profile" src={profile}/>
                <Description>
                    <Blurb>{blurb}</Blurb>
                    <Education>
                        <SubsectionTitle>Education</SubsectionTitle>
                        <p>{ school }</p>
                        <p>{ degree }</p>
                        <p>Graduated { graduated.month } { graduated.year }</p>
                        <p>Cumulative GPA: { GPA }</p>
                    </Education>
                    <Skills>
                        <SubsectionTitle>Skills</SubsectionTitle>
                        <ul>
                            {skills.map((skill, index) => 
                                <li key={index}>{skill}</li>)}
                        </ul>
                    </Skills>
                </Description>
            </Grid>
        </section>
    )
}