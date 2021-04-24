import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "photo description";
    gap: 16pt;
`

const Image = styled.img`
    grid-area: photo;
    border-radius: 8pt;
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
                fluid(maxWidth: 300, base64Width: 300, duotone: { highlight: "#00aaff", shadow: "#000000" }) {
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