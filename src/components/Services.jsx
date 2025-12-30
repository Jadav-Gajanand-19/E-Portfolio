import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, Server, Bot, Rocket, Zap, Code } from 'lucide-react'

const services = [
    {
        icon: Smartphone,
        title: 'Mobile Apps',
        desc: 'Flutter cross-platform',
        color: 'cyber-cyan'
    },
    {
        icon: Server,
        title: 'Backend APIs',
        desc: 'FastAPI & Python',
        color: 'cyber-green'
    },
    {
        icon: Bot,
        title: 'AI Integration',
        desc: 'LLMs & Agents',
        color: 'neon-purple'
    },
    {
        icon: Rocket,
        title: 'Deployment',
        desc: 'CI/CD & Docker',
        color: 'cyber-cyan'
    },
]

export default function Services() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section className="py-16 px-4">
            <div ref={ref} className="max-w-4xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-8 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded-full mb-4">
                        <Zap className="w-3 h-3 text-cyber-green" />
                        <span className="text-xs font-mono text-cyber-green">Available for Freelance</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-100">
                        <span className="text-gradient-cyber">Services</span>
                    </h2>
                </motion.div>

                {/* Services grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            className="group p-4 bg-[#0f0f18] border border-[#1a1a2e] rounded-lg text-center hover:border-cyber-green/30 transition-all"
                        >
                            <div className={`w-10 h-10 mx-auto mb-3 flex items-center justify-center bg-${service.color}/10 border border-${service.color}/30 rounded-lg group-hover:scale-110 transition-transform`}>
                                <service.icon className={`w-5 h-5 text-${service.color}`} />
                            </div>
                            <p className="text-sm font-medium text-slate-200">{service.title}</p>
                            <p className="text-xs text-slate-500 font-mono mt-1">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
