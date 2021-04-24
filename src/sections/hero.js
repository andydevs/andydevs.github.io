import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import heroAnimation from '../assets/hero-animation';

const HeroDiv = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
`

const HeroContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
`

const Title = styled.h1`
    margin: 0;
    padding-bottom: 0;
    font-size: 44pt;
    color: var(--white);
    &:before { content:''; }
`

const Subtitle = styled.h2`
    margin: 0;
    font-size: 18pt;
    text-align: left;
    color: var(--white);
`

const WhiteA = styled.a`
    color: var(--white);
`

function useAnimation(routine) {
    const animMountRef = useRef();

    useEffect(() => {
        // If canvas exists remove it
        let canvas = document.getElementById('#tiles-canvas')
        if (canvas) { canvas.remove(); }

        // Create new canvas and attach it to ref
        canvas = document.createElement('canvas')
        canvas.id = '#tiles-canvas'
        animMountRef.current.appendChild(canvas)
        let ctx = canvas.getContext('2d')

        // Make sure canvas is the same size as ref
        canvas.width = animMountRef.current.offsetWidth
        canvas.height = animMountRef.current.offsetHeight
        window.addEventListener('resize', function() {
            canvas.width = animMountRef.current.offsetWidth
            canvas.height = animMountRef.current.offsetHeight    
        })

        // Animate generator routine
        let coroutine = routine(canvas, ctx)
        function anim() {
            if (coroutine.next()) {
                requestAnimationFrame(anim)
            }
        }
        requestAnimationFrame(anim)
    }, [])

    return animMountRef
}

export default function Hero() {
    const animMountRef = useAnimation(heroAnimation);

    // Render
    return (
        <HeroDiv ref={animMountRef}>
            <HeroContainer>
                <Title>Anshul Kharbanda</Title>
                <Subtitle>Andydevs</Subtitle>
                <p>If you're looking for the 
                    old blog, you can find it 
                    <WhiteA href="https://andydevs.github.io/">Here</WhiteA></p>
            </HeroContainer>
        </HeroDiv>
    )
}