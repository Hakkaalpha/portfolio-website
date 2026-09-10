import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const achievementSlots = [
  {
    title: 'Certifications',
    description: 'Professional certifications and courses completed.',
    status: 'Coming Soon',
  },
  {
    title: 'Hackathons',
    description: 'Hackathon participations and awards.',
    status: 'Coming Soon',
  },
  {
    title: 'Hardware Build Logs',
    description: 'Documented builds of hardware and mechatronics projects.',
    status: 'Coming Soon',
  },
  {
    title: 'Other Achievements',
    description: 'Additional accomplishments and recognitions.',
    status: 'Coming Soon',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
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
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="glow-line w-20 mx-auto mb-6" />
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Milestones, certifications, and build logs — growing every day
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievementSlots.map((slot, index) => (
            <motion.div
              key={slot.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Decorative corner lines */}
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute top-3 right-3 w-8 h-[1px] bg-accent/20 group-hover:bg-accent/40 transition-colors" />
                <div className="absolute top-3 right-3 w-[1px] h-8 bg-accent/20 group-hover:bg-accent/40 transition-colors" />
              </div>

              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-semibold text-white text-lg">
                  {slot.title}
                </h3>
                <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase text-accent/60 bg-accent/[0.06] rounded-full border border-accent/10">
                  {slot.status}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {slot.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
