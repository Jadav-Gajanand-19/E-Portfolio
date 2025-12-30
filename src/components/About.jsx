import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, MapPin, Briefcase, Target } from 'lucide-react'

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const highlights = [
        {
            icon: GraduationCap,
            label: 'Education',
            value: 'B.Tech AI (Pre-Final Year)',
            detail: 'Institute of Aeronautical Engineering'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Hyderabad, India',
            detail: 'Open to Remote'
        },
        {
            icon: Briefcase,
            label: 'Experience',
            value: '3+ Internships',
            detail: 'AI/ML & Backend'
        },
        {
            icon: Target,
            label: 'Focus',
            value: 'Production AI',
            detail: 'Agents & Systems'
        }
    ]

    return (
        <section id="about" className="py-24 px-4">
            <div ref={ref} className="max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-heading">
                        About <span className="gradient-text gradient-text-dark">Me</span>
                    </h2>
                    <p className="section-subheading mx-auto">
                        Engineering-focused with a passion for building systems that matter
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Main content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-3 space-y-6"
                    >
                        <div className="glass-card p-8">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                                The Short Version
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                I am a pre-final year B.Tech student specializing in <span className="text-primary-600 dark:text-primary-400 font-medium">Artificial Intelligence</span> with a strong focus on building practical, production-oriented AI systems, intelligent agents, and scalable software solutions.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                My work spans <span className="text-primary-600 dark:text-primary-400 font-medium">machine learning</span>, <span className="text-accent-600 dark:text-accent-400 font-medium">backend engineering</span>, and <span className="text-primary-600 dark:text-primary-400 font-medium">cross-platform app development</span>, with a strong emphasis on system design, reliability, and real-world impact.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                I believe in writing <span className="font-mono text-sm bg-slate-100 dark:bg-dark-card px-2 py-0.5 rounded">clean, maintainable code</span> that solves real problems. Every project I take on is approached with production-readiness in mind — because shipping matters.
                            </p>
                        </div>

                        {/* Philosophy cards */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="glass-card p-6">
                                <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-500/10 flex items-center justify-center mb-4">
                                    <span className="text-primary-600 dark:text-primary-400 text-lg">🎯</span>
                                </div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">System Thinking</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    I approach problems holistically, considering scalability, maintainability, and long-term implications.
                                </p>
                            </div>
                            <div className="glass-card p-6">
                                <div className="w-10 h-10 rounded-xl bg-accent-100 dark:bg-accent-500/10 flex items-center justify-center mb-4">
                                    <span className="text-accent-600 dark:text-accent-400 text-lg">⚡</span>
                                </div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Ship Fast, Ship Right</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Rapid prototyping meets production quality. I believe in iterating quickly while maintaining standards.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Highlights sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                className="glass-card-hover p-5 group"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-500/10 dark:to-accent-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                        <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-1">
                                            {item.label}
                                        </p>
                                        <p className="font-semibold text-slate-900 dark:text-white">
                                            {item.value}
                                        </p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            {item.detail}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Quick stats */}
                        <div className="glass-card p-6 mt-6">
                            <h4 className="text-sm font-medium text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-4">
                                Quick Stats
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <p className="text-2xl font-bold gradient-text gradient-text-dark">6+</p>
                                    <p className="text-xs text-slate-600 dark:text-slate-400">Projects Built</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold gradient-text gradient-text-dark">5+</p>
                                    <p className="text-xs text-slate-600 dark:text-slate-400">Certifications</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold gradient-text gradient-text-dark">3+</p>
                                    <p className="text-xs text-slate-600 dark:text-slate-400">Internships</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold gradient-text gradient-text-dark">1+</p>
                                    <p className="text-xs text-slate-600 dark:text-slate-400">Years Coding</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
