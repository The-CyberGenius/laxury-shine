import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import SignatureStrip from './components/SignatureStrip'
import Gallery from './components/Gallery'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    // Global scroll reveal observer
    useEffect(() => {
        const revealEls = document.querySelectorAll(
            '.service-card, .testi-card, .step, .gallery-item, .about-text, .about-visual, .contact-info, .contact-form-wrap, .section-title, .section-tag'
        )

        revealEls.forEach(el => el.classList.add('reveal'))

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, idx) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible')
                    }, idx * 80)
                    revealObserver.unobserve(entry.target)
                }
            })
        }, { threshold: 0.12 })

        revealEls.forEach(el => revealObserver.observe(el))

        return () => {
            revealEls.forEach(el => revealObserver.unobserve(el))
        }
    }, [])

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <SignatureStrip />
                <Gallery />
                <Process />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App
