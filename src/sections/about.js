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

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`

const Description = styled.div`
    grid-area: description;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        "blurb blurb"
        "education skills";
`

const Blurb = styled.p`
    grid-area: blurb;
`


export default function About() {
    // Query
    const { 
        contentYaml: { blurb },
        imageSharp: { fluid: { base64: profile } }
    } = useStaticQuery(graphql`
        query AboutQuery {
            contentYaml {
                blurb
            }
            imageSharp(fluid: {originalName: {eq: "profile.jpg"}}) {
                fluid(base64Width: 400, duotone: { highlight: "#00aaff", shadow: "#000000" }) {
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
                </Description>
            </Grid>
        </section>
    )
}