/* ============================================
   VAG DIAGNOSTIKA - 2026 JAVASCRIPT
   GSAP Animations | Anime.js | Interactive Elements
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // GSAP Registration
    gsap.registerPlugin(ScrollTrigger);
    
    /* ==========================================
       MOBILE MENU TOGGLE
       ========================================== */
    
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        const menuLinks = navLinks.querySelectorAll('.nav-link');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    /* ==========================================
       NAVBAR - Smart Hide/Show with Glassmorphism
       ========================================== */
    
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    let ticking = false;
    
    function updateNavbar() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 150) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            gsap.to(navbar, { 
                y: -100, 
                duration: 0.3, 
                ease: 'power2.out' 
            });
        } else {
            gsap.to(navbar, { 
                y: 0, 
                duration: 0.3, 
                ease: 'power2.out' 
            });
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
    
    /* ==========================================
       SMOOTH SCROLL with GSAP
       ========================================== */
    
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
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: { y: targetPosition, autoKill: false },
                    ease: 'power3.inOut'
                });
            }
        });
    });
    
    /* ==========================================
       3D PARTICLE SYSTEM - Advanced Animation
       ========================================== */
    
    function createAdvancedParticles() {
        const particlesBg = document.getElementById('particles-bg');
        if (!particlesBg) return;
        
        const particleCount = window.innerWidth > 768 ? 80 : 40;
        const colors = ['#00d4aa', '#0095ff', '#ff6b35'];
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle-3d';
            
            const size = Math.random() * 4 + 1;
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const endX = startX + (Math.random() * 40 - 20);
            const endY = startY + (Math.random() * 40 - 20);
            const duration = Math.random() * 15 + 10;
            const delay = Math.random() * 5;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: 50%;
                left: ${startX}%;
                top: ${startY}%;
                pointer-events: none;
                box-shadow: 0 0 ${size * 4}px ${color};
            `;
            
            particlesBg.appendChild(particle);
            
            gsap.to(particle, {
                x: `${endX - startX}%`,
                y: `${endY - startY}%`,
                opacity: 0.8,
                duration: duration,
                delay: delay,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
            
            gsap.to(particle, {
                scale: Math.random() * 1.5 + 0.5,
                duration: Math.random() * 3 + 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }
    }
    
    createAdvancedParticles();
    
    /* ==========================================
       HERO SECTION - Advanced Animations
       ========================================== */
    
    // Animate hero elements on load
    gsap.from('.hero-badge', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'back.out(1.7)'
    });
    
    gsap.from('.hero-title .title-line', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-brands .brand-item', {
        scale: 0,
        opacity: 0,
        rotation: 360,
        duration: 0.8,
        stagger: 0.1,
        delay: 1.2,
        ease: 'back.out(1.7)'
    });
    
    gsap.from('.hero-description', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 1.8,
        ease: 'power2.out'
    });
    
    gsap.from('.hero-buttons a', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 2.2,
        ease: 'back.out(1.7)'
    });
    
    // Parallax effect for hero orbs
    gsap.to('.orb-1', {
        y: -100,
        x: 50,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });
    
    gsap.to('.orb-2', {
        y: 100,
        x: -50,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });
    
    gsap.to('.orb-3', {
        y: -80,
        x: -40,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });
    
    /* ==========================================
       BRAND CARDS - Anime.js Stagger Animation
       ========================================== */
    
    anime({
        targets: '.brand-logo-card',
        translateY: [50, 0],
        opacity: [0, 1],
        scale: [0.8, 1],
        rotate: [10, 0],
        delay: anime.stagger(100, {start: 500}),
        duration: 1200,
        easing: 'spring(1, 80, 10, 0)'
    });
    
    // Hover animation with Anime.js
    document.querySelectorAll('.brand-logo-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.08,
                duration: 300,
                easing: 'easeOutCubic'
            });
            
            anime({
                targets: this.querySelector('i, svg'),
                rotate: [0, 360],
                duration: 800,
                easing: 'easeInOutQuad'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });
    
    /* ==========================================
       SERVICE CARDS - GSAP ScrollTrigger + 3D Tilt
       ========================================== */
    
    gsap.utils.toArray('.service-card').forEach((card, index) => {
        gsap.from(card, {
            y: 100,
            opacity: 0,
            rotation: index % 2 === 0 ? -5 : 5,
            scale: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'top 50%',
                scrub: 1
            }
        });
        
        // 3D Tilt Effect on Mouse Move
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            gsap.to(this, {
                rotationX: rotateX,
                rotationY: rotateY,
                duration: 0.3,
                ease: 'power2.out',
                transformPerspective: 1000
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
    
    // Service icon pulse animation
    anime({
        targets: '.icon-pulse',
        scale: [1, 1.2],
        opacity: [0.5, 0],
        duration: 2000,
        loop: true,
        easing: 'easeInOutQuad'
    });
    
    /* ==========================================
       TABS - Interactive Model Selector
       ========================================== */
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Visual feedback with Anime.js
            anime({
                targets: this,
                scale: [0.95, 1.05, 1],
                duration: 400,
                easing: 'easeOutElastic(1, .6)'
            });
            
            // Ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(0, 212, 170, 0.6);
                width: 100px;
                height: 100px;
                margin-top: -50px;
                margin-left: -50px;
                top: ${event.clientY - this.getBoundingClientRect().top}px;
                left: ${event.clientX - this.getBoundingClientRect().left}px;
                animation: ripple-effect 0.8s;
                pointer-events: none;
            `;
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 800);
        });
    });
    
    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-effect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    /* ==========================================
       FEATURE ITEMS - Stagger Animation
       ========================================== */
    
    gsap.utils.toArray('.feature-item').forEach((item, index) => {
        gsap.from(item, {
            x: -50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.05,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    /* ==========================================
       CTA SECTION - Attention-Grabbing Animation
       ========================================== */
    
    gsap.from('.cta-icon', {
        scale: 0,
        rotation: 360,
        duration: 1.2,
        ease: 'back.out(2)',
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 70%'
        }
    });
    
    gsap.from('.cta-content h2', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 70%'
        }
    });
    
    gsap.from('.cta-large-btn', {
        scale: 0,
        duration: 0.8,
        delay: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 70%'
        }
    });
    
    // Continuous pulse for CTA button
    gsap.to('.cta-large-btn', {
        scale: 1.05,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
    
    /* ==========================================
       MAGNETIC CURSOR EFFECT for Buttons
       ========================================== */
    
    const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button, .cta-large-btn');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(this, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });
    
    /* ==========================================
       KINETIC TYPOGRAPHY - Text Reveal Animation
       ========================================== */
    
    const splitText = (element) => {
        const text = element.textContent;
        element.innerHTML = '';
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            element.appendChild(span);
        });
    };
    
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const lines = heroTitle.querySelectorAll('.title-line');
        lines.forEach(line => {
            if (!line.classList.contains('gradient-text')) {
                splitText(line);
                anime({
                    targets: line.querySelectorAll('span'),
                    translateY: [100, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(30, {start: 800}),
                    duration: 800,
                    easing: 'spring(1, 80, 10, 0)'
                });
            }
        });
    }
    
    /* ==========================================
       SCROLL PROGRESS INDICATOR
       ========================================== */
    
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #00d4aa, #0095ff, #ff6b35);
        z-index: 9999;
        transform-origin: left;
        box-shadow: 0 0 20px rgba(0, 212, 170, 0.6);
    `;
    document.body.appendChild(progressBar);
    
    gsap.to(progressBar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
        }
    });
    
    /* ==========================================
       INTERSECTION OBSERVER - Element Visibility
       ========================================== */
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section-header, .service-card, .feature-item').forEach(el => {
        observer.observe(el);
    });
    
    /* ==========================================
       ANALYTICS & EVENT TRACKING
       ========================================== */
    
    // Track phone clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            if (window.gtag) {
                gtag('event', 'click_to_call', {
                    'event_category': 'engagement',
                    'event_label': 'Phone Call Click',
                    'value': 1
                });
            }
            console.log('📞 Phone click tracked');
        });
    });
    
    // Track email clicks
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', function() {
            if (window.gtag) {
                gtag('event', 'email_click', {
                    'event_category': 'engagement',
                    'event_label': 'Email Click'
                });
            }
            console.log('📧 Email click tracked');
        });
    });
    
    // Track scroll depth
    let scrollDepth = {
        '25': false,
        '50': false,
        '75': false,
        '100': false
    };
    
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = (window.scrollY / documentHeight) * 100;
        
        Object.keys(scrollDepth).forEach(depth => {
            if (scrolled >= parseInt(depth) && !scrollDepth[depth]) {
                scrollDepth[depth] = true;
                if (window.gtag) {
                    gtag('event', 'scroll_depth', {
                        'event_category': 'engagement',
                        'event_label': `${depth}%`,
                        'value': parseInt(depth)
                    });
                }
                console.log(`📊 Scroll depth: ${depth}%`);
            }
        });
    });
    
    /* ==========================================
       PERFORMANCE MONITORING
       ========================================== */
    
    if (window.performance) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                const connectTime = perfData.responseEnd - perfData.requestStart;
                const renderTime = perfData.domComplete - perfData.domLoading;
                
                console.log('%c⚡ VAG DIAGNOSTIKA 2026', 'font-size: 20px; font-weight: bold; color: #00d4aa;');
                console.log(`%c🚀 Page Load Time: ${pageLoadTime}ms`, 'color: #0095ff;');
                console.log(`%c⚙️ Server Response: ${connectTime}ms`, 'color: #ff6b35;');
                console.log(`%c🎨 Render Time: ${renderTime}ms`, 'color: #00d4aa;');
                
                if (window.gtag) {
                    gtag('event', 'timing_complete', {
                        'name': 'load',
                        'value': pageLoadTime,
                        'event_category': 'Performance'
                    });
                }
            }, 0);
        });
    }
    
    /* ==========================================
       EASTER EGG - Console Art
       ========================================== */
    
    console.log('%c' + `
    ╔══════════════════════════════════════╗
    ║   VAG DIAGNOSTIKA - 2026 EDITION    ║
    ║   Powered by: React + GSAP + Anime  ║
    ║   Design: High-Tech Dark Mode       ║
    ║   🚗 Originální VCDS HEX-V2 🚗      ║
    ╚══════════════════════════════════════╝
    `, 'color: #00d4aa; font-family: monospace; font-size: 12px;');
    
    console.log('%cŽádný čínský klon. Pouze originální hardware.', 'font-size: 14px; font-weight: bold; color: #ff6b35;');
    
    /* ==========================================
       ACCESSIBILITY - Keyboard Navigation
       ========================================== */
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
    
    // Focus visible for keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });
    
    /* ==========================================
       FAQ ACCORDION
       ========================================== */

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (!question || !answer) return;
        
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            
            faqItems.forEach(other => {
                other.classList.remove('open');
                const otherAnswer = other.querySelector('.faq-answer');
                if (otherAnswer) otherAnswer.style.maxHeight = '0';
            });
            
            if (!isOpen) {
                item.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 50 + 'px';
            }
        });
    });

    gsap.from('.faq-item', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.faq-grid',
            start: 'top 80%'
        }
    });

    gsap.from('.trust-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
            trigger: '.trust-grid',
            start: 'top 80%'
        }
    });

    /* ==========================================
       CONTACT FORM HANDLER
       ========================================== */
    
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.form-submit-btn');
            const originalBtnText = submitBtn.innerHTML;
            
            // Disable button and show loading
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Odesílám...</span>';
            
            // Get form data
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                email: formData.get('email') || 'Neuvedeno',
                car: formData.get('car'),
                service: formData.get('service'),
                message: formData.get('message') || 'Bez zprávy'
            };
            
            // Create email body
            const emailBody = `
