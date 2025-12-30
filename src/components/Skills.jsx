import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Cpu, Database, Bot, Server } from 'lucide-react'

const skillCategories = [
    {
        icon: Code2,
        title: 'Languages',
        color: 'from-blue-500 to-cyan-500',
        skills: ['Python', 'Dart', 'HTML/CSS', 'SQL', 'JavaScript']
    },
    {
        icon: Server,
        title: 'Frameworks & Tools',
        color: 'from-purple-500 to-pink-500',
        skills: ['FastAPI', 'Streamlit', 'Flutter', 'React', 'Git', 'GitHub', 'Docker', 'CI/CD']
    },
    {
        icon: Cpu,
        title: 'AI / ML',
        color: 'from-orange-500 to-red-500',
        skills: ['Supervised Learning', 'NLP', 'Classification', 'Regression', 'Feature Engineering', 'Model Evaluation', 'TF-IDF', 'Cosine Similarity', 'Bayesian Models']
    },
    {
        icon: Bot,
        title: 'LLMs & Agents',
        color: 'from-green-500 to-emerald-500',
        skills: ['Prompt Engineering', 'LLM Orchestration', 'Tool-calling Agents', 'Fine-tuning', 'Vector Search', 'LangChain', 'RAG']
    },
    {
        icon: Database,
        title: 'Backend & Systems',
        color: 'from-indigo-500 to-violet-500',
        skills: ['REST APIs', 'Authentication', 'Logging', 'Monitoring', 'Webhooks', 'Async Processing', 'Firebase']
    }
]

export default function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="skills" className="py-24 px-4 bg-slate-50/50 dark:bg-dark-surface/30">
            <div ref={ref} className="max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-heading">
                        Technical <span className="gradient-text gradient-text-dark">Stack</span>
                    </h2>
                    <p className="section-subheading mx-auto">
                        Tools and technologies I use to build production-ready systems
                    </p>
                </motion.div>

                {/* Skills grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="glass-card-hover p-6 group"
                        >
                            {/* Header */}
                            <div className="flex items-center space-x-3 mb-5">
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <category.icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="font-semibold text-slate-900 dark:text-white">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills tags */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="skill-badge"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Proficiency note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-10 text-sm text-slate-500 dark:text-slate-500"
                >
                    Continuously learning and expanding my toolkit. Currently exploring advanced LLM orchestration and distributed systems.
                </motion.p>
            </div>
        </section>
    )
}
