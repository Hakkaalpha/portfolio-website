export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5">
      <div className="glow-line w-full" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="font-heading font-black text-lg uppercase text-white hover:text-accent transition-colors"
          >
            Tushar<span className="gradient-text">.</span>
          </a>

          {/* Copyright */}
          <p className="text-gray-600 text-xs">
            &copy; {currentYear} Tushar Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
