import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Award, Trophy, Medal, Star, ExternalLink, Calendar, Building2, ChevronDown, ChevronRight, Sparkles } from 'lucide-react'

const achievements = [
    {
        type: 'winner',
        title: 'Smart India Hackathon 2025',
        subtitle: 'Grand Finale Winner',
        description: 'Won the prestigious national-level hackathon organized by Government of India',
        icon: Trophy,
        color: 'cyber-green',
        featured: true
    },
    {
        type: 'winner',
        title: 'Agentathon 2025',
        subtitle: 'Winner - Team Agent Forge',
        description: "World's largest Agentic AI Hackathon",
        icon: Trophy,
        color: 'cyber-green',
        featured: true
    },
    {
        type: 'record',
        title: 'Guinness World Record',
        subtitle: 'Part of Record-Breaking Team',
        description: 'Achieved during Agentathon 2025 (Team Avengers)',
        icon: Star,
        color: 'yellow-500',
        featured: true
    },
    {
        type: 'runner-up',
        title: 'Youth Speak Ideathon',
        subtitle: '2nd Place',
        description: 'Career Development Centre, IARE',
        icon: Medal,
        color: 'cyber-cyan'
    },
    {
        type: 'runner-up',
        title: 'Ideathon 2024',
        subtitle: '2nd Place',
        description: 'Inter-college innovation competition',
        icon: Medal,
        color: 'cyber-cyan'
    },
    {
        type: 'place',
        title: 'Hackathon 2024',
        subtitle: '3rd Place',
        description: 'Technical problem-solving challenge',
        icon: Award,
        color: 'neon-purple'
    },
    {
        type: 'leadership',
        title: 'President - The Origin Club',
        subtitle: 'Club Leadership',
        description: 'Led and organized Hack-A-Thon 1.0',
        icon: Sparkles,
        color: 'slate-300'
    }
]

const certifications = [
    {
        name: 'Career Essentials in Generative AI',
        issuer: 'Microsoft & LinkedIn',
        date: 'September 2024',
        category: 'AI/ML',
        featured: true
    },
    {
        name: 'Ethics in the Age of Generative AI',
        issuer: 'LinkedIn',
        date: 'September 2024',
        category: 'AI/ML'
    },
    {
        name: 'Introduction to Artificial Intelligence',
        issuer: 'LinkedIn',
        date: 'September 2024',
        category: 'AI/ML'
    },
    {
        name: 'What Is Generative AI?',
        issuer: 'LinkedIn',
        date: 'September 2024',
        category: 'AI/ML'
    },
    {
        name: 'Winter Coding Contest 4.0',
        issuer: 'Unstop',
        date: 'December 2024',
        credentialId: 'a55e477f-1b45-47e5-b4c8-4e209e1cacc0',
        category: 'Competition'
    },
    {
        name: 'Python Preparatory Certification',
        issuer: 'Intellipaat',
        date: 'December 2024',
        credentialId: '31679-1126828-283622',
        category: 'Programming'
    },
    {
        name: '6th Digital Citizen Summit',
        issuer: 'Digital Empowerment Foundation',
        date: 'November 2024',
        category: 'Summit'
    },
    {
        name: 'NITS Hacks 7.0 - Software Track',
        issuer: 'Unstop',
        date: 'November 2024',
        credentialId: '7175759a-701d-4f7a-b2d5-f439196b5dc9',
        category: 'Hackathon'
    },
    {
        name: 'Mete Project Expo 2024',
        issuer: 'IARE',
        date: 'November 2024',
        category: 'Event'
    },
    {
        name: 'TATA Crucible Campus Quiz 2024',
        issuer: 'Unstop',
        date: 'September 2024',
        credentialId: '14d8c7b7-5759-4d94-bfaa-ecf9a0cb1188',
        category: 'Quiz'
    },
    {
        name: 'Computer Science 101 Workshop',
        issuer: 'Workshop Certification',
        date: '2024',
        category: 'Workshop'
    }
]

