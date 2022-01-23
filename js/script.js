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

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#burger").addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })
})

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#burger1").addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })
})

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#btn1").addEventListener('click', function () {
    document.querySelector('#search').classList.toggle('is-active')
  })
})

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#btn2").addEventListener('click', function () {
    document.querySelector('#search').classList.toggle('is-active')
  })
})
