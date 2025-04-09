document.addEventListener('DOMContentLoaded', () => {
    // Get WordPress admin bar height
    const adminBarHeight =
        document.getElementById('wpadminbar')?.offsetHeight || 0;

    // Use WordPress localized data for image URLs
    const startingComputerUrl =
        clubEcolatinaData.pluginUrl + clubEcolatinaData.images.computer;

    // Marquee animation
    const marqueeContainer = document.querySelector('.marquee-container');
    if (marqueeContainer) {
        const marqueeContent =
            marqueeContainer.querySelector('.marquee-content');
        const clone = marqueeContent.cloneNode(true);
        marqueeContainer.appendChild(clone);

        Motion.animate(
            marqueeContent,
            {
                transform: ['translateX(0)', 'translateX(-100%)'],
            },
            {
                duration: 20,
                repeat: Infinity,
                easing: 'linear',
            }
        );

        Motion.animate(
            clone,
            {
                transform: ['translateX(100%)', 'translateX(0)'],
            },
            {
                duration: 20,
                repeat: Infinity,
                easing: 'linear',
            }
        );
    }

    // Scroll animations
    window.addEventListener('scroll', () => {
        // Adjust scroll position for admin bar
        const scrollPosition = window.scrollY + adminBarHeight;
        const windowHeight = window.innerHeight;

        // Title parallax
        const title = document.querySelector('.title');
        if (title) {
            const parallaxValue = scrollPosition * 0.5;
            Motion.animate(
                title,
                {
                    transform: `translateY(${parallaxValue}px)`,
                },
                { duration: 0 }
            );
        }

        // CTA button visibility
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            const buttonRect = ctaButton.getBoundingClientRect();
            const isVisible =
                buttonRect.top < windowHeight && buttonRect.bottom > 0;

            if (isVisible) {
                Motion.animate(
                    ctaButton,
                    {
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
                    {
                        duration: 0.5,
                        easing: 'ease-out',
                    }
                );
            }
        }

        // HUD grid and computer container animations
        const hudGrid = document.querySelector('.hud-grid');
        const computerContainer = document.querySelector('.computer-container');

        if (hudGrid && computerContainer) {
            const hudRect = hudGrid.getBoundingClientRect();
            const isHudVisible =
                hudRect.top < windowHeight && hudRect.bottom > 0;

            if (isHudVisible) {
                const progress = 1 - hudRect.top / windowHeight;
                const scale = 0.8 + progress * 0.2;
                const opacity = Math.min(1, progress * 2);

                Motion.animate(
                    hudGrid,
                    {
                        opacity: opacity,
                        scale: scale,
                    },
                    { duration: 0 }
                );

                Motion.animate(
                    computerContainer,
                    {
                        opacity: opacity,
                        scale: scale,
                    },
                    { duration: 0 }
                );
            }
        }
    });

    // Trigger initial scroll event to set initial states
    window.dispatchEvent(new Event('scroll'));
});
