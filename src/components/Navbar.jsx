import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Terminal, User, Briefcase, FolderGit2, Mail, FileText,
    Command, X, Home, Layers, Award, ChevronLeft, ChevronRight,
    Github, Linkedin, Menu
} from 'lucide-react'

const navItems = [
    { id: 'hero', icon: Home, label: 'Home', shortcut: '1' },
    { id: 'about', icon: User, label: 'About', shortcut: '2' },
    { id: 'experience', icon: Briefcase, label: 'Experience', shortcut: '3' },
    { id: 'projects', icon: FolderGit2, label: 'Projects', shortcut: '4' },
    { id: 'contact', icon: Mail, label: 'Contact', shortcut: '5' },
]

export default function Navbar() {
    const [isCommandOpen, setIsCommandOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')
    const [isExpanded, setIsExpanded] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Check for mobile viewport
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault()
                setIsCommandOpen(prev => !prev)
            }
            if (isCommandOpen && e.key >= '1' && e.key <= '5') {
                const item = navItems[parseInt(e.key) - 1]
                if (item) {
                    if (item.id === 'hero') {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    } else {
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                    }
                    setIsCommandOpen(false)
                }
            }
            if (e.key === 'Escape') setIsCommandOpen(false)
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isCommandOpen])

    // Track active section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id || 'hero')
                    }
                })
            },
            { threshold: 0.3 }
        )

        navItems.forEach((item) => {
            const el = item.id === 'hero' ? document.querySelector('section') : document.getElementById(item.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    const scrollTo = (id) => {
        if (id === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            {/* Desktop Right Sidebar Navigation - Hidden on Mobile */}
            <motion.nav
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
                className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:block"
            >
                <div className={`flex flex-col items-end gap-1 p-2 bg-[#0a0a12]/90 backdrop-blur-xl border border-[#1a1a2e] border-r-0 rounded-l-2xl transition-all duration-300 ${isExpanded ? 'pr-4' : ''}`}>

                    {/* Nav Items */}
                    {navItems.map((item, index) => (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${activeSection === item.id
                                ? 'bg-cyber-green/20 text-cyber-green'
                                : 'text-slate-500 hover:text-cyber-green hover:bg-white/5'
                                }`}
                        >
                            {/* Expanded label */}
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.span
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: 'auto' }}
                                        exit={{ opacity: 0, width: 0 }}
                                        className="text-xs font-mono whitespace-nowrap overflow-hidden"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                            <item.icon className="w-5 h-5" />
                        </motion.button>
                    ))}

                    <div className="w-full h-px bg-[#1a1a2e] my-1" />

                    {/* Command Palette */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsCommandOpen(true)}
                        className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:text-cyber-cyan hover:bg-white/5 rounded-xl transition-all"
                    >
                        {isExpanded && (
                            <motion.span
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: 'auto' }}
                                exit={{ opacity: 0, width: 0 }}
                                className="text-xs font-mono whitespace-nowrap overflow-hidden"
                            >
                                ⌘K
                            </motion.span>
                        )}
                        <Command className="w-5 h-5" />
                    </motion.button>

                    {/* Resume */}
                    <a
                        href="/resume.pdf"
                        download="Gajanand_Resume.pdf"
                        className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:text-neon-purple hover:bg-white/5 rounded-xl transition-all"
                    >
                        {isExpanded && (
                            <motion.span
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: 'auto' }}
                                exit={{ opacity: 0, width: 0 }}
                                className="text-xs font-mono whitespace-nowrap overflow-hidden"
                            >
                                Resume
                            </motion.span>
                        )}
                        <FileText className="w-5 h-5" />
                    </a>

                    <div className="w-full h-px bg-[#1a1a2e] my-1" />

                    {/* Social Links */}
                    <a
                        href="https://github.com/Jadav-Gajanand-19"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jadav-gajanand-3aa946290"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                </div>
            </motion.nav>

            {/* Mobile Bottom Navigation */}
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
            >
                <div className="flex items-center justify-around p-2 bg-[#0a0a12]/95 backdrop-blur-xl border-t border-[#1a1a2e]">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all min-w-[60px] ${activeSection === item.id
                                ? 'text-cyber-green'
                                : 'text-slate-500'
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="text-[10px] font-mono">{item.label}</span>
                        </button>
                    ))}
                    <button
                        onClick={() => setIsCommandOpen(true)}
                        className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-slate-500 min-w-[60px]"
                    >
                        <Menu className="w-5 h-5" />
                        <span className="text-[10px] font-mono">Menu</span>
                    </button>
                </div>
            </motion.nav>

            {/* Command Palette Modal */}
            <AnimatePresence>
                {isCommandOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsCommandOpen(false)}
                            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
                        >
                            <div className="mx-4 bg-[#0a0a12] border border-cyber-green/20 rounded-2xl shadow-2xl shadow-cyber-green/10 overflow-hidden">
                                {/* Header */}
                                <div className="flex items-center gap-3 px-5 py-4 border-b border-[#1a1a2e]">
                                    <Terminal className="w-5 h-5 text-cyber-green" />
                                    <span className="text-sm font-mono text-slate-300">Quick Navigation</span>
                                    <button
                                        onClick={() => setIsCommandOpen(false)}
                                        className="ml-auto p-1.5 text-slate-500 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Commands */}
                                <div className="p-3 space-y-1 max-h-[60vh] overflow-y-auto">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                scrollTo(item.id)
                                                setIsCommandOpen(false)
                                            }}
                                            className="flex items-center gap-4 w-full px-4 py-3 text-left rounded-xl hover:bg-cyber-green/10 transition-all group"
                                        >
                                            <div className="w-10 h-10 flex items-center justify-center bg-[#1a1a2e] rounded-lg group-hover:bg-cyber-green/20 transition-all">
                                                <item.icon className="w-5 h-5 text-slate-400 group-hover:text-cyber-green" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-mono text-sm text-slate-200">{item.label}</p>
                                                <p className="text-xs text-slate-500">Jump to section</p>
                                            </div>
                                            <span className="text-xs font-mono text-slate-600 bg-[#1a1a2e] px-2 py-1 rounded hidden sm:block">
                                                {item.shortcut}
                                            </span>
                                        </button>
                                    ))}

                                    <div className="border-t border-[#1a1a2e] my-2" />

                                    <a
                                        href="/resume.pdf"
                                        download="Gajanand_Resume.pdf"
                                        className="flex items-center gap-4 w-full px-4 py-3 text-left rounded-xl hover:bg-neon-purple/10 transition-all group"
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center bg-[#1a1a2e] rounded-lg group-hover:bg-neon-purple/20 transition-all">
                                            <FileText className="w-5 h-5 text-slate-400 group-hover:text-neon-purple" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-mono text-sm text-slate-200">Download Resume</p>
                                            <p className="text-xs text-slate-500">PDF file</p>
                                        </div>
                                    </a>

                                    <a
                                        href="mailto:j.gajanand1123@gmail.com"
                                        className="flex items-center gap-4 w-full px-4 py-3 text-left rounded-xl hover:bg-cyber-cyan/10 transition-all group"
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center bg-[#1a1a2e] rounded-lg group-hover:bg-cyber-cyan/20 transition-all">
                                            <Mail className="w-5 h-5 text-slate-400 group-hover:text-cyber-cyan" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-mono text-sm text-slate-200">Send Email</p>
                                            <p className="text-xs text-slate-500">j.gajanand1123@gmail.com</p>
                                        </div>
                                    </a>

                                    <div className="border-t border-[#1a1a2e] my-2" />

                                    {/* Social links in command palette for mobile */}
                                    <div className="flex gap-2 px-4">
                                        <a
                                            href="https://github.com/Jadav-Gajanand-19"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1a1a2e] hover:bg-white/10 rounded-xl transition-all"
                                        >
                                            <Github className="w-5 h-5 text-slate-400" />
                                            <span className="text-sm text-slate-400">GitHub</span>
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/jadav-gajanand-3aa946290"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1a1a2e] hover:bg-white/10 rounded-xl transition-all"
                                        >
                                            <Linkedin className="w-5 h-5 text-slate-400" />
                                            <span className="text-sm text-slate-400">LinkedIn</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Footer - Hide on mobile */}
                                <div className="px-5 py-3 border-t border-[#1a1a2e] bg-[#0a0a0f] hidden sm:block">
                                    <p className="text-xs font-mono text-slate-600 text-center">
                                        Press <span className="text-slate-400">1-5</span> to navigate • <span className="text-slate-400">ESC</span> to close
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
