const Gallery = () => {
    const showToast = (label) => {
        const existing = document.querySelector('.ls-toast')
        if (existing) existing.remove()

        const toast = document.createElement('div')
        toast.className = 'ls-toast'
        toast.textContent = `🎬 "${label}" — Full film available on Instagram @luxury_shine07`

        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%) translateY(20px)',
            background: '#13131a',
            color: '#c9a84c',
            border: '1px solid #c9a84c',
            borderRadius: '6px',
            padding: '0.85rem 2rem',
            fontSize: '0.85rem',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: '500',
            zIndex: '9999',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            opacity: '0',
            transition: 'opacity 0.3s, transform 0.3s',
            maxWidth: '90vw',
            textAlign: 'center',
        })

        document.body.appendChild(toast)
        requestAnimationFrame(() => {
            toast.style.opacity = '1'
            toast.style.transform = 'translateX(-50%) translateY(0)'
        })

        setTimeout(() => {
            toast.style.opacity = '0'
            toast.style.transform = 'translateX(-50%) translateY(20px)'
            setTimeout(() => toast.remove(), 400)
        }, 4000)
    }

    return (
        <section id="gallery" className="gallery section">
            <div className="container">
                <p className="section-tag center">Our Work</p>
                <h2 className="section-title center">Recent <em>Highlights</em></h2>
                <div className="gallery-grid">
                    <div className="gallery-item tall" id="gi-1">
                        <div
                            className="gallery-thumb"
                            style={{ background: 'linear-gradient(135deg,#1a0a00,#5c3200)' }}
                            onClick={() => showToast('Wedding Film')}
                        >
                            <div className="play-btn" aria-label="Play video">▶</div>
                            <div className="gallery-overlay">
                                <p>5.1K Views</p>
                                <span>Wedding Film</span>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-item" id="gi-2">
                        <div
                            className="gallery-thumb"
                            style={{ background: 'linear-gradient(135deg,#0a1a00,#2a5200)' }}
                            onClick={() => showToast('Pre-Wedding')}
                        >
                            <div className="play-btn" aria-label="Play video">▶</div>
                            <div className="gallery-overlay">
                                <p>13.3K Views</p>
                                <span>Pre-Wedding</span>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-item" id="gi-3">
                        <div
                            className="gallery-thumb"
                            style={{ background: 'linear-gradient(135deg,#00101a,#003052)' }}
                            onClick={() => showToast('Candid Shoot')}
                        >
                            <div className="play-btn" aria-label="Play video">▶</div>
                            <div className="gallery-overlay">
                                <p>1.8K Views</p>
                                <span>Candid Shoot</span>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-item wide" id="gi-4">
                        <div
                            className="gallery-thumb"
                            style={{ background: 'linear-gradient(135deg,#1a001a,#520052)' }}
                            onClick={() => showToast('Destination Film')}
                        >
                            <div className="play-btn" aria-label="Play video">▶</div>
                            <div className="gallery-overlay">
                                <p>Rajasthan</p>
                                <span>Destination Film</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gallery-cta">
                    <a href="https://www.instagram.com/luxury_shine07" target="_blank" rel="noreferrer" className="btn btn-outline">
                        View Full Portfolio on Instagram
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Gallery
