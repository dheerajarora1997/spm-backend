if (jQuery('[data-toggle="tooltip"]').length) {
    jQuery('[data-toggle="tooltip"]').tooltip();
}

if (jQuery('.selectpicker').length) {
    jQuery('.selectpicker').selectpicker();
}

jQuery('[data-toggle="tooltip"][data-trigger="hover"]').on('click', function () {
    jQuery('.tooltip').remove();
})

if (jQuery('.owl-carousel').length) {
    jQuery('.owl-carousel').owlCarousel({
        nav: true,
        navigation: true,
        autoWidth: false,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        autoplay: false,
        responsiveClass: true,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1300: {
                items: 4
            }
        },
    });
}



jQuery(document).ready(function () {
    function openSidebar() {
        jQuery(".cont-right-side-fixed").toggleClass("open");
    }
    jQuery(".cont-side-fixed-bg, .queries-btn, .cont-right-side-fixed .cont-btn, .mob-nav, .close-nav").click(function () {
        openSidebar();
    });
    jQuery(".sidebar ul.nav li:first-child").click(function () {
        jQuery(".sidebar ul.nav li:first-child i").toggleClass("icon-long-arrow-left icon-navigation");
        jQuery(".wrapper").toggleClass("active");
    });
    jQuery(".main .card").hover(function () {
        jQuery(".main .card").not(this).addClass("hover-effect");
    }, function () {
        jQuery(".main .card").removeClass("hover-effect");
    });
});