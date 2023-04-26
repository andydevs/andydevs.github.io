import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/graphics/logo-banner.svg'
import fracDsk from '../assets/images/fractal-desktop.png'
import fracMob from '../assets/images/fractal-mobile.png'

const HeroBackground = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`

const HeroImageContainer = styled.div`
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
`

const HeroImage = styled.img`
    position: absolute;
    z-index: -1;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;

    // Responsive
    width: 100%;
    @media screen and (max-width: 1920px) {
        width: auto;
        height: 100%;
    }
    @media screen and (max-width: 1080px) {
        width: 100%;
        height: auto;
        filter: blur(5px);
    }
    @media screen and (max-width: 520px) {
        height: 100%;
        width: auto;
    }
`

const HeroHeaderContainer = styled.div`
    position: absolute;
    bottom: 2%;
    right: 2%;
    text-align: left;
    padding: 0pt 16pt;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;

    @media screen and (max-width: 1080px) {
        bottom: 50%;
        right: 50%;
        transform: translate(50%, 50%);
        flex-direction: column;
        align-items: center;
    }
`

const HeroLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 150px;
    @media screen and (max-width: 1400px) {
        height: 100px;
        width: 100px;
    }
    @media screen and (max-width: 1080px) {
        height: 150px;
        width: 150px;
    }
`

const HeroText = styled.div`
    @media screen and (max-width: 1080px) {
        text-align: center;
    }
`

const HeroTitle = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 50pt;
    margin-bottom: -8pt;
    @media screen and (max-width: 1400px) {
        font-size: 46pt;
        margin-bottom: -6pt;
    }
    @media screen and (max-width: 1080px) {
        font-size: 40pt;
        margin-bottom: 10pt;
    }
    &:before {
        content: '';
    }
`

const HeroSubtitle = styled.h2`
    margin: 0;
    font-size: 30pt;
    font-weight: 300 !important;
    color: var(--faded);
    margin-top: -8pt;
    @media screen and (max-width: 1400px) {
        font-size: 20pt;
        margin-top: -6pt;
    }
    &:before {
        content: '';
    }
`

export default function Hero() {
    let [onMobile, setOnMobile] = useState(false);
    useEffect(() => {
        let resize = () => {
            let om = window.matchMedia('(max-width: 1080px)').matches
            console.log(om)
            setOnMobile(om)
        }
        window.addEventListener('resize', resize)
        resize()
    })

    return (
        <HeroBackground>
            <HeroImageContainer>
                <HeroImage src={onMobile ? fracMob : fracDsk}/>
            </HeroImageContainer>
            <HeroHeaderContainer>
                <HeroText>
                    <HeroTitle
                        data-sal="slide-up"
                        data-sal-duration="500"
                        data-sal-easing="ease"
                        data-sal-delay="200">
                        Anshul Kharbanda
                    </HeroTitle>
                    <HeroSubtitle
                        data-sal="slide-up"
                        data-sal-duration="500"
                        data-sal-easing="ease"
                        data-sal-delay="300">
                        andydevs
                    </HeroSubtitle>
                </HeroText>
            </HeroHeaderContainer>
        </HeroBackground>
    )
}
