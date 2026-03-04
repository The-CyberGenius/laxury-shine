const Services = () => {
    return (
        <section id="services" className="services section">
            <div className="container">
                <p className="section-tag center">What We Offer</p>
                <h2 className="section-title center">Our <em>Services</em></h2>
                <div className="services-grid">
                    <div className="service-card" id="svc-wedding">
                        <div className="svc-icon">🎬</div>
                        <h3>Wedding Films</h3>
                        <p>Full-day cinematic coverage of your wedding — from baraat to vidaai. Every ritual, every tear, every laugh — preserved forever.</p>
                        <div className="svc-glow"></div>
                    </div>
                    <div className="service-card featured" id="svc-prewedding">
                        <div className="svc-badge-feat">Popular</div>
                        <div className="svc-icon">💍</div>
                        <h3>Pre-Wedding Films</h3>
                        <p>Stunning outdoor cinematic sessions across Rajasthan's iconic landscapes, havelis, and deserts — before your big day.</p>
                        <div className="svc-glow"></div>
                    </div>
                    <div className="service-card" id="svc-engagement">
                        <div className="svc-icon">📷</div>
                        <h3>Engagement & Events</h3>
                        <p>Beautifully captured engagement ceremonies, mehendi nights, sangeet performances, and all the joy in between.</p>
                        <div className="svc-glow"></div>
                    </div>
                    <div className="service-card" id="svc-collab">
                        <div className="svc-icon">🤝</div>
                        <h3>Collaborations</h3>
                        <p>Open to collaborating with photographers, wedding planners, and brands for premium creative projects across Rajasthan.</p>
                        <div className="svc-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
