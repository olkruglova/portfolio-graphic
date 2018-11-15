$(window).on('load', function(){
    $('html body').scrollTop(0);
});

$(document).ready(function() {
    $("#images").lightGallery({
        mode: 'lg-fade',
        cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)'
    });

    $('.bw').mouseover(function() {
        $(this).removeClass('bw');
    })

    $('.bw').mouseleave(function() {
        $(this).addClass("bw");
    })

    $('.image').on('click', function(){
        $('#pop-up').show()
    })
});