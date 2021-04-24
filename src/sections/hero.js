import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

const HeroDiv = styled.div`
    position: relative;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    place-items: center;
    overflow: hidden;
`

const HeroContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
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

export default function Hero() {
    const animMountRef = useRef();

    // ---------------------------------- ANIMATION ----------------------------------

    useEffect(() => {
        // Parameters
        let size = 64
        let colors = [
            { r: 0x33, g: 0x33, b: 0x33 },
            { r: 0x00, g: 0xaa, b: 0xff }
        ]

        // Color function
        const N = 256
        const clamp = i =>
            Math.max(0, Math.min(i, N))
        const lerp = (a, b, i) => 
            Math.floor((b*i + a*(N - i))/N)
        const clerp = (a, b, i) => ({
            r: lerp(a.r, b.r, i),
            g: lerp(a.g, b.g, i),
            b: lerp(a.b, b.b, i)
        })
        const rgb = c => `rgb(${c.r}, ${c.g}, ${c.b})`

        // Animate generator routine
        function animateRoutine(routine) {
            let coroutine = routine()
            function anim() {
                if (coroutine.next()) {
                    requestAnimationFrame(anim)
                }
            }
            requestAnimationFrame(anim)
        }

        // Canvas
        let tilesElem = animMountRef.current
        console.log(tilesElem)
        let canvas = document.getElementById('#tiles-canvas')
        console.log(canvas)
        if (canvas == null) {
            canvas = document.createElement('canvas')
            canvas.id = '#tiles-canvas'
            tilesElem.appendChild(canvas)
        }
        let ctx = canvas.getContext('2d')

        // Window sizing
        canvas.width = tilesElem.offsetWidth
        canvas.height = tilesElem.offsetHeight
        window.addEventListener('resize', function() {
            canvas.width = tilesElem.offsetWidth
            canvas.height = tilesElem.offsetHeight    
        })

        // Square tiling
        let tilesX, tilesY, scale
        tilesX = Math.ceil(canvas.width / size)
        tilesY = Math.ceil(canvas.height / size)
        scale = N / (tilesX + tilesY)
        window.addEventListener('resize', function() {
            tilesX = Math.ceil(canvas.width / size)
            tilesY = Math.ceil(canvas.height / size)
            scale = N / (tilesX + tilesY)
        })

        /**
         * Tile function
         */
        function tile(cA, cB, x) {
            let r, cl
            for (let j = 0; j < tilesY; j++) {
                for (let i = 0; i < tilesX; i++) {
                    // Get color
                    r = clamp((i + j)*scale + x)
                    cl = clerp(cA, cB, r)
                    
                    // Fill tile
                    ctx.fillStyle = rgb(cl)
                    ctx.fillRect(size*i, size*j, size, size)
                }
            }
        }

        // Call animate routine with coroutine
        animateRoutine(function* routine() {
            let cA, cB
            while (true) {
                for (let i = 0; i < colors.length; i++) {
                    for (let x = -255; x < 255; x++) {
                        cA = colors[i]
                        cB = colors[(i + 1) % colors.length]
                        tile(cA, cB, x);
                        yield;
                    }
                }
            }
        })

    }, [])

    // -------------------------------------------------------------------------------

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