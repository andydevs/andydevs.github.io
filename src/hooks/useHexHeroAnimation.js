import { useRef, useEffect } from 'react';
import Two from 'two.js';

export default function useHexHeroAnimation(radius=50, timeRate=0.01, preAlpha=0.90) {
    // Generate ref
    const animationRef = useRef()

    // Setup effect
    useEffect(() => {
        // Helper constants
        const tx = (1 + Math.cos(Math.PI/3))
        const ty = Math.sin(Math.PI/3)
        const rx = radius*tx
        const ry = radius*ty

        // Get canvas and set width height
        let two = new Two({
            width: animationRef.current.clientWidth,
            height: animationRef.current.clientHeight
        }).appendTo(animationRef.current)
        window.addEventListener('resize', function() {
            two.width = animationRef.current.clientWidth
            two.height = animationRef.current.clientHeight
        })

        // Ease in and out functions
        // Credit to: https://easings.net
        // Created by: Andrey Sitnik and Ivan Solovev
        const easeIn = (x, p=2) => Math.pow(x, p)
        const easeOut = (x, p=2) => 1 - Math.pow(1 - x, p)

        // Size signal power
        const sizeSignalPower = 2
        const rotationSignalPower = 3
        const signalPeriod = 10

        // Wave patterns for size and rotation
        const sizeSignal = (time, period) => {
            // Get path location in period 
            // (broken into 4 sections)
            let m = 4 * (time % period) / period
            if (m < 1) { // Waiting
                return 0
            }
            else if (m < 2) { // Rising
                return easeOut(m % 1, sizeSignalPower)
            }
            else if (m < 3) { // Sustaining
                return 1
            }
            else { // Falling
                return 1 - easeIn(m % 1, sizeSignalPower)
            }
        }
        const rotationSignal = (time, period) => {
            // Get path location in period 
            // (broken into 4 sections)
            let m = 4 * (time % period) / period
            if (m < 1) { // Waiting
                return 0
            }
            else if (m < 2) { // Rising
                return easeOut(m % 1, rotationSignalPower)
            }
            else if (m < 3) { // Sustaining
                return 1
            }
            else { // Falling
                return 1 + easeIn(m % 1, rotationSignalPower)
            }
        }

        // Animation loop
        let t = 0
        two.bind('update', function update() {
            two.clear()

            // Row parameters
            let r, j
            for (let y = 0; y < two.height + radius; y += 2*ry) {
                // Init parameters
                r = y
                j = 1

                // Go through row
                for (let x = 0; x < two.width + radius; x += rx) {
                    // Calculate alpha parameter
                    let a = (y/two.height + x/two.width)/2

                    // Calculate size and rotation
                    let scale = preAlpha*sizeSignal(a + t, signalPeriod)
                    let rotation = 2*Math.PI*rotationSignal(a + t, signalPeriod)

                    // Create polygon
                    let poly = two.makePolygon(x, r, radius, 6)
                    poly.scale = scale
                    poly.rotation = rotation
                    poly.fill = '#00aaff'
                    poly.linewidth = 0

                    // Update parameters
                    r += j*ry
                    j *= -1
                }
            }

            // Increment time
            t += timeRate
        })
        two.play()
    }, [])

    // Return animation
    return animationRef
}