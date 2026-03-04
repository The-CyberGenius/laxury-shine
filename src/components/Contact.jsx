import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        type: '',
        message: ''
    })

    const showToast = (msg, type = 'info') => {
        const existing = document.querySelector('.ls-toast')
        if (existing) existing.remove()

        const toast = document.createElement('div')
        toast.className = 'ls-toast'
        toast.textContent = msg

        const colors = {
            info: '#c9a84c',
            warn: '#e07030',
            success: '#4caf7a'
        }

        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%) translateY(20px)',
            background: '#13131a',
            color: colors[type] || colors.info,
            border: `1px solid ${colors[type] || colors.info}`,
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

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { name, phone, date, type, message } = formData

        if (!name || !phone || !date || !type) {
            showToast('⚠️ Please fill in all required fields.', 'warn')
            return
        }

        const text = encodeURIComponent(
            `Hello Laxury Shine! \n\nName: ${name}\nPhone: ${phone}\nEvent Date: ${date}\nService: ${type}\n${message ? 'Message: ' + message : ''}\n\nLooking forward to working with you!`
        )

        const waUrl = `https://wa.me/916367074582?text=${text}`
        window.open(waUrl, '_blank', 'noopener')

        showToast('✅ Opening WhatsApp with your inquiry!', 'success')
        setFormData({ name: '', phone: '', date: '', type: '', message: '' })
    }

    return (
        <section id="contact" className="contact section">
            <div className="container contact-grid">
                <div className="contact-info">
                    <p className="section-tag">Get In Touch</p>
                    <h2 className="section-title">Book Your<br /><em>Dream Film</em></h2>
                    <p className="contact-tagline">Available across Rajasthan & beyond.</p>
                    <div className="contact-details">
                        <div className="contact-item" id="citem-phone">
                            <div className="citem-icon">📞</div>
                            <div>
                                <strong>Phone / WhatsApp</strong>
                                <a href="tel:+916367074582">+91 63670 74582</a>
                            </div>
                        </div>
                        <div className="contact-item" id="citem-instagram">
                            <div className="citem-icon">📸</div>
                            <div>
                                <strong>Instagram</strong>
                                <a href="https://www.instagram.com/luxury_shine07" target="_blank" rel="noreferrer">@luxury_shine07</a>
                            </div>
                        </div>
                        <div className="contact-item" id="citem-location">
                            <div className="citem-icon">📍</div>
                            <div>
                                <strong>Location</strong>
                                <span>Rajasthan, India</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form-wrap">
                    <form id="bookingForm" className="booking-form" noValidate onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text" id="clientName" name="name"
                                placeholder="Your Name" required
                                value={formData.name} onChange={handleChange}
                            />
                            <label htmlFor="clientName">Your Name</label>
                        </div>
                        <div className="form-group">
                            <input
                                type="tel" id="clientPhone" name="phone"
                                placeholder="Phone Number" required
                                value={formData.phone} onChange={handleChange}
                            />
                            <label htmlFor="clientPhone">Phone Number</label>
                        </div>
                        <div className="form-group">
                            <input
                                type="date" id="eventDate" name="date" required
                                value={formData.date} onChange={handleChange}
                            />
                            <label htmlFor="eventDate">Event Date</label>
                        </div>
                        <div className="form-group">
                            <select id="eventType" name="type" required value={formData.type} onChange={handleChange}>
                                <option value="" disabled>Select Service</option>
                                <option value="wedding">Wedding Film</option>
                                <option value="prewedding">Pre-Wedding Film</option>
                                <option value="engagement">Engagement / Event</option>
                                <option value="collab">Collaboration</option>
                            </select>
                            <label htmlFor="eventType">Service Type</label>
                        </div>
                        <div className="form-group">
                            <textarea
                                id="clientMessage" name="message" rows="4"
                                placeholder="Tell us about your vision..."
                                value={formData.message} onChange={handleChange}
                            ></textarea>
                            <label htmlFor="clientMessage">Your Vision</label>
                        </div>
                        <button type="submit" className="btn btn-gold full-width" id="submitBtn">
                            Send Inquiry
                        </button>
                        <p className="form-note">We respond within 24 hours 🎬</p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
