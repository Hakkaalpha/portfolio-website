import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-black uppercase text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="glow-line w-20 mx-auto mb-6" />
        </motion.div>

        {/* Content Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass rounded-2xl p-8 sm:p-10"
        >
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
            I am an aspiring software engineer and game developer with a strong
            foundation in C++ and Python. I am passionate about engineering
            hardware-software integrations, developing immersive game mechanics,
            and building complex mathematical tools. When I'm not writing code or
            working on mechatronics, you'll find me hitting the gym for
            bodybuilding and fitness training.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
