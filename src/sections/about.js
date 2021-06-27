import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
    max-width: 400px;

    @media screen and (max-width: 700px) {
        width: 70%;
    }
`

const Description = styled.div`
    grid-area: description;
    font-size: 18pt;
`

const Blurb = styled.p`
    display: block;
    margin: 16pt 0pt;
`

const StyledLink = styled.a`
    /* Remove content */
    &:before { content: ''; }

    /* Alignment */
    display: inline-flex;
    align-items: center;

    /* Spacing */
    margin: 16pt 0pt;
    padding: 8pt;
    
    /* Coloring */
    border: 2pt solid var(--blue);
    border-radius: 8pt;
    color: white;

    /* Background */
    background: linear-gradient(45deg,
        var(--black),
        var(--black) 50%,
        var(--blue) 50%,
        var(--blue) 100%);
    background-size: 300%;
    background-position: 0% 0%;

    /* Transition */
    transition: 0.5s ease-in-out;
    &:hover, &:focus {
        background-position: 100% 0%;
    }

    .icon {
        font-size: 20pt;
        margin-right: 8pt;
    }
`

export default function About() {
    // Query
    const { 
        contentYaml: { 
            blurb,
            contact: {
                github
            }
        },
        imageSharp: { fluid: { base64: profile } }
    } = useStaticQuery(graphql`
        query AboutQuery {
            contentYaml {
                blurb,
                contact {
                    github
                }
            }
            imageSharp(fluid: {originalName: {eq: "profile.jpg"}}) {
                fluid(base64Width: 800, duotone: { highlight: "#00aaff", shadow: "#000000" }) {
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
                    <Blurb>{blurb}</Blurb>
                    <StyledLink href={`https://github.com/${github}`}>
                        <FontAwesomeIcon className='icon' icon={faGithub}/>
                        <span>Check out My GitHub</span>
                    </StyledLink>
                </Description>
            </Grid>
        </section>
    )
}