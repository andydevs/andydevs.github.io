import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

export default function About() {
    // Query
    const { contentYaml: { blurb } } = useStaticQuery(graphql`
        query AboutQuery {
            contentYaml {
                blurb
            }
        }
    `)
    
    return (
        <section id="about">
            <h1>About</h1>
            <p>{blurb}</p>
        </section>
    )
}