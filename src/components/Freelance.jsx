import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, Server, Bot, Cloud, Rocket, Code } from 'lucide-react'

const services = [
    {
        icon: Smartphone,
        title: 'Flutter App Development',
        description: 'Cross-platform mobile apps for Android & Web with beautiful UI and smooth performance.',
        features: ['Android & Web Apps', 'Custom Widgets', 'State Management', 'Animations']
    },
    {
        icon: Server,
        title: 'Backend API Development',
        description: 'Scalable REST APIs with FastAPI and Python. Authentication, logging, and async processing.',
        features: ['FastAPI / Python', 'REST APIs', 'Authentication', 'Database Design']
    },
    {
        icon: Bot,
        title: 'AI Feature Integration',
        description: 'Integrate intelligent features like chatbots, recommendation engines, and analytics into your apps.',
        features: ['Chatbots', 'Recommendations', 'Analytics', 'NLP Features']
    },
    {
        icon: Cloud,
        title: 'Cloud & Auth',
        description: 'Firebase integration, authentication systems, and cloud deployment solutions.',
        features: ['Firebase', 'Auth Systems', 'Cloud Functions', 'Real-time Data']
    },
    {
        icon: Rocket,
        title: 'Deployment & Monitoring',
        description: 'Production deployment, CI/CD pipelines, and monitoring for your applications.',
        features: ['CI/CD', 'Docker', 'Monitoring', 'Logging']
    },
    {
        icon: Code,
        title: 'Rapid Prototyping',
        description: 'Quick MVPs and prototypes to validate your ideas and get to market faster.',
        features: ['Fast Turnaround', 'MVP Development', 'Scalable Architecture', 'Clean Code']
    }
]

export default function Freelance() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="freelance" className="py-24 px-4 bg-slate-50/50 dark:bg-dark-surface/30">
            <div ref={ref} className="max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary-100 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 rounded-full mb-4">
                        Available for Freelance
                    </span>
                    <h2 className="section-heading">
                        Freelance <span className="gradient-text gradient-text-dark">Services</span>
                    </h2>
                    <p className="section-subheading mx-auto">
                        I work with early-stage startups, student founders, and small businesses to bring their ideas to life
                    </p>
                </motion.div>

                {/* Services grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="glass-card-hover p-6 group"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-5 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                                <service.icon className="w-6 h-6 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2">
                                {service.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-dark-card text-slate-600 dark:text-slate-400 rounded-md"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <div className="glass-card p-8 max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            Have a project in mind?
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            Let's discuss how I can help you build your next product. Fast delivery, clean code, production-ready.
                        </p>
                        <a href="#contact" className="btn-primary inline-flex">
                            Let's Work Together
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
