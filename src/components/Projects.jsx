import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Folder, FolderOpen, FileCode, ExternalLink, Github, Star, ChevronDown, ChevronRight } from 'lucide-react'

const projectCategories = [
    {
        name: 'ai-agents',
        isOpen: true,
        projects: [
            {
                name: 'Aiera - Emotional Assistant',
                description: 'Full-stack emotional assistance agent with Agno framework, FastAPI backend, and Flutter mobile app',
                tech: ['Python', 'Agno', 'FastAPI', 'Flutter', 'Google AI'],
                github: 'https://github.com/Jadav-Gajanand-19/aiera-backend',
                featured: true
            },
            {
                name: 'Study Help Agent',
                description: 'AI-powered study assistant agent for learning and task management',
                tech: ['Python', 'LLM', 'AI Agents'],
                github: 'https://github.com/Jadav-Gajanand-19/study-help-agent'
            },
            {
                name: 'Maven - Verbal Assistant',
                description: 'Voice interaction system with Siri-like capabilities for command line',
                tech: ['Python', 'Speech Recognition', 'NLP'],
                github: 'https://github.com/Jadav-Gajanand-19/Maven---Verbal-Assistant'
            },
        ]
    },
    {
        name: 'data-science',
        isOpen: true,
        projects: [
            {
                name: 'TalentLens - HR Analytics',
                description: 'Predicting employee attrition using ML models with Streamlit dashboard',
                tech: ['Python', 'Scikit-learn', 'Streamlit', 'ML'],
                github: 'https://github.com/Jadav-Gajanand-19/TalentLens---See-Beyond-Resume',
                featured: true
            },
            {
                name: 'Face Attendance System',
                description: 'AI-powered attendance tracking using computer vision and face recognition',
                tech: ['Python', 'OpenCV', 'Deep Learning'],
                github: 'https://github.com/Jadav-Gajanand-19/Face-Attendance'
            },
            {
                name: 'VarshaVaani - Rainfall Prediction',
                description: 'Machine learning model for accurate rainfall prediction',
                tech: ['Python', 'Scikit-learn', 'Data Science'],
                github: 'https://github.com/Jadav-Gajanand-19/VarshaVaani'
            },
            {
                name: 'HealthAI',
                description: 'Disease prediction platform for smarter healthcare prevention',
                tech: ['Python', 'ML', 'Healthcare'],
                github: 'https://github.com/Jadav-Gajanand-19/HealthAI'
            },
            {
                name: 'Inbox Intelligence',
                description: 'High-accuracy spam detection using Bayesian classification',
                tech: ['Python', 'NLP', 'Jupyter'],
                github: 'https://github.com/Jadav-Gajanand-19/Inbox-Intelligence'
            },
        ]
    },
    {
        name: 'mobile-apps',
        isOpen: true,
        projects: [
            {
                name: 'Pahaar - Study Buddy',
                description: 'Comprehensive mobile study companion app for students',
                tech: ['Flutter', 'Dart', 'Firebase'],
                github: 'https://github.com/Jadav-Gajanand-19/Pahaar---Your-study-buddy',
                featured: true
            },
            {
                name: 'Aira Mobile App',
                description: 'Flutter frontend for emotional assistance AI agent',
                tech: ['Flutter', 'Dart', 'REST API'],
                github: 'https://github.com/Jadav-Gajanand-19/aira---emotional-assistance-agent'
            },
            {
                name: 'Daanveer - Social Platform',
                description: 'Social networking application built with Flutter',
                tech: ['Flutter', 'Dart', 'Firebase'],
                github: 'https://github.com/Jadav-Gajanand-19/Daanveer---the-social-platform'
            },
        ]
    },
    {
        name: 'web-tools',
        isOpen: false,
        projects: [
            {
                name: 'Uptime Genie',
                description: 'Website uptime monitor with Telegram alerts and Streamlit dashboard',
                tech: ['Python', 'Streamlit', 'Telegram API'],
                github: 'https://github.com/Jadav-Gajanand-19/Uptime-Genie'
            },
            {
                name: 'Quizzle',
                description: 'Interactive quiz platform with dynamic feedback system',
                tech: ['HTML', 'JavaScript', 'CSS'],
                github: 'https://github.com/Jadav-Gajanand-19/Quizzle'
            },
            {
                name: 'DiabCare',
                description: 'Health insights platform for diabetes management',
                tech: ['Python', 'Web', 'Healthcare'],
                github: 'https://github.com/Jadav-Gajanand-19/DiabCare'
            },
            {
                name: 'Titanic Survival Prediction',
                description: 'Classic ML project using Random Forest algorithm',
                tech: ['Python', 'Scikit-learn', 'Pandas'],
                github: 'https://github.com/Jadav-Gajanand-19/Titanic-Survival'
            },
        ]
    }
]

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [openCategories, setOpenCategories] = useState(
        projectCategories.reduce((acc, cat) => ({ ...acc, [cat.name]: cat.isOpen }), {})
    )

    const toggleCategory = (name) => {
        setOpenCategories(prev => ({ ...prev, [name]: !prev[name] }))
    }

    return (
        <section id="projects" className="py-20 px-4">
            <div ref={ref} className="max-w-5xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <p className="font-mono text-cyber-green text-sm mb-2">
                        <span className="text-slate-500">&gt;</span> ls -la ~/projects
                    </p>
                    <h2 className="text-3xl font-bold text-slate-100">
                        Project <span className="text-gradient-cyber">Repository</span>
                    </h2>
                    <p className="text-slate-500 text-sm mt-2 font-mono">14+ repositories • Click to expand</p>
                </motion.div>

                {/* File Explorer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="window-card-glow"
                >
                    <div className="window-titlebar">
                        <div className="window-dot bg-red-500/80" />
                        <div className="window-dot bg-yellow-500/80" />
                        <div className="window-dot bg-green-500/80" />
                        <span className="ml-3 text-xs text-slate-500 font-mono">~/github/Jadav-Gajanand-19</span>
                        <a
                            href="https://github.com/Jadav-Gajanand-19"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto text-slate-500 hover:text-cyber-green transition-colors"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="p-4">
                        {projectCategories.map((category, catIndex) => (
                            <div key={category.name} className="mb-2">
                                {/* Category Folder */}
                                <button
                                    onClick={() => toggleCategory(category.name)}
                                    className="flex items-center gap-2 w-full py-2 px-2 hover:bg-white/5 rounded-lg transition-all group"
                                >
                                    {openCategories[category.name] ? (
                                        <ChevronDown className="w-4 h-4 text-slate-500" />
                                    ) : (
                                        <ChevronRight className="w-4 h-4 text-slate-500" />
                                    )}
                                    {openCategories[category.name] ? (
                                        <FolderOpen className="w-5 h-5 text-cyber-cyan" />
                                    ) : (
                                        <Folder className="w-5 h-5 text-cyber-cyan" />
                                    )}
                                    <span className="font-mono text-sm text-slate-300">{category.name}/</span>
                                    <span className="text-xs text-slate-600 ml-auto font-mono">
                                        {category.projects.length} items
                                    </span>
                                </button>

                                {/* Projects inside folder */}
                                {openCategories[category.name] && (
                                    <div className="ml-2 sm:ml-6 pl-3 sm:pl-4 border-l border-[#1a1a2e]">
                                        {category.projects.map((project, projIndex) => (
                                            <motion.div
                                                key={project.name}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.2, delay: projIndex * 0.05 }}
                                                className={`group py-3 px-3 my-1 rounded-lg hover:bg-white/5 transition-all ${project.featured ? 'bg-cyber-green/5 border border-cyber-green/20' : ''
                                                    }`}
                                            >
                                                <div className="flex items-start gap-2 sm:gap-3">
                                                    <FileCode className={`w-4 h-4 mt-0.5 shrink-0 ${project.featured ? 'text-cyber-green' : 'text-slate-500'
                                                        }`} />
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2">
                                                            <p className="font-mono text-sm text-slate-200 truncate">
                                                                {project.name}
                                                            </p>
                                                            {project.featured && (
                                                                <Star className="w-3 h-3 text-cyber-green fill-cyber-green shrink-0" />
                                                            )}
                                                        </div>
                                                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                                                            {project.description}
                                                        </p>
                                                        <div className="flex flex-wrap gap-1 mt-2">
                                                            {project.tech.slice(0, 4).map((t) => (
                                                                <span key={t} className="text-[10px] px-1.5 py-0.5 bg-[#1a1a2e] text-slate-400 rounded font-mono">
                                                                    {t}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-1.5 text-slate-500 hover:text-cyber-green hover:bg-cyber-green/10 rounded transition-all md:opacity-0 md:group-hover:opacity-100"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* View All on GitHub */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-6 text-center"
                >
                    <a
                        href="https://github.com/Jadav-Gajanand-19?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-mono text-slate-500 hover:text-cyber-green transition-colors"
                    >
                        <Github className="w-4 h-4" />
                        View all 21 repositories on GitHub
                        <ExternalLink className="w-3 h-3" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
