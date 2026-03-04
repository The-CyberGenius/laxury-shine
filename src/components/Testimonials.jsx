const Testimonials = () => {
    return (
        <section className="testimonials section">
            <div className="container">
                <p className="section-tag center">Kind Words</p>
                <h2 className="section-title center">What Clients <em>Say</em></h2>
                <div className="testi-grid">
                    <div className="testi-card">
                        <div className="stars">★★★★★</div>
                        <p>"Laxury Shine captured our wedding in the most cinematic way possible. Every frame felt like a Bollywood movie. Absolutely stunning!"</p>
                        <div className="testi-author">
                            <div className="author-avatar">R</div>
                            <div>
                                <strong>Rahul & Priya</strong>
                                <span>Jaipur Wedding</span>
                            </div>
                        </div>
                    </div>
                    <div className="testi-card featured-testi">
                        <div className="stars">★★★★★</div>
                        <p>"Our pre-wedding film at Mehrangarh Fort was beyond our dreams. The team was professional, creative, and made us feel so comfortable throughout."</p>
                        <div className="testi-author">
                            <div className="author-avatar">A</div>
                            <div>
                                <strong>Arjun & Sneha</strong>
                                <span>Jodhpur Pre-Wedding</span>
                            </div>
                        </div>
                    </div>
                    <div className="testi-card">
                        <div className="stars">★★★★★</div>
                        <p>"We still watch our wedding film every anniversary. The storytelling and editing is world-class. Highly recommend Laxury Shine to every couple!"</p>
                        <div className="testi-author">
                            <div className="author-avatar">V</div>
                            <div>
                                <strong>Vikram & Meera</strong>
                                <span>Udaipur Wedding</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
