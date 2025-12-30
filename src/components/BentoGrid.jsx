import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, Briefcase, GraduationCap, MapPin, Zap } from 'lucide-react'

// Skills with icons using devicon/simple-icons CDN
const skillCategories = [
    {
        title: 'Languages',
        file: 'languages.json',
        skills: [
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
            { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        ]
    },
    {
        title: 'Frameworks',
        file: 'frameworks.json',
        skills: [
            { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
            { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Streamlit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg' },
            { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
            { name: 'Agno', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        ]
    },
    {
        title: 'AI/ML',
        file: 'ai_ml.json',
        skills: [
            { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
            { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
            { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
            { name: 'LLM Agents', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
            { name: 'NLP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
            { name: 'Vector DB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        ]
    },
    {
        title: 'Tools',
        file: 'tools.json',
        skills: [
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
            { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            { name: 'Railway', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/railway/railway-original.svg' },
            { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        ]
    }
]

export default function BentoGrid() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" className="py-20 px-4">
            <div ref={ref} className="max-w-6xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="font-mono text-cyber-green text-sm mb-2">
                        <span className="text-slate-500">&gt;</span> cat about.md
                    </p>
                    <h2 className="text-3xl font-bold text-slate-100">
                        System <span className="text-gradient-cyber">Overview</span>
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(140px,auto)]">

                    {/* About - Large card spanning 2 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="window-card lg:col-span-2 lg:row-span-2"
                    >
                        <div className="window-titlebar">
                            <div className="window-dot bg-red-500/80" />
                            <div className="window-dot bg-yellow-500/80" />
                            <div className="window-dot bg-green-500/80" />
                            <span className="ml-3 text-xs text-slate-500 font-mono">about.txt</span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 border border-cyber-green/30 bg-cyber-green/5 flex items-center justify-center">
                                    <Cpu className="w-6 h-6 text-cyber-green" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-100">Jadav Gajanand</h3>
                                    <p className="text-xs text-cyber-green font-mono">AI_ENGINEER_V2.0</p>
                                </div>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                Pre-final year B.Tech student specializing in Artificial Intelligence with a strong focus on building practical, production-oriented AI systems, intelligent agents, and scalable software solutions.
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                My work spans machine learning, backend engineering, and cross-platform app development, with emphasis on system design, reliability, and real-world impact.
                            </p>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="window-card"
                    >
                        <div className="window-titlebar">
                            <GraduationCap className="w-3 h-3 text-cyber-cyan" />
                            <span className="ml-2 text-xs text-slate-500 font-mono">education</span>
                        </div>
                        <div className="p-4">
                            <p className="text-slate-100 font-semibold text-sm">B.Tech in AI</p>
                            <p className="text-xs text-slate-500 mt-1">IARE, Hyderabad</p>
                            <p className="text-cyber-cyan text-xs font-mono mt-2">// Pre-Final Year</p>
                        </div>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="window-card"
                    >
                        <div className="window-titlebar">
                            <MapPin className="w-3 h-3 text-neon-purple" />
                            <span className="ml-2 text-xs text-slate-500 font-mono">location</span>
                        </div>
                        <div className="p-4">
                            <p className="text-slate-100 font-semibold text-sm">Hyderabad, India</p>
                            <p className="text-xs text-slate-500 mt-1">Open to Remote</p>
                            <p className="text-neon-purple text-xs font-mono mt-2 status-online pl-3">online</p>
                        </div>
                    </motion.div>

                    {/* Status */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="window-card"
                    >
                        <div className="window-titlebar">
                            <Briefcase className="w-3 h-3 text-cyber-green" />
                            <span className="ml-2 text-xs text-slate-500 font-mono">status</span>
                        </div>
                        <div className="p-4">
                            <p className="text-cyber-green font-semibold text-sm">Available</p>
                            <p className="text-xs text-slate-500 mt-1">Freelance & Internships</p>
                            <p className="text-cyber-green text-xs font-mono mt-2">
                                &gt; accepting_projects
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="window-card"
                    >
                        <div className="window-titlebar">
                            <Zap className="w-3 h-3 text-yellow-500" />
                            <span className="ml-2 text-xs text-slate-500 font-mono">stats</span>
                        </div>
                        <div className="p-4 grid grid-cols-2 gap-3">
                            <div>
                                <p className="text-2xl font-bold text-cyber-green">14+</p>
                                <p className="text-xs text-slate-500">Projects</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-cyber-cyan">3+</p>
                                <p className="text-xs text-slate-500">Internships</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills with Icons - Full Width */}
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 + catIndex * 0.05 }}
                            className="window-card lg:col-span-2"
                        >
                            <div className="window-titlebar">
                                <div className="w-3 h-3 rounded-full bg-cyber-green/50" />
                                <span className="ml-2 text-xs text-slate-500 font-mono">skills/{category.file}</span>
                            </div>
                            <div className="p-4">
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-2 px-3 py-1.5 bg-[#12121a] border border-[#1a1a2e] rounded-lg hover:border-cyber-green/30 transition-all group"
                                        >
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-4 h-4 group-hover:scale-110 transition-transform"
                                                onError={(e) => e.target.style.display = 'none'}
                                            />
                                            <span className="text-xs font-mono text-slate-300">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    )
}
