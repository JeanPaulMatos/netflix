window.addEventListener('load', function () {

    new Glider (document.querySelector('.list__container--carousel'), {

        slidesToShow: 2.5,            
        slidesToScroll: 2,
        // scrollLock: true,
        draggable: true,
        dots: '.list__indicators',
        arrows: {
        prev: '.list__container--previous',
        next: '.list__container--after'
        },
        
        responsive: [
            {
            // screens greater than >= 775px
            breakpoint: 768,
            settings: {
            // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '5',
                slidesToScroll: '5',
                // itemWidth: 150,
                // duration: 0.25
                arrows: {
                prev: '.list__container--previous',
                next: '.list__container--after'
                },
            }
            },{
            // screens greater than >= 1024px
            // breakpoint: 1024,
            // settings: {
            //     slidesToShow: 2,
            //     slidesToScroll: 1,
            //     itemWidth: 150,
            //     duration: 0.25
            // }
            }
        ]

    });

});