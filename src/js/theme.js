if (jQuery('[data-toggle="tooltip"]').length) {
    jQuery('[data-toggle="tooltip"]').tooltip();
}

if (jQuery('.selectpicker').length) {
    jQuery('.selectpicker').selectpicker();
}

if (jQuery('.owl-carousel').length) {
    jQuery('.owl-carousel').owlCarousel();
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