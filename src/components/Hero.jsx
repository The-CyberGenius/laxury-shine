import { useEffect, useRef } from 'react'

const Hero = () => {
    const bgRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY
            if (y < window.innerHeight && bgRef.current) {
                bgRef.current.style.transform = `scale(1.0) translateY(${y * 0.25}px)`
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <img ref={bgRef} src="/assets/hero-bg.png" alt="Cinematic Indian Wedding" className="hero-bg" />
            <div className="hero-content">
                <p className="hero-tag">Rajasthan's Finest</p>
                <h1 className="hero-title">Turning Moments<br /><em>Into Memories</em></h1>
                <p className="hero-sub">Premium Wedding & Pre-Wedding Cinematography</p>
                <div className="hero-btns">
                    <a href="#contact" className="btn btn-gold">Book Your Date</a>
                    <a href="#gallery" className="btn btn-outline">View Work</a>
                </div>
            </div>
            <div className="hero-scroll">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    )
}

export default Hero
