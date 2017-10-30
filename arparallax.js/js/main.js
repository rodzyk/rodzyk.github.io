$('.arparallax').arparallax();

let body = $("html, body");

function Jump(h, time = 400) {
    let t = $(h)[0].offsetTop - 48;
    console.log('Jump to: '+t);
    body.stop().animate({scrollTop: t}, time);
}

$('.jump-link').click(function (e) {
    e.preventDefault();
    let h = $(this).attr('href');
    Jump(h);
});