const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container about-grid">
                <div className="about-visual">
                    <div className="about-img-wrap">
                        <img src="/assets/logo.png" alt="Laxury Shine Cinematographer" className="about-logo-big" />
                        <div className="about-badge">
                            <span className="badge-num">5+</span>
                            <span className="badge-label">Years of<br />Excellence</span>
                        </div>
                    </div>
                </div>
                <div className="about-text">
                    <p className="section-tag">Who We Are</p>
                    <h2 className="section-title">Crafting Cinematic<br /><em>Love Stories</em></h2>
                    <p className="about-desc">
                        Based in the royal land of Rajasthan, Laxury Shine is a freelance cinematography studio dedicated to capturing the grand emotions of your most cherished celebrations — from intimate pre-wedding films to full-scale wedding productions.
                    </p>
                    <p className="about-desc">
                        Every frame is composed with intentional artistry, cinematic lighting, and storytelling that lasts forever.
                    </p>
                    <div className="about-stats">
                        <div className="stat">
                            <span className="stat-num">200+</span>
                            <span className="stat-label">Weddings Filmed</span>
                        </div>
                        <div className="stat">
                            <span className="stat-num">13K+</span>
                            <span className="stat-label">Views Online</span>
                        </div>
                        <div className="stat">
                            <span className="stat-num">100%</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                    </div>
                    <a href="#contact" className="btn btn-gold">Let's Collaborate</a>
                </div>
            </div>
        </section>
    )
}

export default About
