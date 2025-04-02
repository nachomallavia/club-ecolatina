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
    {
        title: '<span>Información <br/>estratégica diaria</span>',
        subtitle: 'Insights diarios para decisiones estratégicas',
        description: `<p>Accedé a reportes exclusivos con datos clave y análisis en tiempo real<br/> para respaldar la toma de decisiones</p>`,
        computer:
            'https://res.cloudinary.com/duykgwmak/image/upload/v1743475679/compu3_nongnc.webp',
        line: 'https://res.cloudinary.com/duykgwmak/image/upload/v1743475680/hud-top-right_zgnehr.svg',
        lineSelected:
            'https://res.cloudinary.com/duykgwmak/image/upload/v1743475679/hud-top-right-selected_k5ggy6.svg',
    },
    {
        title: '<span>Networking High Level <br />(Webinars, encuentros inhouse)</span>',
        subtitle: 'Networking exclusivo con líderes del sector',
        description: `<p>Accedé a insights exclusivos sobre economía, política, consumo y mercados financieros con el respaldo de las principales consultoras de Latinoamérica.</p>`,
        computer:
            'https://res.cloudinary.com/duykgwmak/image/upload/v1743475678/compu4_ievtk6.webp',
        line: 'https://res.cloudinary.com/duykgwmak/image/upload/v1743477081/hud-mid-left_toqfxw.svg',
        lineSelected:
            'https://res.cloudinary.com/duykgwmak/image/upload/v1743475678/hud-mid-left-selected_ng7tsc.svg',
    },
    {
        title: '<span>Noticias directo a tu celular <br />(Appvisor)</span>',
        subtitle: 'Actualización en tiempo real',
        description: `<p>Accedé a información clave en cualquier momento a través de AppVisor,<br/> la plataforma líder en inteligencia económica para ejecutivos.</p>`,
        computer:
            'https://res.cloudinary.com/duykgwmak/image/upload/v1743475677/compu5_rtywyw.webp',
        line: 'https://res.cloudinary.com/duykgwmak/image/upload/v1743475679/hud-mid-right_nggbe0.svg',
        lineSelected:
            'https://res.cloudinary.com/duykgwmak/image/upload/v1743475678/hud-mid-right-selected_uqwjrf.svg',
    },
    {
        title: '<span>Contacto directo<br />con economistas</span>',
        subtitle: 'Acceso directo a los principales economistas',
        description: `<p>Asesoramiento inmediato de nuestros expertos vía WhatsApp,<br/> teléfono o email, cuando tu negocio lo requiera.</p>`,
        computer:
            'https://res.cloudinary.com/duykgwmak/image/upload/v1743475678/compu6_eg6xzt.webp',
        line: 'https://res.cloudinary.com/duykgwmak/image/upload/v1743477210/hud-bottom-left_y0i763.svg',
        lineSelected:
            'https://res.cloudinary.com/duykgwmak/image/upload/v1743475677/hud-bottom-left-selected_ze0pxy.svg',
    },
    {
        title: '<span>Cobertura completa<br />y transversal</span>',
        subtitle: 'Visión integral para toda la organización',
        description: `<p>Información alineada para toda la empresa, garantizando coherencia<br/> 
        en el análisis económico y estratégico.</p>`,
        computer:
            'https://res.cloudinary.com/duykgwmak/image/upload/v1743475678/compu7_fpu6ii.webp',
        line: 'https://res.cloudinary.com/duykgwmak/image/upload/v1743475678/hud-bottom-right_pu41hq.svg',
        lineSelected:
            'https://res.cloudinary.com/duykgwmak/image/upload/v1743475677/hud-bottom-right-selected_vqk0lk.svg',
    },
];
document.addEventListener('DOMContentLoaded', () => {
    benefits.forEach((benefit, index) => {
        const benefitTitles = document.querySelectorAll('.benefit-title');
        benefitTitles[index].innerHTML = benefit.title;
    });
    const hudGridItems = document.querySelectorAll('.hud-grid-item');

    hudGridItems.forEach((item) => {
        item.addEventListener('click', () => {
            hudGridItems.forEach((item) => {
                item.classList.remove('selected');
                let img = item.querySelector('img');
                if (
                    img &&
                    img.src == benefits[item.dataset.benefitIndex].lineSelected
                ) {
                    img.src = benefits[item.dataset.benefitIndex].line;
                }
            });
            item.classList.add('selected');
            let img = item.querySelector('img');

            const benefitIndex = item.dataset.benefitIndex;
            const benefit = benefits[benefitIndex];
            img.src = benefit.lineSelected;
            document.getElementById('benefit-subtitle').textContent =
                benefit.subtitle;
            document.getElementById('benefit-description-text').innerHTML =
                benefit.description;

            document.getElementById('benefit-computer').src = benefit.computer;
        });
    });
});
