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

// Whistling Morans Countdown - Real-time to November 8, 2024 4:00 PM
function updateCountdown() {
    const eventDate = new Date('November 8, 2024 16:00:00 GMT+0300'); // 4PM East Africa Time
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
                    <p style="font-size: 1.2rem;">Get ready for an amazing time at Whistling Morans!</p>
                </div>
            `;
        }
    }
}

// Initialize countdown
let countdownTimer;
if (document.querySelector('.whistling-hero')) {
    updateCountdown();
    countdownTimer = setInterval(updateCountdown, 1000);
}

// Whistling Morans booking function
function bookWhistlingMorans() {
    const modal = document.createElement('div');
    modal.className = 'booking-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Book Whistling Morans Pool Party</h3>
            <p><strong>Date:</strong> November 8th, 2024</p>
            <p><strong>Time:</strong> Meet at 4:00 PM</p>
            <p><strong>Location:</strong> Along Mombasa Road</p>
            <p><strong>Price:</strong> Ksh 1,999</p>
            <div class="event-activities">
                <h4>Activities Included:</h4>
                <ul>
                    <li>Pool Party Access</li>
                    <li>Live DJ Performance</li>
                    <li>Premium Drinks & Liquor</li>
                    <li>Professional Photography</li>
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
        animation: slideInUp 0.3s ease;
    `;

    modal.querySelector('.cancel-btn').style.cssText = `
        background: #ccc;
        color: #333;
        border: none;
        padding: 12px 25px;
        border-radius: 5px;
        cursor: pointer;
        margin-right: 1rem;
    `;

    modal.querySelector('.confirm-btn').style.cssText = `
        background: var(--primary-color);
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 5px;
        cursor: pointer;
    `;

    // Add event listeners
    modal.querySelector('.cancel-btn').addEventListener('click', () => {
        modal.remove();
    });

    modal.querySelector('.confirm-btn').addEventListener('click', () => {
        alert(`Booking confirmed for Whistling Morans Pool Party! We'll contact you soon with meeting details.`);
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

// Sticker functionality
let currentSticker = '';

function openStickerModal(stickerId) {
    currentSticker = stickerId;
    const modal = document.getElementById('stickerModal');
    const modalImage = document.getElementById('modalStickerImage');
    const modalTitle = document.getElementById('modalTitle');
    
    // Set modal content based on sticker
    const stickers = {
        'whistling-morans': {
            image: 'images/whistling-morans-sticker.jpeg',
            title: 'Whistling Morans Pool Party'
        },
        'mountain-trek': {
            image: 'images/mountain-trek-sticker.jpeg',
            title: 'Mountain Trek Adventure'
        },
        'beach-vibes': {
            image: 'images/beach-vibes-sticker.jpeg',
            title: 'Beach Vibes'
        },
        'safari-adventure': {
            image: 'images/safari-adventure-sticker.jpeg',
            title: 'Safari Adventure'
        },
        'kenya-explorer': {
            image: 'images/kenya-explorer-sticker.jpeg',
            title: 'Kenya Explorer'
        },
        'adventure-crew': {
            image: 'images/adventure-crew-sticker.jpeg',
            title: 'Adventure Crew'
        }
    };
    
    modalImage.src = stickers[stickerId].image;
    modalTitle.textContent = stickers[stickerId].title;
    modal.classList.add('active');
}

function closeStickerModal() {
    document.getElementById('stickerModal').classList.remove('active');
}

function downloadSticker(stickerId) {
    // In a real implementation, this would trigger file download
    showNotification(`Downloading ${stickerId.replace('-', ' ')} sticker!`, 'success');
    // You would typically have: window.location.href = `stickers/${stickerId}.png`;
    
    // Simulate download delay
    setTimeout(() => {
        showNotification('Sticker downloaded successfully!', 'success');
    }, 1000);
}

function shareSticker(stickerId) {
    if (navigator.share) {
        navigator.share({
            title: '6ixx Adventures Sticker',
            text: 'Check out this awesome adventure sticker from 6ixx Adventures!',
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        showNotification('Share this sticker with your friends! Copy the link: ' + window.location.href, 'info');
    }
}

// Close sticker modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const stickerModal = document.getElementById('stickerModal');
    if (stickerModal) {
        stickerModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeStickerModal();
            }
        });
    }
});

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
`;
document.head.appendChild(notificationStyles);

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('6ixx Adventures website loaded successfully!');

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