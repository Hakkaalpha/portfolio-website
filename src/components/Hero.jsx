import { motion } from 'framer-motion'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle radial glow behind text */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-black uppercase tracking-tight text-white mb-6"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}
        >
          Tushar{' '}
          <span className="gradient-text">Yadav</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-body font-light text-gray-400 mb-10 tracking-wide"
          style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.35rem)' }}
        >
          Software Engineer{' '}
          <span className="text-accent/60">|</span>{' '}
          Game Developer{' '}
          <span className="text-accent/60">|</span>{' '}
          Mechatronics Enthusiast
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, '#projects')}
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:bg-accent-light text-sm sm:text-base"
          >
            View Projects
            <svg
              className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 glass text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm sm:text-base border border-white/10 hover:border-accent/30"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-accent/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
