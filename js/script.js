$('.bw').mouseover(function() {
    $(this).removeClass('bw');
})

$('.bw').mouseleave(function() {
    $(this).addClass("bw");
})

$('.image').on('click', function(){
    $('#pop-up').show()
})