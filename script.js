document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    let lastScrollTop = 0;
    let ticking = false;
    
    function updateNavbar() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
    
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        animateOnScroll.observe(card);
    });
    
    const brandCards = document.querySelectorAll('.brand-logo-card');
    brandCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        animateOnScroll.observe(card);
    });
    
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.05}s`;
    });
    
    function createParticles() {
        const particlesBg = document.getElementById('particles-bg');
        if (!particlesBg) return;
        
        const particleCount = window.innerWidth > 768 ? 50 : 25;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 3 + 1;
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(59, 130, 246, ${Math.random() * 0.5 + 0.2});
                border-radius: 50%;
                left: ${startX}%;
                top: ${startY}%;
                animation: particleFloat ${duration}s ${delay}s infinite ease-in-out;
                pointer-events: none;
            `;
            
            particlesBg.appendChild(particle);
        }
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particleFloat {
                0%, 100% {
                    transform: translate(0, 0) scale(1);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0.5);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    createParticles();
    
    const heroButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    heroButtons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                left: ${x}px;
                top: ${y}px;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: translate(-50%, -50%);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        const diffX = mouseX - cursorX;
        const diffY = mouseY - cursorY;
        
        cursorX += diffX * 0.1;
        cursorY += diffY * 0.1;
        
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenterX = rect.left + rect.width / 2;
            const cardCenterY = rect.top + rect.height / 2;
            
            const distanceX = cursorX - cardCenterX;
            const distanceY = cursorY - cardCenterY;
            
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            
            if (distance < 300) {
                const intensity = (300 - distance) / 300;
                const moveX = (distanceX / distance) * intensity * 10;
                const moveY = (distanceY / distance) * intensity * 10;
                
                card.style.transform = `translate(${moveX}px, ${moveY}px) translateY(-10px)`;
            } else {
                card.style.transform = '';
            }
        });
        
        requestAnimationFrame(animateCursor);
    }
    
    if (window.innerWidth > 768) {
        animateCursor();
    }
    
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.gtag) {
                gtag('event', 'click_to_call', {
                    'event_category': 'engagement',
                    'event_label': 'Phone Call Click'
                });
            }
        });
    });
    
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.gtag) {
                gtag('event', 'email_click', {
                    'event_category': 'engagement',
                    'event_label': 'Email Click'
                });
            }
        });
    });
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (window.gtag) {
                const tabName = this.querySelector('span').textContent;
                gtag('event', 'tab_switch', {
                    'event_category': 'engagement',
                    'event_label': tabName
                });
            }
        });
    });
    
    let scrollPercentage = 0;
    
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        scrollPercentage = (window.scrollY / documentHeight) * 100;
        
        if (scrollPercentage > 25 && !sessionStorage.getItem('scroll_25')) {
            sessionStorage.setItem('scroll_25', 'true');
            if (window.gtag) {
                gtag('event', 'scroll_depth', {
                    'event_category': 'engagement',
                    'event_label': '25%'
                });
            }
        }
        
        if (scrollPercentage > 50 && !sessionStorage.getItem('scroll_50')) {
            sessionStorage.setItem('scroll_50', 'true');
            if (window.gtag) {
                gtag('event', 'scroll_depth', {
                    'event_category': 'engagement',
                    'event_label': '50%'
                });
            }
        }
        
        if (scrollPercentage > 75 && !sessionStorage.getItem('scroll_75')) {
            sessionStorage.setItem('scroll_75', 'true');
            if (window.gtag) {
                gtag('event', 'scroll_depth', {
                    'event_category': 'engagement',
                    'event_label': '75%'
                });
            }
        }
    });
    
    const pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    
    if (window.gtag) {
        gtag('event', 'timing_complete', {
            'name': 'load',
            'value': pageLoadTime,
            'event_category': 'Page Performance'
        });
    }
    
    console.log('%c🚗 VAG Diagnostika', 'font-size: 24px; font-weight: bold; color: #3b82f6;');
    console.log('%cWeb vytvořen s ❤️ pro profesionální diagnostiku', 'font-size: 14px; color: #94a3b8;');
    console.log('%cOriginální VCDS HEX-V2 Hardware', 'font-size: 12px; color: #10b981; font-weight: bold;');
});
