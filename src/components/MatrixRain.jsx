import { useEffect, useRef } from 'react'

export default function MatrixRain() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        // Set canvas size
        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Characters to use
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()アイウエオカキクケコサシスセソ'
        const charArray = chars.split('')

        const fontSize = 14
        const columns = Math.floor(canvas.width / fontSize)

        // Array to track the y position of each column
        const drops = Array(columns).fill(1)

        // Draw function
        const draw = () => {
            // Semi-transparent black to create fade effect
            ctx.fillStyle = 'rgba(10, 10, 15, 0.05)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Green text
            ctx.fillStyle = '#00ff8830'
            ctx.font = `${fontSize}px JetBrains Mono, monospace`

            for (let i = 0; i < drops.length; i++) {
                // Random character
                const char = charArray[Math.floor(Math.random() * charArray.length)]

                // Draw the character
                ctx.fillText(char, i * fontSize, drops[i] * fontSize)

                // Reset drop to top randomly after it reaches bottom
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0
                }

                drops[i]++
            }
        }

        // Animation loop
        const interval = setInterval(draw, 50)

        return () => {
            clearInterval(interval)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none opacity-40"
            style={{ zIndex: 0 }}
        />
    )
}
