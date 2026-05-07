import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Section from '../components/section'
import { PieStencil } from 'reactive-charts'

const degrees = Math.PI / 180

const pieStyle = {
    svg: { width: 900, height: 600 },
    maxCategories: 10,
    categoryCollapse: { label: { text: 'others...', color: '#666', fontStyle: 'italic' }, minAngle: 10 * degrees },
    sliceAngleGap: 1 * degrees,
    sliceMaxRadius: 210,
    sliceThickness: 50,
    sliceCornerRadius: 3,
    labelOffset: 35,
    labelPadding: 4,
    labelHeight: 2
}

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
            <PieStencil style={pieStyle} />
        </Section>
    )
}
