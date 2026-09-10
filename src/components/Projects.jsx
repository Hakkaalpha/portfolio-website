import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const projects = [
  {
    title: 'POV Holographic Drone',
    description:
      'Engineered a hardware-software integration project combining mechatronics, custom circuitry, and Python for flight control and visual display.',
    technologies: ['Python', 'Custom PCBs', 'Mechatronics'],
  },
  {
    title: 'Custom Software & Tools',
    description:
      'Developed various programming projects including a mathematical operating system and a fully functional Discord bot.',
    technologies: ['C++', 'Python'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="glow-line w-20 mx-auto mb-6" />
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Selected works that showcase my engineering and development skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Glow border on hover */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-accent/20 to-blue-400/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

              <div className="relative glass rounded-2xl p-8 h-full flex flex-col transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/[0.12]">
                <h3 className="font-heading font-semibold text-white text-xl mb-3 group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-accent/80 bg-accent/[0.08] rounded-full border border-accent/10"
                    >
                      {tech}
                    </span>
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
