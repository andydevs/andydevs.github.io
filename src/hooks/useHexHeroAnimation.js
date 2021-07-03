import { useRef, useEffect } from 'react'
import Two from 'two.js'

export default function useHexHeroAnimation({
    hexcolor = '#0088cc',
    radius = 50,
    spacing = 0.0,
    rotations = 2,
    period = 20,
    transitionTime = 1,
    gridWidth = 2,
    timeRate = 0.017
}) {
    // Generate ref
    const animationRef = useRef()

    // Setup effect
    useEffect(() => {
        // Helper constants
        const tx = 1 + Math.cos(Math.PI / 3)
        const ty = Math.sin(Math.PI / 3)
        const rx = radius * tx
        const ry = radius * ty

        // Get canvas and set width height
        let two = new Two({
            width: animationRef.current.clientWidth,
            height: animationRef.current.clientHeight
        }).appendTo(animationRef.current)
        window.addEventListener('resize', function () {
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
            for (let j = 0, y = 0; y < two.height + radius; y += 2 * ry, ++j) {
                // Init parameters
                yHat = y
                k = 1
                grid[j] = []

                // Go through row
                for (let i = 0, x = 0; x < two.width + radius; x += rx, ++i) {
                    // Create polygon
                    let poly = two.makePolygon(x, yHat, radius, 6)
                    poly.fill = hexcolor
                    poly.linewidth = 0
                    grid[j][i] = poly

                    // Update parameters
                    yHat += k * ry
                    k *= -1
                }
            }

            // Update grid
            two.update()
        }
        setUpGrid()
        two.bind('resize', setUpGrid)

        // Quadratic ease in and out functions
        const square = x => x * x
        const easeIn = x => square(x)
        const easeOut = x => 1 - square(1 - x)

        // Wave patterns for size and rotation
        const low = period / 2 - transitionTime
        const lowHigh = period / 2
        const highLow = period - transitionTime
        const waveSignal = (alpha, odd) =>
            alpha < low
                ? 0
                : alpha < lowHigh
                ? easeOut((alpha - low) / transitionTime)
                : alpha < highLow
                ? 1
                : 1 +
                  (odd ? 1 : -1) * easeIn((alpha - highLow) / transitionTime)

        // Animation loop
        let t = 0.35 * period
        two.bind('update', function update() {
            for (let j = 0; j < grid.length; ++j) {
                for (let i = 0; i < grid[j].length; ++i) {
                    // Get width and height of grid
                    let width = grid[j].length
                    let height = grid.length

                    // Compute alpha parameter
                    let alpha = (gridWidth * (i / width + j / height)) / 2 + t
                    alpha = alpha % period

                    // Set polygon features
                    let polygon = grid[j][i]
                    polygon.scale = (1 - spacing) * waveSignal(alpha, false)
                    polygon.rotation =
                        rotations * 2 * Math.PI * waveSignal(alpha, true)
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
