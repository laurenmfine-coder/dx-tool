/* =====================================================
   MechanismX - Main JavaScript
   Handles interactivity for the learning platform
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {
    initLayerTabs();
    initSelfCheck();
    initSmoothScroll();
    initAnimations();
});

/* =====================================================
   LAYER TAB NAVIGATION
   ===================================================== */
function initLayerTabs() {
    const tabs = document.querySelectorAll('.layer-tab');
    const sections = document.querySelectorAll('.layer-section');
    
    if (!tabs.length) return;
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetLayer = this.dataset.layer;
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to section
            const targetSection = document.getElementById(targetLayer);
            if (targetSection) {
                const navHeight = document.querySelector('.main-nav')?.offsetHeight || 0;
                const tabsHeight = document.querySelector('.layer-tabs')?.offsetHeight || 0;
                const offset = navHeight + tabsHeight + 20;
                
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active tab on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const navHeight = document.querySelector('.main-nav')?.offsetHeight || 0;
        const offset = navHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const sectionId = section.id;
                tabs.forEach(tab => {
                    tab.classList.remove('active');
                    if (tab.dataset.layer === sectionId) {
                        tab.classList.add('active');
                    }
                });
            }
        });
    });
}

/* =====================================================
   SELF-CHECK REVEAL FUNCTIONALITY
   ===================================================== */
function initSelfCheck() {
    // This is handled by inline onclick, but we can enhance it here
}

function toggleAnswer(button) {
    const question = button.closest('.self-check-question');
    const answer = question.querySelector('.self-check-answer');
    
    if (answer.classList.contains('show')) {
        answer.classList.remove('show');
        button.textContent = 'Reveal Answer';
    } else {
        answer.classList.add('show');
        button.textContent = 'Hide Answer';
    }
}

/* =====================================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ===================================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.main-nav')?.offsetHeight || 0;
                const offset = navHeight + 20;
                
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* =====================================================
   SCROLL ANIMATIONS
   ===================================================== */
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe content cards
    document.querySelectorAll('.content-card, .connection-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

/* =====================================================
   PROGRESS TRACKING (Future Enhancement)
   ===================================================== */
function trackProgress(moduleId, sectionId) {
    // Could integrate with ReasonDx or local storage
    const progress = JSON.parse(localStorage.getItem('mechanismx_progress') || '{}');
    
    if (!progress[moduleId]) {
        progress[moduleId] = {
            sections: [],
            lastVisited: null
        };
    }
    
    if (!progress[moduleId].sections.includes(sectionId)) {
        progress[moduleId].sections.push(sectionId);
    }
    
    progress[moduleId].lastVisited = new Date().toISOString();
    
    localStorage.setItem('mechanismx_progress', JSON.stringify(progress));
}

/* =====================================================
   KEYBOARD NAVIGATION
   ===================================================== */
document.addEventListener('keydown', function(e) {
    // Navigate between layers with arrow keys when tabs are focused
    if (document.activeElement?.classList.contains('layer-tab')) {
        const tabs = Array.from(document.querySelectorAll('.layer-tab'));
        const currentIndex = tabs.indexOf(document.activeElement);
        
        if (e.key === 'ArrowRight' && currentIndex < tabs.length - 1) {
            tabs[currentIndex + 1].focus();
            tabs[currentIndex + 1].click();
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            tabs[currentIndex - 1].focus();
            tabs[currentIndex - 1].click();
        }
    }
});

/* =====================================================
   UTILITY FUNCTIONS
   ===================================================== */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Make toggleAnswer available globally
window.toggleAnswer = toggleAnswer;
