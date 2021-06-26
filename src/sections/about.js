import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "photo description";
    place-items: center;
    gap: 16pt;

    @media screen and (max-width: 900px) {
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        grid-template-areas:
            "photo"
            "description";
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
    font-size: 18pt;
`

export default function About() {
    // Query
    const { 
        contentYaml: { 
            blurb
        },
        imageSharp: { fluid: { base64: profile } }
    } = useStaticQuery(graphql`
        query AboutQuery {
            contentYaml {
                blurb
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
            <h1>About Me</h1>
            <Grid>
                <Image alt="Profile" src={profile}/>
                <Description>
                    <p>{blurb}</p>
                </Description>
            </Grid>
        </section>
    )
}