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

// burger
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

//tabs
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.working__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.working__block').forEach(function (tabContent) {
        tabContent.classList.remove('working__block_active')
      })

      document.querySelectorAll('.working__btn').forEach(function (btnActive) {
        btnActive.classList.remove('working__btn_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('working__block_active')
      document.querySelector(`[data-path="${path}"]`).classList.add('working__btn_active')
    })
  })
})
