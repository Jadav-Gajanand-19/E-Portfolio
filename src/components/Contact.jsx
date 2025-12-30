import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Github, Linkedin, Copy, Check, Send, Terminal } from 'lucide-react'

const contactLinks = [
    {
        icon: Mail,
        label: 'email',
        value: 'j.gajanand1123@gmail.com',
        href: 'mailto:j.gajanand1123@gmail.com',
        copyable: true
    },
    {
        icon: Github,
        label: 'github',
        value: 'Jadav-Gajanand-19',
        href: 'https://github.com/Jadav-Gajanand-19'
    },
    {
        icon: Linkedin,
        label: 'linkedin',
        value: 'jadav-gajanand',
        href: 'https://www.linkedin.com/in/jadav-gajanand-3aa946290'
    }
]

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [copied, setCopied] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const handleCopy = async (text) => {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = inputValue.toLowerCase().trim()
            if (cmd === 'email' || cmd === 'mail') {
                window.location.href = 'mailto:j.gajanand1123@gmail.com'
            } else if (cmd === 'github') {
                window.open('https://github.com/Jadav-Gajanand-19', '_blank')
            } else if (cmd === 'linkedin') {
                window.open('https://www.linkedin.com/in/jadav-gajanand-3aa946290', '_blank')
            }
            setInputValue('')
        }
    }

    return (
        <section id="contact" className="py-20 px-4">
            <div ref={ref} className="max-w-4xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <p className="font-mono text-cyber-green text-sm mb-2">
                        <span className="text-slate-500">&gt;</span> ./contact --init
                    </p>
                    <h2 className="text-3xl font-bold text-slate-100">
                        Get in <span className="text-gradient-cyber">Touch</span>
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-md mx-auto">
                        Have a project in mind or just want to chat? I'm always open to discussing new opportunities.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Terminal interface */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="window-card-glow"
                    >
                        <div className="window-titlebar">
                            <div className="window-dot bg-red-500/80" />
                            <div className="window-dot bg-yellow-500/80" />
                            <div className="window-dot bg-green-500/80" />
                            <span className="ml-3 text-xs text-slate-500 font-mono">contact — interactive</span>
                        </div>
                        <div className="p-6 font-mono text-sm">
                            <p className="text-slate-500 mb-4">
                // Type 'email', 'github', or 'linkedin' and press Enter
                            </p>
                            <div className="space-y-3">
                                <p className="text-cyber-green">
                                    &gt; Available commands:
                                </p>
                                <p className="text-slate-400 pl-4">email   → Open email client</p>
                                <p className="text-slate-400 pl-4">github  → View GitHub profile</p>
                                <p className="text-slate-400 pl-4">linkedin → View LinkedIn profile</p>
                            </div>
                            <div className="mt-6 flex items-center gap-2">
                                <span className="text-cyber-green">&gt;</span>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleCommand}
                                    placeholder="type command..."
                                    className="flex-1 bg-transparent border-none outline-none text-slate-200 placeholder-slate-600"
                                />
                                <span className="w-2 h-4 bg-cyber-green animate-pulse" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact links */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-4"
                    >
                        {contactLinks.map((link, index) => (
                            <div key={link.label} className="window-card group hover:border-cyber-green/30 transition-colors">
                                <div className="p-4 flex items-center gap-4">
                                    <div className="w-10 h-10 border border-panel-border bg-panel-bg flex items-center justify-center group-hover:border-cyber-green/30 transition-colors">
                                        <link.icon className="w-5 h-5 text-cyber-green" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-slate-500 font-mono">{link.label}</p>
                                        <a
                                            href={link.href}
                                            target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                                            rel="noopener noreferrer"
                                            className="text-slate-200 hover:text-cyber-green transition-colors font-mono text-sm"
                                        >
                                            {link.value}
                                        </a>
                                    </div>
                                    {link.copyable && (
                                        <button
                                            onClick={() => handleCopy(link.value)}
                                            className="p-2 text-slate-500 hover:text-cyber-green transition-colors"
                                        >
                                            {copied ? <Check className="w-4 h-4 text-cyber-green" /> : <Copy className="w-4 h-4" />}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* CTA */}
                        <div className="window-card border-cyber-green/30 bg-cyber-green/5">
                            <div className="p-6 text-center">
                                <Terminal className="w-8 h-8 text-cyber-green mx-auto mb-3" />
                                <p className="text-slate-200 font-semibold mb-2">Let's build something great</p>
                                <p className="text-sm text-slate-400 mb-4">
                                    Available for freelance projects and internships
                                </p>
                                <a
                                    href="mailto:j.gajanand1123@gmail.com"
                                    className="btn-cyber-filled inline-flex items-center gap-2"
                                >
                                    <Send className="w-4 h-4" />
                                    send_message
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
