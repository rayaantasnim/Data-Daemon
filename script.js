        document.addEventListener('DOMContentLoaded', () => {
            // REGISTER GSAP SCROLLTRIGGER PLUGIN
            gsap.registerPlugin(ScrollTrigger);

            // OFF-CANVAS OVERLAY NAVIGATION TIMELINE
            const overlay = document.getElementById('nav-overlay');
            const openBtn = document.getElementById('hamburger-trigger');
            const closeBtn = document.getElementById('close-trigger');
            const navLinks = document.querySelectorAll('.nav-link');

            // Build GSAP Navigation Overlay Timeline
            const navTL = gsap.timeline({ paused: true, reversed: true });

            navTL.to(overlay, {
                duration: 0.5,
                autoAlpha: 1,
                x: '0%',
                ease: 'power3.inOut'
            })
            .from('.overlay-links li', {
                duration: 0.4,
                y: 30,
                opacity: 0,
                stagger: 0.1,
                ease: 'power2.out'
            }, '-=0.2');

            // Open Nav Event
            openBtn.addEventListener('click', () => {
                if (navTL.reversed()) {
                    navTL.play();
                }
            });

            // Close Nav Event
            closeBtn.addEventListener('click', () => {
                navTL.reverse();
            });

            // Close overlay on nav link click
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navTL.reverse();
                });
            });

            // GSAP SCROLLTRIGGER ANIMATIONS FOR SECTIONS & CARDS

            // Hero Animation
            gsap.from('.hero-text-block > *', {
                duration: 1.2,
                y: 40,
                opacity: 0,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: 'top 80%',
                    once: true
                }
            });

            gsap.from('.hero-image-wrapper', {
                duration: 1.2,
                scale: 0.95,
                opacity: 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: 'top 70%',
                    once: true
                }
            });

            // Pipeline Cards Animation (Loop over each card)
            const pipelineCards = document.querySelectorAll('.pipeline-card');
            pipelineCards.forEach((card) => {
                gsap.from(card, {
                    duration: 1.2,
                    y: 50,
                    opacity: 0,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        once: true
                    }
                });
            });

            // Characteristics Rows Animation (Loop over each row)
            const charRows = document.querySelectorAll('.char-row');
            charRows.forEach((row) => {
                gsap.from(row, {
                    duration: 1.2,
                    y: 45,
                    opacity: 0,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: row,
                        start: 'top 85%',
                        once: true
                    }
                });
            });

            // Conclusion Box Animation
            gsap.from('.conclusion-box', {
                duration: 1.2,
                y: 40,
                opacity: 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.conclusion-section',
                    start: 'top 80%',
                    once: true
                }
            });
        });
