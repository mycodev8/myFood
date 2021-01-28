    // back to top buuton
$('#toTopBtn').hide();
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 400) {
      $('#toTopBtn').fadeIn();
    } else {
      $('#toTopBtn').fadeOut();
    }
  });
  $('#toTopBtn').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});


    // smoth scroll

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } 
  });
});


//text animation

let x = 0;
let text_animated = `eat healthy, from myFood`
let text_effect = document.querySelector('.text-to-animate');
//
textShowing = () => {
  text_effect.textContent += text_animated.charAt(x);
  x++;
  setTimeout(textShowing, 100)
}
if (x < text_animated.length) {
  textShowing()
}





