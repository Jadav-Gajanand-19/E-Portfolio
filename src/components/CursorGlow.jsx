import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorGlow() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
            setIsVisible(true)
        }

        const handleMouseLeave = () => {
            setIsVisible(false)
        }

        window.addEventListener('mousemove', handleMouseMove)
        document.body.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.body.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <motion.div
            className="fixed pointer-events-none z-30"
            animate={{
                x: position.x - 200,
                y: position.y - 200,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{
                type: 'spring',
                damping: 30,
                stiffness: 200,
                mass: 0.5,
            }}
        >
            <div
                className="w-[400px] h-[400px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 255, 136, 0.08) 0%, rgba(0, 212, 255, 0.04) 30%, transparent 70%)',
                }}
            />
        </motion.div>
    )
}
