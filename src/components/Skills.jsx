import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const skillCategories = [
  {
    title: 'Programming',
    skills: ['C++', 'Python'],
  },
  {
    title: 'Operating Systems',
    skills: ['Linux (Mint, Arch)', 'Windows'],
  },
  {
    title: 'Hardware & Mechatronics',
    skills: ['Custom PCB Integration', 'Flight Control Systems'],
  },
  {
    title: 'Tools & Visualization',
    skills: ['Manim', 'Adobe Premiere', 'Adobe Express'],
  },
  {
    title: 'Web Development',
    skills: ['React', 'Tailwind CSS'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-black uppercase text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="glow-line w-20 mx-auto mb-6" />
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: catIdx * 0.08 }}
              className="glass glass-hover rounded-2xl p-5 sm:p-6 transition-all duration-300 group"
            >
              <h3 className="font-heading font-semibold text-white text-sm sm:text-base mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-accent/20 hover:bg-white/[0.06] transition-all duration-300 text-center"
                  >
                    <span className="text-gray-300 text-xs sm:text-sm font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
