export default function* heroAnimation(canvas, ctx) {
    // Parameters
    let size = 64
    let colors = [
        { r: 0x00, g: 0x00, b: 0x00 },
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

    let cA, cB // Color buffers
    let tilesX, tilesY, scale // Tile buffer
    
    // Main animation loop
    while (true) {
        // Update square tile size
        tilesX = Math.ceil(canvas.width / size)
        tilesY = Math.ceil(canvas.height / size)
        scale = N / (tilesX + tilesY)

        // Fade between colors
        for (let i = 0; i < colors.length; i++) {
            for (let x = -255; x < 255; x++) {

                // Get colors
                cA = colors[i]
                cB = colors[(i + 1) % colors.length]
                
                // Do tile routine
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
                
                // Frame yield
                yield;
            }
        }
    }
}