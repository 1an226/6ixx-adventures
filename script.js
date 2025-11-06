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
    // Remove any existing notifications first
    document.querySelectorAll('.notification').forEach(notification => {
        notification.remove();
    });

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Show destination details
function showDestination(type) {
    const destinations = {
        mountain: {
            name: 'Maiyan Resort - Nanyuki',
            price: 'Ksh 3,999',
            description: 'Trek through the majestic Mt. Kenya with experienced guides'
        },
        beach: {
            name: 'Sarova Whitesands - Mombasa',
            price: 'Ksh 4,999',
            description: 'Luxury beachfront accommodation with water activities'
        },
        camping: {
            name: 'Salt Lick Safari Lodge - Taita',
            price: 'Ksh 3,850',
            description: 'Authentic camping experience in pristine wilderness'
        }
    };

    const dest = destinations[type];
    if (dest) {
        showNotification(`Exploring ${dest.name} - ${dest.price}`, 'info');
        // In a real app, you would redirect to a booking page
        setTimeout(() => {
            // window.location.href = `destinations.html?type=${type}`;
        }, 1000);
    }
}

// Scroll to details function
function scrollToDetails() {
    const detailsSection = document.getElementById('eventDetails');
    if (detailsSection) {
        detailsSection.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
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
                    <h3>🎉 Event Starting Soon! 🎉</h3>
                    <p>Get ready for an amazing Pool Party at Whistling Moran!</p>
                </div>
            `;
        }
    }
}

// Initialize countdown
let countdownTimer;
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.sticker-hero')) {
        updateCountdown();
        countdownTimer = setInterval(updateCountdown, 1000);
    }
});

// Whistling Morans booking function - SIMPLIFIED VERSION
function bookWhistlingMorans() {
    showNotification('📞 Call 0707388274 to book your spot!', 'success');
}

// Payment instructions modal - SIMPLIFIED VERSION
function showPaymentInstructions() {
    showNotification('💳 Send Ksh 2,499 to MPESA: 0707388274 (Edison)', 'info');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'var(--white)';
            navbar.style.backdropFilter = 'none';
        }
    }
});

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