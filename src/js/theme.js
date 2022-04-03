intiToolTip = () => {
    if (jQuery('[data-toggle="tooltip"]').length) {
        jQuery('[data-toggle="tooltip"]').tooltip();
    }
    jQuery('[data-toggle="tooltip"][data-trigger="hover"]').on('click', function () {
        jQuery('.tooltip').remove();
    })
}

intiPopOver = () => {
    if (jQuery('[data-toggle="popover"]').length) {
        jQuery('[data-toggle="popover"]').popover();
    }
    jQuery('[data-toggle="popover"][data-trigger="hover"]').on('click', function () {
        jQuery('.popover').remove();
    })
}

intiSelectPicker = () => {
    if (jQuery('.selectPicker').length) {
        jQuery('.selectPicker').selectpicker();
    }
}

initOwlCarousel = () => {
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
}

initDataTable = () => {
    $('.data-table').dataTable({
        rowReorder: true,
        columnDefs: [
            { orderable: true, className: 'reorder', targets: 0 },
            // { orderable: false, targets: '_all' }
        ]
    });
}

let dtpInitNew = (timePickerBoolean, formatTime) => {
    $('input.dateTimePicker').datetimepicker({
        format: 'd/m/y',
        formatTime: formatTime,
        timepicker: timePickerBoolean,
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