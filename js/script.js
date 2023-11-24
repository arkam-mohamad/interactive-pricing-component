let green = $('.green');
let round = $('.round');
let slider = $('#slider');


$(slider).on('drag', function (e) {
  $(round).css('left', `${e.clientX}px`);
});
