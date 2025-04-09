#!/bin/bash

# Create dist directory if it doesn't exist
mkdir -p dist

# Download Motion.js to a temporary file
echo "Downloading Motion.js..."
curl -s https://cdn.jsdelivr.net/npm/motion@10.16.4/dist/motion.min.js > dist/temp-motion.js

# Start creating the final widget file
echo "Creating Elementor widget file..."

# Create the widget file with all components
cat > dist/elementor-widget.html << 'EOL'
<!-- Club Ecolatina Widget -->
<style>
/* Club Ecolatina Styles */
:root {
    --ecolatina-green: #00625d;
    --ecolatina-green-2: #34a19b;
    --ecolatina-aqua: #7bbfb7;
    --ecolatina-aqua-2: #b6f4ed;
    --ecolatina-light-gray: #f7f7f7;
    --ecolatina-dark-gray: #606060;
}

.scroll-container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    background-color: var(--ecolatina-light-gray);
    color: var(--ecolatina-green);
    font-family: Arial, sans-serif;
}

.title {
    text-align: center;
    padding: 2rem;
    opacity: 0;
}

.waves {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
}

.subheader {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0;
}

.computer-container {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    z-index: 2;
}

.computer-container img {
    width: 100%;
    height: auto;
    opacity: 0;
}

.hud-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
    z-index: 3;
}

