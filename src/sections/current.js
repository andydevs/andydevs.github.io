import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Section from '../components/section'
import { PieStencil } from 'reactive-charts/src/PieChart'

export default function Current() {
    return (
        <Section id="current">
            <h1
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="500"
                data-sal-easing="ease"
            >
                What I've Been Doing
            </h1>
            <PieStencil />
        </Section>
    )
}
