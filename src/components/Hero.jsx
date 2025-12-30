import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Cpu, Zap, Code2 } from 'lucide-react'

export default function Hero() {
    const [glitchText, setGlitchText] = useState(false)

    // Random glitch effect
    useEffect(() => {
        const glitchInterval = setInterval(() => {
            setGlitchText(true)
            setTimeout(() => setGlitchText(false), 100)
        }, 5000)
        return () => clearInterval(glitchInterval)
    }, [])

    return (
        <section className="min-h-screen flex items-center justify-center pt-16 pb-24 px-4">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left side - Terminal with Profile */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="window-card-glow">
                            {/* Window title bar */}
                            <div className="window-titlebar">
                                <div className="window-dot bg-red-500/80" />
                                <div className="window-dot bg-yellow-500/80" />
                                <div className="window-dot bg-green-500/80" />
                                <span className="ml-3 text-xs text-slate-500 font-mono">profile.sh</span>
                                <div className="ml-auto flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
                                    <span className="text-xs text-cyber-green/70 font-mono">live</span>
                                </div>
                            </div>

                            {/* Terminal content with profile image */}
                            <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                                {/* Profile Image */}
                                <div className="relative shrink-0">
                                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-cyber-green/30 bg-[#0f0f18]">
                                        <img
                                            src="/profile.jpg"
                                            alt="Gajanand"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                // Fallback to initials if image not found
                                                e.target.style.display = 'none'
                                                e.target.nextSibling.style.display = 'flex'
                                            }}
                                        />
                                        <div className="hidden w-full h-full items-center justify-center text-cyber-green text-2xl font-bold">
                                            GJ
                                        </div>
                                    </div>
                                    {/* Status indicator */}
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-cyber-green rounded-full border-2 border-deep-black flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
                                    </div>
                                </div>

                                {/* Name and Title */}
                                <div className="flex-1 w-full min-w-0 flex flex-col items-center sm:items-start overflow-hidden">
                                    <div className="w-full flex justify-center sm:justify-start">
                                        <pre className="text-cyber-green text-[6px] xs:text-[7px] sm:text-[9px] leading-tight select-none overflow-x-auto max-w-full">
                                            {`██████╗  █████╗      ██╗ █████╗ ███╗   ██╗ █████╗ ███╗   ██╗██████╗ 
██╔════╝ ██╔══██╗     ██║██╔══██╗████╗  ██║██╔══██╗████╗  ██║██╔══██╗
██║  ███╗███████║     ██║███████║██╔██╗ ██║███████║██╔██╗ ██║██║  ██║
██║   ██║██╔══██║██   ██║██╔══██║██║╚██╗██║██╔══██║██║╚██╗██║██║  ██║
╚██████╔╝██║  ██║╚█████╔╝██║  ██║██║ ╚████║██║  ██║██║ ╚████║██████╔╝
 ╚═════╝ ╚═╝  ╚═╝ ╚════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝`}
                                        </pre>
                                    </div>
                                    <p className="text-slate-500 text-[10px] sm:text-xs mt-3 font-mono text-center sm:text-left">AI Engineer • Full-Stack Developer</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick stats below terminal */}
                        <div className="grid grid-cols-3 gap-3 mt-4">
                            {[
                                { icon: Code2, label: 'Projects', value: '14+' },
                                { icon: Cpu, label: 'Internships', value: '3+' },
                                { icon: Zap, label: 'Certs', value: '5+' },
                            ].map((stat) => (
                                <div key={stat.label} className="flex items-center gap-2 px-3 py-2 bg-[#0f0f18] border border-[#1a1a2e] rounded-lg">
                                    <stat.icon className="w-4 h-4 text-cyber-green" />
                                    <div>
                                        <p className="text-xs text-slate-500">{stat.label}</p>
                                        <p className="text-sm font-bold text-slate-200">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right side - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="order-1 lg:order-2 text-center lg:text-left"
                    >
                        <motion.p
                            className="text-cyber-green font-mono text-sm mb-4 inline-block"
                            animate={{ opacity: glitchText ? 0.5 : 1 }}
                        >
                            &gt; system.initialize()
                        </motion.p>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span className="text-slate-100">Building</span>
                            <br />
                            <motion.span
                                className="text-gradient-cyber inline-block"
                                animate={{
                                    x: glitchText ? [0, -2, 2, 0] : 0,
                                    opacity: glitchText ? [1, 0.8, 1] : 1
                                }}
                                transition={{ duration: 0.1 }}
                            >
                                Intelligent
                            </motion.span>
                            <br />
                            <span className="text-slate-100">Systems</span>
                        </h1>

                        <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                            Pre-final year B.Tech AI student crafting{' '}
                            <span className="text-cyber-green">production-ready AI systems</span>,{' '}
                            <span className="text-cyber-cyan">intelligent agents</span>, and{' '}
                            <span className="text-neon-purple">scalable software</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#projects" className="btn-cyber-filled flex items-center justify-center gap-2 group">
                                <span>explore_projects</span>
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#contact" className="btn-cyber flex items-center justify-center gap-2">
                                <span>init_contact</span>
                            </a>
                        </div>

                        {/* Keyboard hint */}
                        <p className="mt-8 text-xs font-mono text-slate-600">
                            Press <span className="text-slate-400 bg-[#1a1a2e] px-1.5 py-0.5 rounded">⌘K</span> for command palette
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
