import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const educationData = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'Commencing 2026',
    year: '2026 – Present',
    description:
      'Pursuing B.Tech with a focus on building strong fundamentals in computer science, software engineering, and hardware integration.',
    current: true,
  },
  {
    degree: 'Class 12 — Physics, Chemistry, Mathematics',
    institution: 'Rajasthan Board of Secondary Education',
    year: 'Completed 2026',
    description:
      'Completed senior secondary education with Physics, Chemistry, and Mathematics. Built a solid analytical and mathematical foundation.',
    current: false,
  },
]

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-black uppercase text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="glow-line w-20 mx-auto mb-6" />
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Academic journey and foundations
          </p>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="glass glass-hover rounded-2xl p-6 sm:p-8 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="font-heading font-semibold text-white text-lg sm:text-xl">
                  {item.degree}
                </h3>
                {item.current && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mt-2 sm:mt-0 w-fit">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    Current
                  </span>
                )}
              </div>
              <p className="text-accent/80 text-sm font-medium mb-1">
                {item.institution}
              </p>
              <p className="text-gray-500 text-xs mb-3">{item.year}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
