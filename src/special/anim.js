import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { primary, secondary } from '../styling'

function animationSetup(ctx, env) {
    
}

function animationLoop(ctx, env) {
    
}

const AnimContainer = styled.canvas`
    position: absolute;
    z-index: -1;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    border: none;
`

export default function Animation(props) {
    
    // Animation
    let canvasRef = useRef()
    useEffect(() => {
        // Canvas
        let env = {}
        let ctx = canvasRef.current.getContext('2d')
        ctx.canvas.width = ctx.canvas.clientWidth
        ctx.canvas.height = ctx.canvas.clientHeight

        // Setup
        animationSetup(ctx, env)
        
        // Periodically
        let loop = () => {
            animationLoop(ctx, env)
            requestAnimationFrame(loop)
        }
        requestAnimationFrame(loop)
    }, [])

    // Return container
    return <AnimContainer ref={canvasRef}/>
}