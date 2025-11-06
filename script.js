// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu && navToggle) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter form submission
function subscribeNewsletter(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;

    // Simulate API call
    showNotification(`Thank you for subscribing with: ${email}`, 'success');
    form.reset();
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#2c5530' : '#ff6b35'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 15px;
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Explore Now button functionality
function exploreNow() {
    window.location.href = 'destinations.html';
}

// Show destination details
function showDestination(type) {
    const destinations = {
        mountain: {
            name: 'Mountain Trekking',
            price: 799,
            description: 'Experience the thrill of high-altitude adventures with expert guides.'
        },
        beach: {
            name: 'Beach Paradise',
            price: 699,
            description: 'Relax and unwind in tropical paradise locations.'
        },
        camping: {
            name: 'Wilderness Camping',
            price: 499,
            description: 'Connect with nature in pristine wilderness areas.'
        }
    };

    const dest = destinations[type];
    if (dest) {
        showNotification(`Exploring ${dest.name} - $${dest.price}`, 'info');
        // In a real app, you would redirect to a booking page or show a modal
        setTimeout(() => {
            window.location.href = `destinations.html?type=${type}`;
        }, 1000);
    }
}

// Scroll to details function
function scrollToDetails() {
    document.getElementById('eventDetails').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Whistling Morans Countdown - Real-time to November 9, 2025 4:00 PM
function updateCountdown() {
    const eventDate = new Date('November 9, 2025 16:00:00 GMT+0300'); // 4PM East Africa Time
    const now = new Date();
    const distance = eventDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update countdown display
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');

    // If countdown finished
    if (distance < 0) {
        clearInterval(countdownTimer);
        const countdownEl = document.getElementById('countdown');
        if (countdownEl) {
            countdownEl.innerHTML = `
                <div class="event-started">
                    <h3 style="color: var(--secondary-color); margin-bottom: 1rem; font-size: 2rem;">🎉 Event Starting Soon! 🎉</h3>
                    <p style="font-size: 1.2rem;">Get ready for an amazing Pool Party at Whistling Moran!</p>
                </div>
            `;
        }
    }
}

// Initialize countdown
let countdownTimer;
if (document.querySelector('.sticker-hero')) {
    updateCountdown();
    countdownTimer = setInterval(updateCountdown, 1000);
}

// Whistling Morans booking function
function bookWhistlingMorans() {
    const modal = document.createElement('div');
    modal.className = 'booking-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Book The Avinas Adventures Pool Party</h3>
            <p><strong>Date:</strong> November 9th, 2025</p>
            <p><strong>Time:</strong> Meet at 4:00 PM</p>
            <p><strong>Location:</strong> Whistling Moran - Mombasa Rd</p>
            <p><strong>Price:</strong> Ksh 1,999</p>
            <div class="payment-info">
                <h4>Payment Details:</h4>
                <p><i class="fas fa-mobile-alt"></i> <strong>M-Pesa: 0707388274</strong></p>
                <p>Account Name: <strong>Edison</strong></p>
            </div>
            <div class="event-activities">
                <h4>Inclusive Activities:</h4>
                <ul>
                    <li><i class="fas fa-swimming-pool"></i> Swimming Pool Access</li>
                    <li><i class="fas fa-music"></i> Live DJ Performance</li>
                    <li><i class="fas fa-cocktail"></i> Premium Drinks & Liquor</li>
                    <li><i class="fas fa-bus"></i> Transport To & From Venue</li>
                </ul>
                <h4>Exclusive Activities:</h4>
                <ul>
                    <li><i class="fas fa-horse"></i> Horse Riding</li>
                    <li><i class="fas fa-car"></i> Carting</li>
                    <li><i class="fas fa-tachometer-alt"></i> Drifting</li>
                </ul>
            </div>
            <div class="modal-actions">
                <button class="cancel-btn">Cancel</button>
                <button class="confirm-btn">Confirm Booking</button>
            </div>
        </div>
    `;

    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

    modal.querySelector('.modal-content').style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 15px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        animation: slideInUp 0.3s ease;
    `;

    modal.querySelector('.payment-info').style.cssText = `
        background: var(--background-light);
        padding: 1rem;
        border-radius: 10px;
        margin: 1rem 0;
        text-align: center;
    `;

    modal.querySelector('.cancel-btn').style.cssText = `
        background: #ccc;
        color: #333;
        border: none;
        padding: 12px 25px;
        border-radius: 5px;
        cursor: pointer;
        margin-right: 1rem;
        font-weight: 600;
    `;

    modal.querySelector('.confirm-btn').style.cssText = `
        background: var(--primary-color);
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
    `;

    // Add event listeners
    modal.querySelector('.cancel-btn').addEventListener('click', () => {
        modal.remove();
    });

    modal.querySelector('.confirm-btn').addEventListener('click', () => {
        showNotification('Booking confirmed! We will contact you shortly with meeting details.', 'success');
        modal.remove();
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    document.body.appendChild(modal);
}

// Payment instructions modal
function showPaymentInstructions() {
    const modal = document.createElement('div');
    modal.className = 'payment-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3><i class="fas fa-credit-card"></i> Payment Instructions</h3>
            <div class="payment-summary">
                <div class="amount">Amount: <strong>Ksh 1,999</strong></div>
                <div class="mpesa-details">
                    <p><i class="fas fa-mobile-alt"></i> <strong>M-Pesa: 0707388274</strong></p>
                    <p>Account Name: <strong>Edison</strong></p>
                </div>
            </div>
            <div class="instructions">
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h4>M-Pesa Payment</h4>
                        <p>Send <strong>Ksh 1,999</strong> to:</p>
                        <div class="mpesa-number">0707388274</div>
                        <p>Account Name: <strong>Edison</strong></p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h4>Confirmation</h4>
                        <p>Screenshot the payment confirmation message from M-Pesa</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h4>Send Details</h4>
                        <p>Send the screenshot to <strong>0707388274</strong> via WhatsApp</p>
                        <p><em>Include your full name for identification</em></p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">4</div>
                    <div class="step-content">
                        <h4>Receive Confirmation</h4>
                        <p>You'll receive event details and meeting point information within 24 hours</p>
                    </div>
                </div>
            </div>
            <div class="contact-note">
                <p><i class="fas fa-phone"></i> <strong>For Booking & Inquiries: 0707388274</strong></p>
            </div>
            <div class="modal-actions">
                <button class="modal-btn" onclick="this.closest('.payment-modal').remove()">
                    <i class="fas fa-check"></i> Got It!
                </button>
            </div>
        </div>
    `;

    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 20px;
    `;

    modal.querySelector('.modal-content').style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 15px;
        max-width: 500px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
    `;

    modal.querySelector('.payment-summary').style.cssText = `
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        padding: 1.5rem;
        border-radius: 10px;
        margin: 1.5rem 0;
        text-align: center;
    `;

    modal.querySelector('.amount').style.cssText = `
        font-size: 1.3rem;
        margin-bottom: 1rem;
    `;

    modal.querySelector('.mpesa-number').style.cssText = `
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0.5rem 0;
        color: var(--accent-color);
    `;

    modal.querySelector('.contact-note').style.cssText = `
        background: var(--background-light);
        padding: 1rem;
        border-radius: 10px;
        margin: 1.5rem 0;
        text-align: center;
        border-left: 4px solid var(--secondary-color);
    `;

    modal.querySelector('.modal-btn').style.cssText = `
        background: var(--primary-color);
        color: white;
        border: none;
        padding: 12px 30px;
        border-radius: 25px;
        cursor: pointer;
        font-weight: 600;
        transition: var(--transition);
        width: 100%;
        font-size: 1.1rem;
    `;

    modal.querySelector('.modal-btn').addEventListener('mouseenter', function() {
        this.style.background = 'var(--secondary-color)';
    });

    modal.querySelector('.modal-btn').addEventListener('mouseleave', function() {
        this.style.background = 'var(--primary-color)';
    });

    document.body.appendChild(modal);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// Add CSS for notifications and animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .notification button {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .page-transition {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
    }
    
    .page-loaded .page-transition {
        opacity: 1;
        transform: translateY(0);
    }
    
    .event-started {
        text-align: center;
        background: rgba(255, 255, 255, 0.95);
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    }

    :root {
        --primary-color: #2c5530;
        --secondary-color: #ff6b35;
        --accent-color: #f4a261;
        --background-light: #f8f9fa;
        --white: #ffffff;
        --transition: all 0.3s ease;
    }
`;
document.head.appendChild(notificationStyles);

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('The Avinas Adventures website loaded successfully!');

    // Add loading animation removal
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Page transition
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

// Mark page as loaded
window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
});