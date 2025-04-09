# Build Process: Club Ecolatina Widget

## 1. File Structure

The final `elementor-widget.html` should be composed of three main parts:

### 1.1 HTML Structure (from index.html)

```html
<div class="main-container">
    <div class="landscape-layout">
        <div class="scroll-container">
            <section class="title">
                <h1>Inteligencia para <br />decisiones estratégicas</h1>
                <img id="ondas" src="[WAVES_URL]" width="100%" alt="ondas" />
                <div class="subheader">
                    <p>
                        Accedé a la información económica más confiable y
                        análisis clave para anticiparte al mercado.<br />
                        <strong
                            >Con insights diarios, asesoramiento directo y
                            networking exclusivo.</strong
                        >
                    </p>
                    <h4>SCROLLEÁ PARA DESCUBRIR TODOS LOS BENEFICIOS</h4>
                </div>
                <button class="cta">Solicitá tu cotización</button>
            </section>
            <section class="hud-grid-container">
                <!-- HUD Grid Items -->
                <div class="hud-grid">
                    <!-- 6 HUD items with their respective titles and images -->
                </div>
                <div class="computer-container">
                    <img
                        id="benefit-computer"
                        src="[COMPUTER_URL]"
                        alt="computadora"
                        class="computer"
                    />
                    <div class="benefit-description">
                        <h3 id="benefit-subtitle">
                            Actualización en tiempo real
                        </h3>
                        <div id="benefit-description-text">
                            <!-- Dynamic content -->
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
```

### 1.2 CSS Structure (from main.css)

```css
:root {
    --ecolatina-green: #00625d;
    --ecolatina-green-2: #34a19b;
    --ecolatina-aqua: #7bbfb7;
    --ecolatina-aqua-2: #b6f4ed;
    --ecolatina-light-gray: #f7f7f7;
    --ecolatina-dark-gray: #606060;
}

/* Copy all styles from main.css, maintaining the exact class names and structure */
```

### 1.3 JavaScript Structure

Combine the following files in this order:

1. Motion.js (from CDN)
2. main.js (benefits data and click handlers)
3. animations.js (scroll animations and initial setup)

## 2. Image URLs

### 2.1 Computer Images

```
https://res.cloudinary.com/duykgwmak/image/upload/v1743475677/compu1_kihhid.webp
https://res.cloudinary.com/duykgwmak/image/upload/v1743475677/compu2_zcn6vf.webp
https://res.cloudinary.com/duykgwmak/image/upload/v1743475679/compu3_nongnc.webp
https://res.cloudinary.com/duykgwmak/image/upload/v1743475678/compu4_ievtk6.webp
https://res.cloudinary.com/duykgwmak/image/upload/v1743475677/compu5_rtywyw.webp
https://res.cloudinary.com/duykgwmak/image/upload/v1743475678/compu6_eg6xzt.webp
https://res.cloudinary.com/duykgwmak/image/upload/v1743475678/compu7_fpu6ii.webp
```

### 2.2 HUD Images

#### Top Row

```
# Top Left
Normal: https://res.cloudinary.com/duykgwmak/image/upload/v1743476265/hud-top-left_xvdmht.svg
Selected: https://res.cloudinary.com/duykgwmak/image/upload/v1743475679/hud-top-left-selected_qia7bz.svg

# Top Right
Normal: https://res.cloudinary.com/duykgwmak/image/upload/v1743475680/hud-top-right_zgnehr.svg
Selected: https://res.cloudinary.com/duykgwmak/image/upload/v1743475679/hud-top-right-selected_k5ggy6.svg
```

#### Middle Row

```
# Middle Left
Normal: https://res.cloudinary.com/duykgwmak/image/upload/v1743477081/hud-mid-left_toqfxw.svg
Selected: https://res.cloudinary.com/duykgwmak/image/upload/v1743475678/hud-mid-left-selected_ng7tsc.svg

# Middle Right
Normal: https://res.cloudinary.com/duykgwmak/image/upload/v1743475679/hud-mid-right_nggbe0.svg
Selected: https://res.cloudinary.com/duykgwmak/image/upload/v1743475678/hud-mid-right-selected_uqwjrf.svg
```

#### Bottom Row

```
# Bottom Left
Normal: https://res.cloudinary.com/duykgwmak/image/upload/v1743477210/hud-bottom-left_y0i763.svg
Selected: https://res.cloudinary.com/duykgwmak/image/upload/v1743475677/hud-bottom-left-selected_ze0pxy.svg

# Bottom Right
Normal: https://res.cloudinary.com/duykgwmak/image/upload/v1743475678/hud-bottom-right_pu41hq.svg
Selected: https://res.cloudinary.com/duykgwmak/image/upload/v1743475677/hud-bottom-right-selected_vqk0lk.svg
```

### 2.3 Additional Assets

```
Waves: https://res.cloudinary.com/duykgwmak/image/upload/v1743478442/ondas_mwzyu5.svg
```

## 3. Benefits Data

```javascript
const benefits = [
    {
        title: '<span>Red de alianzas <br />estratégicas</span>',
        subtitle: 'Alianzas estratégicas para una visión 360°',
        description: `<p>Accedé a insights exclusivos sobre economía, política, consumo y mercados financieros con el respaldo de las principales consultoras de Latinoamérica.</p>`,
        computer:
            'https://res.cloudinary.com/duykgwmak/image/upload/v1743475677/compu2_zcn6vf.webp',
        line: 'https://res.cloudinary.com/duykgwmak/image/upload/v1743476265/hud-top-left_xvdmht.svg',
        lineSelected:
            'https://res.cloudinary.com/duykgwmak/image/upload/v1743475679/hud-top-left-selected_qia7bz.svg',
    },
    // ... Copy all benefits data from main.js
];
```

## 4. Build Steps

1. Create `dist` directory
2. Create `elementor-widget.html`:
    - Copy HTML structure from `index.html`
    - Copy CSS from `main.css`
    - Add Motion.js from CDN
    - Copy and combine JavaScript from `main.js` and `animations.js`
    - Update all image URLs to use Cloudinary links

## 5. Implementation

1. Create new Elementor section
2. Add HTML widget
3. Copy contents of `dist/elementor-widget.html`
4. Save and publish

## 6. Notes

-   Maintain exact class names and structure from original files
-   Keep all CSS properties and values unchanged
-   Preserve JavaScript functionality from both main.js and animations.js
-   Use SVG format for HUD images
-   Use WebP format for computer images
-   Motion.js version: 10.16.4
