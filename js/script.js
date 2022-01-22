const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


$( ".js-accordion" ).accordion({
  collapsible: true,
  active: true,
  icons: false,
  heightStyle: 'content'
});