Nová poptávka z webu VH Diagnostika
═══════════════════════════════════

KONTAKTNÍ ÚDAJE:
━━━━━━━━━━━━━━━━
Jméno: ${data.name}
Telefon: ${data.phone}
Email: ${data.email}

VOZIDLO:
━━━━━━━━
Model: ${data.car}

SLUŽBA:
━━━━━━━
${data.service}

ZPRÁVA:
━━━━━━━
${data.message}

═══════════════════════════════════
Odesláno: ${new Date().toLocaleString('cs-CZ')}
            `.trim();
            
            // Create mailto link (fallback method)
            const mailtoLink = `mailto:vita.hanslik@seznam.cz?subject=Poptávka - ${data.name} - ${data.car}&body=${encodeURIComponent(emailBody)}`;
            
            // Simulate sending (in production, you'd use a backend service)
            setTimeout(() => {
                // Show success message
                formMessage.className = 'form-message success';
                formMessage.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <strong>Děkujeme za poptávku!</strong><br>
                    Brzy se vám ozveme na číslo ${data.phone}
                `;
                
                // Scroll to message
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                // Reset form
                contactForm.reset();
                
                // Re-enable button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                
                // Open mailto as fallback
                window.location.href = mailtoLink;
                
                // Track event
                if (window.gtag) {
                    gtag('event', 'form_submit', {
                        'event_category': 'engagement',
                        'event_label': 'Contact Form',
                        'value': 1
                    });
                }
                
                console.log('📧 Formulář odeslán:', data);
                
                // Hide message after 10 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 10000);
                
            }, 1500);
        });
        
        // Real-time validation
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 9) value = value.slice(0, 9);
                
                if (value.length >= 3) {
                    e.target.value = '+420 ' + value.slice(0, 3) + (value.length > 3 ? ' ' + value.slice(3, 6) : '') + (value.length > 6 ? ' ' + value.slice(6) : '');
                } else if (value.length > 0) {
                    e.target.value = '+420 ' + value;
                }
            });
        }
        
        // Animate form fields on scroll
        gsap.from('.form-group', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.modern-form',
                start: 'top 80%'
            }
        });
        
        gsap.from('.info-card', {
            x: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.form-info',
                start: 'top 80%'
            }
        });
    }
    
    /* ==========================================
       PRICING CARDS ANIMATION
       ========================================== */
    
    gsap.from('.pricing-card', {
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.pricing-grid',
            start: 'top 75%'
        }
    });
    
    gsap.from('.sfd-warning', {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.sfd-warning',
            start: 'top 80%'
        }
    });
    
    console.log('✅ VH Diagnostika 2026 - Initialized Successfully');
});

/* ==========================================
   GSAP ScrollTo Plugin (for smooth scrolling)
   ========================================== */
gsap.registerPlugin({
    name: 'scrollTo',
    init(target, value) {
        this.target = target;
        this.value = value;
    },
    render(progress) {
        if (progress === 1) {
            window.scrollTo(0, this.value.y);
        }
    }
});
