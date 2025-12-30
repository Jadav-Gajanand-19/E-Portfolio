import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GitBranch, ArrowRight } from 'lucide-react'

const experiences = [
    {
        company: 'Soaron',
        role: 'Software Development Intern',
        period: 'Aug 2025 – Present',
        description: 'Backend services, API development, and application logic for scalable systems.',
        tags: ['Backend', 'APIs', 'Python'],
        active: true
    },
    {
        company: 'TechSaksham',
        role: 'AI/ML Developer',
        period: 'Jan 2025 – Feb 2025',
        description: 'Built NLP-based resume ranking engine with 85% accuracy, reducing screening time by 70%.',
        tags: ['NLP', 'TF-IDF', 'ML Pipeline'],
        active: false
    },
    {
        company: 'Edunet Foundation',
        role: 'Project Intern',
        period: 'Dec 2024 – Jan 2025',
        description: 'Contributed to Plant Disease Detection System using ML and computer vision.',
        tags: ['Computer Vision', 'Classification'],
        active: false
    },
    {
        company: 'NSIC',
        role: 'AI/ML Trainee',
        period: 'May 2025',
        description: 'Hands-on exposure to applied AI and machine learning workflows.',
        tags: ['Applied AI', 'Training'],
        active: false
    }
]

export default function Experience() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="experience" className="py-20 px-4">
            <div ref={ref} className="max-w-4xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="font-mono text-cyber-green text-sm mb-2">
                        <span className="text-slate-500">&gt;</span> git log --oneline experience/
                    </p>
                    <h2 className="text-3xl font-bold text-slate-100">
                        Work <span className="text-gradient-cyber">Experience</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-cyber-green via-cyber-cyan to-neon-purple opacity-30" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="relative pl-12 pb-10 last:pb-0"
                        >
                            {/* Git branch icon */}
                            <div className={`absolute left-0 w-10 h-10 flex items-center justify-center border ${exp.active
                                    ? 'border-cyber-green bg-cyber-green/10 text-cyber-green'
                                    : 'border-panel-border bg-panel-bg text-slate-500'
                                }`}>
                                <GitBranch className="w-4 h-4" />
                            </div>

                            {/* Content card */}
                            <div className={`window-card ${exp.active ? 'border-cyber-green/30' : ''}`}>
                                <div className="window-titlebar">
                                    <span className="text-xs font-mono text-slate-500">
                                        {exp.period}
                                    </span>
                                    {exp.active && (
                                        <span className="ml-auto text-xs font-mono text-cyber-green status-online pl-3">
                                            current
                                        </span>
                                    )}
                                </div>
                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="font-bold text-slate-100">{exp.company}</h3>
                                            <p className="text-sm text-cyber-cyan font-mono">{exp.role}</p>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-slate-500" />
                                    </div>
                                    <p className="text-sm text-slate-400 mb-3">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag) => (
                                            <span key={tag} className="text-xs font-mono px-2 py-1 bg-panel-bg border border-panel-border text-slate-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
