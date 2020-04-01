// document.addEventListener("DOMContentLoaded", function(event) { 

//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   }

//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   })

//   closeBtn.addEventListener('click', switchModal);

//   window.onclick =function(event){
//     if (event.target == modal){
//       modal.classList.remove('modal--visible');
//     }
//   };
//   document.onkeydown = (event) => {
//     if (event.keyCode === 27) {
//       modal.classList.remove('modal--visible');
//   }
// }
// })

//  <---------------------JQuery---------------------->

$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle="modal"]'),
    closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  })

  closeBtn.on('click', function () {
    modal.removeClass('modal--visible');
  })

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      modal.removeClass('modal--visible');
    }
  });

  $(window).on('click',  function (e) {
    // e.preventDefault();
    let t = e.target.classList
    if(t[0] == 'modal') {
      modal.removeClass('modal--visible');
    }
  }); 



  var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $('.button-up').fadeOut();


  $(window).scroll(function () { // При прокрутке попадаем в эту функцию
    /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
    if ($(this).scrollTop() > top_show) $('.button-up').fadeIn();
    else $('.button-up').fadeOut();
  });
  $('.button-up').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
    /* Плавная прокрутка наверх */
    $('body, html').animate({
      scrollTop: 0
    }, delay);
  });
});