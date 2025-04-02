import {
    animate,
    spring,
    stagger,
} from 'https://cdn.jsdelivr.net/npm/motion@latest/+esm';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // const startingComputer =
    //     document.querySelector('#starting-computer');
    const benefitComputer = document.querySelector('#benefit-computer');
    const logo = document.querySelector('.logo');
    const hudGrid = document.querySelector('.hud-grid');
    const title = document.querySelector('.title');
    const titleText = document.querySelector('.title h1');
    const ondas = document.querySelector('.title img');
    const subheader = document.querySelector('.subheader');
    const benefitSubtitle = document.querySelector('#benefit-subtitle');
    const benefitDescription = document.querySelector(
        '#benefit-description-text'
    );
    const startingComputerUrl =
        'https://res.cloudinary.com/duykgwmak/image/upload/v1743475677/compu1_kihhid.webp';
    // Set initial states
    hudGrid.style.opacity = '0';
    benefitDescription.style.opacity = '0';
    benefitComputer.style.opacity = '1';
    benefitComputer.src = startingComputerUrl;
    benefitComputer.style.transform = 'translateY(10%)';
    // startingComputer.style.opacity = '1';

    // Function to handle scroll animation
    function handleScroll() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollPercentage = Math.min(scrollPosition / windowHeight, 1);

        // console.log('Scroll position:', scrollPosition);
        // console.log('Window height:', windowHeight);
        // console.log('Scroll percentage:', scrollPercentage);

        // Fade out title and ondas
        animate(
            titleText,
            {
                opacity: 1 - scrollPercentage,
                y: -100 * scrollPercentage,
            },
            { duration: 0.3 }
        );
        animate(
            ondas,
            {
                opacity: Math.max(0.5 - scrollPercentage, 0),
                y: -100 * scrollPercentage,
                scale: Math.min(1 + scrollPercentage * 0.75, 1.2),
            },
            { duration: 0.2 }
        );
        animate(
            subheader,
            {
                opacity: 1 - scrollPercentage,
            },
            { duration: 0.3 }
        );

        // Fade in hud-grid
        animate(
            hudGrid,
            {
                opacity: scrollPercentage,
            },
            { duration: 0.3 }
        );
        animate(
            benefitSubtitle,
            { opacity: scrollPercentage },
            { duration: 0.2 }
        );
        animate(
            benefitDescription,
            { opacity: scrollPercentage },
            { duration: 0.2 }
        );

        animate(
            benefitComputer,
            {
                opacity: scrollPercentage * 0.8 + 1, // Start at 0.2 opacity and increase to 1.0
                filter: `brightness(${100 + (scrollPercentage - 0.1) * 35}%)`, // Brighter at start, normal at end
                transform: `translateY(${scrollPercentage * -5}%)`,
            },
            { duration: 0.3 }
        );
        // animate(
        //     startingComputer,
        //     {
        //         opacity: 1,
        //     },
        //     { duration: 0.3 }
        // );
        if (scrollPercentage < 0.25) {
            benefitComputer.src = startingComputerUrl;
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});
