import { useRef, useEffect } from 'react';
import Two from 'two.js';

export default function useHexHeroAnimation({
        radius=50,
        timeRate=0.01,
        spacing=0.10,
        period=10,
        rotations=5,
        sizePower=2,
        rotationPower=3
}) {
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

        // Initialize Grid
        let grid = []
        function setUpGrid() {
            // Clear current space and grid
            two.clear()
            grid = []

            // Row parameters
            let yHat, k
            for (let j = 0, y = 0; y < two.height + radius; y += 2*ry, ++j) {
                // Init parameters
                yHat = y
                k = 1
                grid[j] = []

                // Go through row
                for (let i = 0, x = 0; x < two.width + radius; x += rx, ++i) {
                    // Create polygon
                    let poly = two.makePolygon(x, yHat, radius, 6)
                    poly.fill = '#00aaff'
                    poly.linewidth = 0
                    grid[j][i] = poly

                    // Update parameters
                    yHat += k*ry
                    k *= -1
                }
            }

            // Update grid
            two.update()
        }
        setUpGrid()
        two.bind('resize', setUpGrid)

        // Ease in and out functions
        // Credit to: https://easings.net
        // Created by: Andrey Sitnik and Ivan Solovev
        const easeIn = (x, p=2) => Math.pow(x, p)
        const easeOut = (x, p=2) => 1 - Math.pow(1 - x, p)

        // Wave patterns for size and rotation
        const sizeSignal = time => {
            let m = 4 * (time % period) / period
            return m < 1 ? 0                        // Waiting
                : m < 2 ? easeOut(m % 1, sizePower) // Rising
                : m < 3 ? 1                         // Sustaining
                : 1 - easeIn(m % 1, sizePower)      // Falling
        }
        const rotationSignal = time => {
            let m = 4 * (time % period) / period
            return m < 1 ? 0                            // Waiting
                : m < 2 ? easeOut(m % 1, rotationPower) // Rising
                : m < 3 ? 1                             // Sustaining
                : 1 + easeIn(m % 1, rotationPower)      // Falling
        }

        // Animation loop
        let t = 0
        two.bind('update', function update() {
            for (let j = 0; j < grid.length; ++j) {
                for (let i = 0; i < grid[j].length; ++i) {
                    // Get width and height of grid
                    let width = grid[j].length
                    let height = grid.length

                    // Compute alpha parameter
                    let alpha = (i/width + j/height)/2

                    // Set polygon features
                    let polygon = grid[j][i]
                    polygon.scale = (1 - spacing)*sizeSignal(alpha + t)
                    polygon.rotation = rotations*Math.PI*rotationSignal(alpha + t)
                }
            }

            // Update time
            t += timeRate
        })

        // Play two instance
        two.play()
    }, [])

    // Return animation
    return animationRef
}