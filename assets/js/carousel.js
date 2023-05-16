$('.owl-carousel').owlCarousel({
    margin: -100,
    autoplay: true,
    center: false,
    loop: true,
    nav: true,
    dots: false,
    // stagePadding: 60,
    onInitialized: owlInit,
    responsiveClass: true,
    responsive: {
        0: {
            items: 3,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 3,
        }
    }
});

$('.owl-carousel').on('initialize.owl.carousel initialized.owl.carousel translate.owl.carousel changed.owl.carousel', function (e) {
    idx = e.item.index;
    $('.owl-item.big').removeClass('big');
    // $('.owl-item.medium').removeClass('medium');
    $('.owl-item').eq(idx + 1).addClass('big');
    // $('.owl-item.big').eq(idx - 1).addClass('medium');
    // $('.owl-item').eq(idx + 1).addClass('medium');
});

function owlInit() {
    $('.owl-carousel .owl-item:eq(1)').addClass('big');
}

$('.owl-carousel .itm-wrapper').each(function (index) {
    $(this).attr('data-position', index); // NB: .attr() instead of .data()
});
$(document).on('click', '.owl-item.active', function () {
    var $speed = 300;  // in ms
    $('.owl-carousel').trigger('to.owl.carousel', [$(this).find('.itm-wrapper').data('position'), $speed]);
});