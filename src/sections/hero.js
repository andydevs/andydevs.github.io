import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Banner from '../assets/graphics/banner.svg'

const HeroDiv = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
`

const HeroContainer = styled.div`
    position: absolute;
    display: block;
    width: 100%;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    max-width: 1200px;
`

const HeroBanner = styled(Banner)`
    width: 100%;
    max-width: 1200px;
`

export default function Hero() {
    return (
        <HeroDiv>
            <HeroContainer>
                <HeroBanner
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-easing="ease"/>
            </HeroContainer>
        </HeroDiv>
    )
}