.hud-item {
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.hud-item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.hud-item:hover {
    transform: scale(1.1);
}

.marquee-container {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    margin: 2rem 0;
}

.marquee-content {
    display: inline-block;
    white-space: nowrap;
    padding-right: 2rem;
}

.marquee-content span {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    opacity: 0.8;
    color: var(--ecolatina-dark-gray);
}

.cta {
    text-align: center;
    margin: 2rem 0;
    opacity: 0;
}

.cta button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background-color: var(--ecolatina-green);
    color: var(--ecolatina-light-gray);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.cta button:hover {
    transform: scale(1.1);
    background-color: var(--ecolatina-green-2);
}

@media (max-width: 1200px) {
    .computer-container {
        max-width: 600px;
    }
}

@media (max-width: 768px) {
    .computer-container {
        max-width: 400px;
    }
    .subheader {
        font-size: 1.2rem;
    }
}

@media (max-width: 480px) {
    .computer-container {
        max-width: 300px;
    }
    .subheader {
        font-size: 1rem;
    }
    .cta button {
        padding: 0.8rem 1.6rem;
        font-size: 1rem;
    }
}
</style>

<div class="scroll-container">
    <div class="title">
        <h1>Club Ecolatina</h1>
        <div class="subheader">Seleccioná los beneficios que más te interesen</div>
    </div>
    
    <div class="computer-container">
        <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/compu1_rnftft.webp" alt="Computer">
        <div class="hud-grid">
            <!-- Row 1 -->
            <div class="hud-item" data-position="1">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-1-normal_wnvtjm.webp" alt="HUD 1 Normal" class="normal">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-1-selected_wnvtjm.webp" alt="HUD 1 Selected" class="selected" style="display: none;">
            </div>
            <div class="hud-item" data-position="2">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-2-normal_wnvtjm.webp" alt="HUD 2 Normal" class="normal">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-2-selected_wnvtjm.webp" alt="HUD 2 Selected" class="selected" style="display: none;">
            </div>
            <div class="hud-item" data-position="3">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-3-normal_wnvtjm.webp" alt="HUD 3 Normal" class="normal">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-3-selected_wnvtjm.webp" alt="HUD 3 Selected" class="selected" style="display: none;">
            </div>
            <!-- Row 2 -->
            <div class="hud-item" data-position="4">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-4-normal_wnvtjm.webp" alt="HUD 4 Normal" class="normal">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-4-selected_wnvtjm.webp" alt="HUD 4 Selected" class="selected" style="display: none;">
            </div>
            <div class="hud-item" data-position="5">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-5-normal_wnvtjm.webp" alt="HUD 5 Normal" class="normal">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-5-selected_wnvtjm.webp" alt="HUD 5 Selected" class="selected" style="display: none;">
            </div>
            <div class="hud-item" data-position="6">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-6-normal_wnvtjm.webp" alt="HUD 6 Normal" class="normal">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-6-selected_wnvtjm.webp" alt="HUD 6 Selected" class="selected" style="display: none;">
            </div>
            <!-- Row 3 -->
            <div class="hud-item" data-position="7">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-7-normal_wnvtjm.webp" alt="HUD 7 Normal" class="normal">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-7-selected_wnvtjm.webp" alt="HUD 7 Selected" class="selected" style="display: none;">
            </div>
            <div class="hud-item" data-position="8">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-8-normal_wnvtjm.webp" alt="HUD 8 Normal" class="normal">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-8-selected_wnvtjm.webp" alt="HUD 8 Selected" class="selected" style="display: none;">
            </div>
            <div class="hud-item" data-position="9">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-9-normal_wnvtjm.webp" alt="HUD 9 Normal" class="normal">
                <img src="https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/hud-9-selected_wnvtjm.webp" alt="HUD 9 Selected" class="selected" style="display: none;">
            </div>
        </div>
    </div>

    <div class="marquee-container">
        <div class="marquee-content">
            <span>Informe Mensual</span>
            <span>Informe Trimestral</span>
            <span>Informe Anual</span>
            <span>Informe Sectorial</span>
            <span>Informe Regional</span>
            <span>Informe Especial</span>
        </div>
    </div>

    <div class="cta">
        <button>Conocé más</button>
    </div>
</div>

<!-- Motion.js Library -->
EOL

# Append Motion.js
cat dist/temp-motion.js >> dist/elementor-widget.html

# Append the JavaScript code
cat >> dist/elementor-widget.html << 'EOL'

<!-- Club Ecolatina Script -->
<script>
document.addEventListener('DOMContentLoaded', () => {
    // Computer images array
    const computerImages = [
        'https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/compu1_rnftft.webp',
        'https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/compu2_rnftft.webp',
        'https://res.cloudinary.com/dtm41dmrz/image/upload/v1710272651/compu3_rnftft.webp'
    ];

    // Select elements
    const title = document.querySelector('.title');
    const subheader = document.querySelector('.subheader');
    const computerImage = document.querySelector('.computer-container img');
    const hudItems = document.querySelectorAll('.hud-item');
    const cta = document.querySelector('.cta');
    const marqueeContent = document.querySelector('.marquee-content');

    // Clone marquee content
    const clone = marqueeContent.cloneNode(true);
    document.querySelector('.marquee-container').appendChild(clone);

    // Initialize marquee animation
    Motion.animate(marqueeContent, {
        transform: 'translateX(-100%)'
    }, {
        duration: 20,
        repeat: Infinity,
        easing: 'linear'
    });

    Motion.animate(clone, {
        transform: 'translateX(-100%)'
    }, {
        duration: 20,
        repeat: Infinity,
        easing: 'linear'
    });

    // Handle scroll animations
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        // Animate title
        if (scrollPosition > 50) {
            Motion.animate(title, {
                opacity: 1,
                transform: 'translateY(0)'
            }, {
                duration: 1
            });

            // Animate subheader with delay
            setTimeout(() => {
                Motion.animate(subheader, {
                    opacity: 1,
                    transform: 'translateY(0)'
                }, {
                    duration: 1
                });
            }, 200);
        }

        // Animate computer image
        if (scrollPosition > 150) {
            Motion.animate(computerImage, {
                opacity: 1,
                transform: 'translateY(0)'
            }, {
                duration: 1
            });
        }

        // Animate HUD items
        hudItems.forEach((item, index) => {
            if (scrollPosition > 200 + (index * 50)) {
                Motion.animate(item, {
                    opacity: 1,
                    transform: 'scale(1)'
                }, {
                    duration: 0.5
                });
            }
        });

        // Animate CTA
        if (scrollPosition + windowHeight > document.body.scrollHeight - 100) {
            Motion.animate(cta, {
                opacity: 1,
                transform: 'translateY(0)'
            }, {
                duration: 1
            });
        }
    };

    // Add click handlers to HUD items
    hudItems.forEach((item, index) => {
        const normalImage = item.querySelector('.normal');
        const selectedImage = item.querySelector('.selected');

        item.addEventListener('click', () => {
            // Reset all items
            hudItems.forEach(otherItem => {
                otherItem.querySelector('.normal').style.display = 'block';
                otherItem.querySelector('.selected').style.display = 'none';
            });

            // Show selected state for clicked item
            normalImage.style.display = 'none';
            selectedImage.style.display = 'block';

            // Update computer image
            const imageIndex = Math.floor(index / 3);
            Motion.animate(computerImage, {
                opacity: 0
            }, {
                duration: 0.3
            }).finished.then(() => {
                computerImage.src = computerImages[imageIndex];
                Motion.animate(computerImage, {
                    opacity: 1
                }, {
                    duration: 0.3
                });
            });
        });
    });

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Trigger initial scroll
    handleScroll();
});
</script>
EOL

# Clean up
rm dist/temp-motion.js

echo "Build complete! Widget file created at dist/elementor-widget.html" 