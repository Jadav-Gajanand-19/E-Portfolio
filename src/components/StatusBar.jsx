import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Wifi, Battery, FileText } from 'lucide-react'

export default function StatusBar() {
    const [time, setTime] = useState(new Date())
    const [uptime, setUptime] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
            setUptime(prev => prev + 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const formatUptime = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}m ${secs}s`
    }

    return (
        <footer className="fixed bottom-0 left-0 right-0 z-40 bg-panel-bg/95 backdrop-blur-md border-t border-panel-border hidden md:block">
            <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between text-xs font-mono">
                {/* Left side */}
                <div className="flex items-center gap-4">
                    <span className="text-cyber-green flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
                        ONLINE
                    </span>
                    <span className="text-slate-500 hidden sm:block">
                        uptime: {formatUptime(uptime)}
                    </span>
                </div>

                {/* Center - Links */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/Jadav-Gajanand-19"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-500 hover:text-cyber-green transition-colors"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jadav-gajanand-3aa946290"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-500 hover:text-cyber-cyan transition-colors"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                        href="mailto:j.gajanand1123@gmail.com"
                        className="p-1.5 text-slate-500 hover:text-neon-purple transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                    </a>
                    <span className="w-px h-4 bg-panel-border" />
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="flex items-center gap-1 text-slate-500 hover:text-cyber-green transition-colors"
                    >
                        <FileText className="w-4 h-4" />
                        <span className="hidden sm:inline">resume.pdf</span>
                    </a>
                </div>

                {/* Right side - System info */}
                <div className="flex items-center gap-4 text-slate-500">
                    <span className="hidden sm:flex items-center gap-1">
                        <Wifi className="w-3 h-3 text-cyber-green" />
                        connected
                    </span>
                    <span className="hidden sm:flex items-center gap-1">
                        <Battery className="w-3 h-3 text-cyber-green" />
                        100%
                    </span>
                    <span className="text-slate-400">
                        {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                </div>
            </div>

            {/* Copyright - subtle */}
            <div className="text-center py-2 text-xs text-slate-600 font-mono border-t border-panel-border/50">
                © {new Date().getFullYear()} Jadav Gajanand • Built with React + Tailwind • <span className="text-cyber-green">Neural OS v2.0</span>
            </div>
        </footer>
    )
}
