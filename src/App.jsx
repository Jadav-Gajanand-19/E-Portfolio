import { useState, useEffect } from 'react'
import MatrixRain from './components/MatrixRain'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import Experience from './components/Experience'
import Services from './components/Services'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import StatusBar from './components/StatusBar'

function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [bootText, setBootText] = useState('')

    useEffect(() => {
        // Boot sequence simulation with typing
        const bootMessages = [
            '> booting neural_os v2.0...',
            '> loading modules...',
            '> initializing gajanand.ai...',
            '> system ready.'
        ]

        let messageIndex = 0
        let charIndex = 0

        const typeInterval = setInterval(() => {
            if (messageIndex < bootMessages.length) {
                const currentMessage = bootMessages[messageIndex]
                if (charIndex < currentMessage.length) {
                    setBootText(prev => prev + currentMessage[charIndex])
                    charIndex++
                } else {
                    setBootText(prev => prev + '\n')
                    messageIndex++
                    charIndex = 0
                }
            } else {
                clearInterval(typeInterval)
                setTimeout(() => setIsLoaded(true), 300)
            }
        }, 30)

        return () => clearInterval(typeInterval)
    }, [])

    return (
        <div className="min-h-screen bg-deep-black text-slate-300 overflow-x-hidden">
            {/* Matrix code rain background */}
            <MatrixRain />

            {/* Cursor glow effect */}
            <CursorGlow />

            {/* Grid pattern overlay */}
            <div className="fixed inset-0 grid-pattern pointer-events-none opacity-40" />

            {/* Radial gradient overlays */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyber-green/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyber-cyan/5 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/3 rounded-full blur-[150px]" />
            </div>

            {/* Boot screen */}
            {!isLoaded && (
                <div className="fixed inset-0 z-50 bg-deep-black flex items-center justify-center">
                    <div className="max-w-md w-full mx-4">
                        <div className="window-card-glow">
                            <div className="window-titlebar">
                                <div className="window-dot bg-cyber-green" />
                                <span className="ml-2 text-xs text-slate-500 font-mono">boot.sh</span>
                            </div>
                            <div className="p-6">
                                <pre className="font-mono text-sm text-cyber-green whitespace-pre-wrap">
                                    {bootText}
                                    <span className="inline-block w-2 h-4 bg-cyber-green ml-0.5 animate-pulse" />
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main content */}
            <div className={`relative z-10 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <Navbar />
                <main className="pb-24 md:pb-32">
                    <Hero />
                    <BentoGrid />
                    <Services />
                    <Experience />
                    <Projects />
                    <Certifications />
                    <Contact />
                </main>
                <StatusBar />
            </div>
        </div>
    )
}

export default App
