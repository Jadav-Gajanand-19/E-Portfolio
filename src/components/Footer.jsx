import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp, FileText } from 'lucide-react'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="py-12 px-4 border-t border-slate-200 dark:border-dark-border bg-white/50 dark:bg-dark-surface/50">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left - Branding */}
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25">
                            <span className="text-white font-bold text-lg font-mono">JG</span>
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900 dark:text-white">
                                Jadav Gajanand
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                AI Engineer & Full-Stack Developer
                            </p>
                        </div>
                    </div>

                    {/* Center - Social links */}
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com/Jadav-Gajanand-19"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-dark-card"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jadav-gajanand-3aa946290"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-dark-card"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:j.gajanand1123@gmail.com"
                            className="p-2 text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-dark-card"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                        <span className="w-px h-6 bg-slate-200 dark:bg-dark-border" />
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 rounded-lg transition-colors"
                        >
                            <FileText className="w-4 h-4" />
                            <span>Resume</span>
                        </a>
                    </div>

                    {/* Right - Scroll to top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-xl hover:bg-slate-100 dark:hover:bg-dark-card border border-slate-200 dark:border-dark-border"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </motion.button>
                </div>

                {/* Bottom */}
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-dark-border">
                    <p className="text-center text-sm text-slate-500 dark:text-slate-500">
                        © {new Date().getFullYear()} Jadav Gajanand. Built with{' '}
                        <Heart className="w-3 h-3 inline text-red-500 fill-red-500" /> using React & Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    )
}
