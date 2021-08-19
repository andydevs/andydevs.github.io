import React from 'react'
import styled from 'styled-components'
import Banner from '../assets/graphics/banner.svg'

const HeroDiv = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
`

const HeroBannerContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 10%;
    @media screen and (max-width: 1400px) {
        right: 0%;
    }
    transform: translateY(-50%);
    text-align: right;
    height: 100%;
    width: 100%;
`

const HeroBanner = styled(Banner)`
    width: 100%;
    text-align: right;
    max-height: 100%;
    max-width: 1280px;
`

export default function Hero() {
    return (
        <HeroDiv>
            <HeroBannerContainer>
                <HeroBanner
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-easing="ease"/>
            </HeroBannerContainer>
        </HeroDiv>
    )
}
