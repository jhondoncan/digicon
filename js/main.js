(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {

        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
            //mostrar logo blanco
            $('.logoheader').attr('src', 'img/digicon2.png');

        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
            //mostrar logo negro
            $('.logoheader').attr('src', 'img/digicon.png');

        }
        var anchoVentana = window.innerWidth;
        if (anchoVentana <= 576) {
            $('.logoheader').attr('src', 'img/digicon2.png');
        };

    });

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 4
            },
            768: {
                items: 6
            },
            992: {
                items: 8
            }
        }
    });

})(jQuery);

function resolucion() {
    Swal.fire({
        title: '<strong>Resolución 5111 de 2017</strong>',
        width: '1000px',
        html:
            '<embed src="../docs/RESOLUCION_5111_DE_2017.pdf" type="application/pdf" width="100%" height="450px" />',
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
            'Aceptar',
        confirmButtonColor: '#1574ff',
    })

}


function leyOne() {
    Swal.fire({
        title: '<strong>Ley 679 de 2001</strong>',
        width: '1000px',
        html:
            '<embed src="../docs/Ley_679_de_2001.pdf" type="application/pdf" width="100%" height="450px" />',
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
            'Aceptar',
        confirmButtonColor: '#1574ff',
    })

}


function leyTwo() {
    Swal.fire({
        title: '<strong>Ley 1341</strong>',
        width: '1000px',
        html:
            '<embed src="../docs/Ley_1341.pdf" type="application/pdf" width="100%" height="450px" />',
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#1574ff',
    })
}

