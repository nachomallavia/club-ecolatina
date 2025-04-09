(function ($) {
    'use strict';

    const benefits = [
        {
            title: '<span>Red de alianzas <br />estratégicas</span>',
            subtitle: 'Alianzas estratégicas para una visión 360°',
            description: `<p>Accedé a insights exclusivos sobre economía, política, consumo y mercados financieros con el respaldo de las principales consultoras de Latinoamérica.</p>`,
            computer:
                club_ecolatina_urls.plugin_url + 'assets/images/compu2.webp',
            line:
                club_ecolatina_urls.plugin_url +
                'assets/images/hud-top-left.svg',
            lineSelected:
                club_ecolatina_urls.plugin_url +
                'assets/images/hud-top-left-selected.svg',
        },
        {
            title: '<span>Información <br/>estratégica diaria</span>',
            subtitle: 'Insights diarios para decisiones estratégicas',
            description: `<p>Accedé a reportes exclusivos con datos clave y análisis en tiempo real<br/> para respaldar la toma de decisiones</p>`,
            computer:
                club_ecolatina_urls.plugin_url + 'assets/images/compu3.webp',
            line:
                club_ecolatina_urls.plugin_url +
                'assets/images/hud-top-right.svg',
            lineSelected:
                club_ecolatina_urls.plugin_url +
                'assets/images/hud-top-right-selected.svg',
        },
        {
            title: '<span>Networking High Level <br />(Webinars, encuentros inhouse)</span>',
            subtitle: 'Networking exclusivo con líderes del sector',
            description: `<p>Accedé a insights exclusivos sobre economía, política, consumo y mercados financieros con el respaldo de las principales consultoras de Latinoamérica.</p>`,
            computer:
                club_ecolatina_urls.plugin_url + 'assets/images/compu4.webp',
            line:
                club_ecolatina_urls.plugin_url +
                'assets/images/hud-mid-left.svg',
            lineSelected:
                club_ecolatina_urls.plugin_url +
                'assets/images/hud-mid-left-selected.svg',
        },
        {
            title: '<span>Noticias directo a tu celular <br />(Appvisor)</span>',
            subtitle: 'Actualización en tiempo real',
            description: `<p>Accedé a información clave en cualquier momento a través de AppVisor,<br/> la plataforma líder en inteligencia económica para ejecutivos.</p>`,
            computer:
                club_ecolatina_urls.plugin_url + 'assets/images/compu5.webp',
            line:
                club_ecolatina_urls.plugin_url +
                'assets/images/hud-mid-right.svg',
            lineSelected:
                club_ecolatina_urls.plugin_url +
                'assets/images/hud-mid-right-selected.svg',
        },
        {
            title: '<span>Contacto directo<br />con economistas</span>',
            subtitle: 'Acceso directo a los principales economistas',
            description: `<p>Asesoramiento inmediato de nuestros expertos vía WhatsApp,<br/> teléfono o email, cuando tu negocio lo requiera.</p>`,
            computer:
                club_ecolatina_urls.plugin_url + 'assets/images/compu6.webp',
            line:
                club_ecolatina_urls.plugin_url +
                'assets/images/hud-bottom-left.svg',
            lineSelected:
                club_ecolatina_urls.plugin_url +
                'assets/images/hud-bottom-left-selected.svg',
        },
        {
            title: '<span>Cobertura completa<br />y transversal</span>',
            subtitle: 'Visión integral para toda la organización',
            description: `<p>Información alineada para toda la empresa, garantizando coherencia<br/> 
            en el análisis económico y estratégico.</p>`,
            computer:
                club_ecolatina_urls.plugin_url + 'assets/images/compu7.webp',
            line:
                club_ecolatina_urls.plugin_url +
                'assets/images/hud-bottom-right.svg',
            lineSelected:
                club_ecolatina_urls.plugin_url +
                'assets/images/hud-bottom-right-selected.svg',
        },
    ];

    // Initialize Motion library
    const { animate, spring, stagger } = window.Motion;

    $(document).ready(function () {
        // Initialize benefits
        benefits.forEach((benefit, index) => {
            const benefitTitles = $('.benefit-title');
            benefitTitles.eq(index).html(benefit.title);
        });

        // Handle benefit clicks
        $('.hud-grid-item').on('click', function () {
            const $hudGridItems = $('.hud-grid-item');
            $hudGridItems.removeClass('selected');
            $hudGridItems.each(function () {
                const $img = $(this).find('img');
                const benefitIndex = $(this).data('benefit-index');
                if (
                    $img.length &&
                    $img.attr('src') === benefits[benefitIndex].lineSelected
                ) {
                    $img.attr('src', benefits[benefitIndex].line);
                }
            });

            $(this).addClass('selected');
            const $img = $(this).find('img');
            const benefitIndex = $(this).data('benefit-index');
            const benefit = benefits[benefitIndex];

            $img.attr('src', benefit.lineSelected);
            $('#benefit-subtitle').text(benefit.subtitle);
            $('#benefit-description-text').html(benefit.description);
            $('#benefit-computer').attr('src', benefit.computer);
        });

        // Animation setup
        const $benefitComputer = $('#benefit-computer');
        const $hudGrid = $('.hud-grid');
        const $titleText = $('.title h1');
        const $ondas = $('.title img');
        const $subheader = $('.subheader');
        const $benefitSubtitle = $('#benefit-subtitle');
        const $benefitDescription = $('#benefit-description-text');
        const startingComputerUrl =
            club_ecolatina_urls.plugin_url + 'assets/images/compu1.webp';

        // Set initial states
        $hudGrid.css('opacity', '0');
        $benefitDescription.css('opacity', '0');
        $benefitComputer
            .css({
                opacity: '1',
                transform: 'translateY(10%)',
            })
            .attr('src', startingComputerUrl);

        // Handle scroll animation
        $(window).on('scroll', function () {
            const scrollPosition = $(window).scrollTop();
            const windowHeight = $(window).height();
            const scrollPercentage = Math.min(scrollPosition / windowHeight, 1);

            // Animate title elements
            animate(
                $titleText[0],
                {
                    opacity: 1 - scrollPercentage,
                    y: -100 * scrollPercentage,
                },
                { duration: 0.3 }
            );

            animate(
                $ondas[0],
                {
                    opacity: Math.max(0.5 - scrollPercentage, 0),
                    y: -100 * scrollPercentage,
                    scale: Math.min(1 + scrollPercentage * 0.75, 1.2),
                },
                { duration: 0.2 }
            );

            animate(
                $subheader[0],
                {
                    opacity: 1 - scrollPercentage,
                },
                { duration: 0.3 }
            );

            // Animate grid elements
            animate(
                $hudGrid[0],
                {
                    opacity: scrollPercentage,
                },
                { duration: 0.3 }
            );

            animate(
                $benefitSubtitle[0],
                { opacity: scrollPercentage },
                { duration: 0.2 }
            );

            animate(
                $benefitDescription[0],
                { opacity: scrollPercentage },
                { duration: 0.2 }
            );

            animate(
                $benefitComputer[0],
                {
                    opacity: scrollPercentage * 0.8 + 1,
                    filter: `brightness(${
                        100 + (scrollPercentage - 0.1) * 35
                    }%)`,
                    transform: `translateY(${scrollPercentage * -5}%)`,
                },
                { duration: 0.3 }
            );

            if (scrollPercentage < 0.25) {
                $benefitComputer.attr('src', startingComputerUrl);
            }
        });
    });
})(jQuery);
