import { useState, useEffect } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60)
        }

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, { rootMargin: '-40% 0px -55% 0px' })

        const sections = document.querySelectorAll('section[id], header[id]')
        sections.forEach(s => sectionObserver.observe(s))

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
            sections.forEach(s => sectionObserver.unobserve(s))
        }
    }, [])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        document.body.style.overflow = !menuOpen ? 'hidden' : ''
    }

    const closeMenu = () => {
        setMenuOpen(false)
        document.body.style.overflow = ''
    }

    // Active styles handled conditionally via inline styles or classes based on App.css
    // Here using the activeSection state to add 'active' class
    const getLinkClass = (id) => activeSection === id ? 'active' : ''

    return (
        <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
            <div className="nav-logo">
                <img src="/assets/logo.png" alt="Laxury Shine Logo" className="logo-img" />
                <span className="logo-text">Laxury Shine</span>
            </div>
            <button
                className={`nav-toggle ${menuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Menu"
            >
                <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}></span>
                <span style={menuOpen ? { opacity: '0' } : {}}></span>
                <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}></span>
            </button>
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li><a href="#home" className={getLinkClass('home')} onClick={closeMenu}>Home</a></li>
                <li><a href="#about" className={getLinkClass('about')} onClick={closeMenu}>About</a></li>
                <li><a href="#services" className={getLinkClass('services')} onClick={closeMenu}>Services</a></li>
                <li><a href="#gallery" className={getLinkClass('gallery')} onClick={closeMenu}>Work</a></li>
                <li><a href="#contact" className="nav-cta" onClick={closeMenu}>Book Now</a></li>
            </ul>
            {/* Dynamic style for active link highlighting to replace the injected style in main.js */}
            <style>{`
        .nav-links a.active { color: var(--gold) !important; }
        .nav-links a.active::after { width: 100% !important; }
      `}</style>
        </nav>
    )
}

export default Navbar
