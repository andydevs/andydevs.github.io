import { useRef, useEffect } from 'react';

export default function use2dAnimation(routine) {
    // Set up animation on ref
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

    // Return mount ref
    return animMountRef
}