const stats = [
    { value: '10+', label: 'Hackathons' },
    { value: '2', label: '2nd Places' },
    { value: '1', label: '3rd Place' },
    { value: '11+', label: 'Certifications' }
]

export default function Certifications() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [showAllCerts, setShowAllCerts] = useState(false)

    const displayedCerts = showAllCerts ? certifications : certifications.slice(0, 6)

    return (
        <section id="certifications" className="py-20 px-4">
            <div ref={ref} className="max-w-6xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="font-mono text-cyber-green text-sm mb-2">
                        <span className="text-slate-500">&gt;</span> cat achievements.log
                    </p>
                    <h2 className="text-3xl font-bold text-slate-100">
                        Achievements & <span className="text-gradient-cyber">Certifications</span>
                    </h2>
                </motion.div>

                {/* Hackathon Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
                >
                    {stats.map((stat, index) => (
                        <div key={stat.label} className="window-card p-4 text-center">
                            <p className="text-3xl font-bold text-gradient-cyber">{stat.value}</p>
                            <p className="text-sm text-slate-500 font-mono mt-1">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Certifications Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-lg font-mono text-slate-400 mb-4 flex items-center gap-2">
                        <Award className="w-4 h-4 text-neon-purple" />
                        Certifications & Courses
                    </h3>
                    <div className="window-card">
                        <div className="window-titlebar">
                            <div className="window-dot bg-red-500/80" />
                            <div className="window-dot bg-yellow-500/80" />
                            <div className="window-dot bg-green-500/80" />
                            <span className="ml-3 text-xs text-slate-500 font-mono">~/credentials/certifications.json</span>
                        </div>
                        <div className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {displayedCerts.map((cert, index) => (
                                    <motion.div
                                        key={cert.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                                        className={`p-3 rounded-lg border transition-all ${cert.featured
                                            ? 'bg-cyber-green/5 border-cyber-green/20 hover:border-cyber-green/40'
                                            : 'bg-[#0f0f18] border-[#1a1a2e] hover:border-[#2a2a4e]'
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className={`w-8 h-8 flex items-center justify-center rounded ${cert.featured ? 'bg-cyber-green/20' : 'bg-[#1a1a2e]'
                                                }`}>
                                                <Award className={`w-4 h-4 ${cert.featured ? 'text-cyber-green' : 'text-slate-500'}`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-slate-200 truncate">{cert.name}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <Building2 className="w-3 h-3 text-slate-600" />
                                                    <p className="text-xs text-slate-500">{cert.issuer}</p>
                                                </div>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <Calendar className="w-3 h-3 text-slate-600" />
                                                    <p className="text-xs text-slate-500">{cert.date}</p>
                                                </div>
                                                {cert.credentialId && (
                                                    <p className="text-[10px] text-slate-600 mt-1 font-mono truncate">
                                                        ID: {cert.credentialId.slice(0, 16)}...
                                                    </p>
                                                )}
                                            </div>
                                            <span className="text-[10px] px-1.5 py-0.5 bg-[#1a1a2e] text-slate-500 rounded font-mono">
                                                {cert.category}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Show More/Less Button */}
                            {certifications.length > 6 && (
                                <button
                                    onClick={() => setShowAllCerts(!showAllCerts)}
                                    className="flex items-center gap-2 mx-auto mt-4 px-4 py-2 text-sm font-mono text-slate-500 hover:text-cyber-green transition-colors"
                                >
                                    {showAllCerts ? (
                                        <>
                                            <ChevronDown className="w-4 h-4" />
                                            Show Less
                                        </>
                                    ) : (
                                        <>
                                            <ChevronRight className="w-4 h-4" />
                                            Show All ({certifications.length})
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* LinkedIn Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-6 text-center"
                >
                    <a
                        href="https://www.linkedin.com/in/jadav-gajanand-3aa946290/details/certifications/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-mono text-slate-500 hover:text-cyber-green transition-colors"
                    >
                        View all on LinkedIn
                        <ExternalLink className="w-3 h-3" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
