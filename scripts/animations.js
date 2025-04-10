import {
    animate,
    spring,
    stagger,
    scroll,
} from 'https://cdn.jsdelivr.net/npm/motion@latest/+esm';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // const startingComputer =
    //     document.querySelector('#starting-computer');
    const scrollContainer = document.querySelector('.scroll-container');
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
    const benefitDescriptionContainer = document.querySelector(
        '#benefit-description'
    );
    const startingComputerUrl =
        'https://res.cloudinary.com/duykgwmak/image/upload/v1743475677/compu1_kihhid.webp';
    // Set initial states
    hudGrid.style.opacity = '0';
    benefitDescriptionContainer.style.opacity = '0';
    benefitDescription.style.opacity = '0';
    benefitComputer.style.opacity = '1';
    benefitComputer.src = startingComputerUrl;
    // benefitComputer.style.transform = 'translateY(10%)';
    // startingComputer.style.opacity = '1';

    scroll((scroll, info) => {
        console.log('scroll', scroll, info);
        animate(
            titleText,
            {
                opacity: 1 - scroll,
            },
            { duration: 0.3 }
        );
        animate(
            ondas,
            {
                opacity: Math.max(0.5 - scroll, 0),
                y: -100 * scroll,
                scale: Math.min(1 + scroll * 0.75, 1.2),
            },
            { duration: 0.2 }
        );
        animate(
            hudGrid,
            {
                opacity: scroll,
            },
            { duration: 0.3, offset: [0, 0.5] }
        );
        animate(benefitSubtitle, { opacity: scroll }, { duration: 0.3 });
        animate(benefitDescription, { opacity: scroll }, { duration: 0.3 });
        animate(
            benefitDescriptionContainer,
            { opacity: scroll },
            { duration: 0.3 }
        );
    }, scrollContainer);
});
