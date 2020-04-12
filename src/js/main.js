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

  $(window).on('click', function (e) {
    //e.preventDefault();
    let t = e.target.classList
    if (t[0] == 'modal') {
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

  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      // type: 'bullet',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 38);
  bullets.css('left', prev.width() + 23);


  new WOW().init();

  // Валидация формы

  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }

      error.insertAfter($(element));
    },
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      // compound rule

      userPhone: {
        required: true,
      },

      policyCheckbox: {
        required: true,
      }

    },

    messages: {
      userName: {
        required: "Заполните поле.",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее 15 букв",
      },
      userPhone: "Заполните поле.",
      policyCheckbox: "Подтвердите согласие"
    }
  });
  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }

      error.insertAfter($(element));
    },
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      // compound rule

      userPhone: {
        required: true
      },
      policyCheckbox: {
        required: true,
      }
    },

    messages: {
      userName: {
        required: "Заполните поле.",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее 15 букв",
      },
      userPhone: "Заполните поле.",
      policyCheckbox: "Подтвердите согласие"
    }
  });

  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }

      error.insertAfter($(element));
    },

    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      // compound rule

      userPhone: {
        required: true
      },

      userEmail: {
        required: true,
        email: true
      },

      policyCheckbox: {
        required: true,
      }

    },

    messages: {
      userName: {
        required: "Заполните поле.",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее 15 букв",
      },
      userPhone: "Заполните поле.",
      userEmail: {
        required: "Заполните поле.",
        email: "Введите корректный email."
      },
      policyCheckbox: "Подтвердите согласие"
    }
  });

  // маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {
    placeholder: "+7(___) ___-__-__"
  });



  // var stepSwiper =  new Swiper ('.swiper-container-step', {
  //   // Optional parameters
  //   loop: true,

  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination-step',
  //     type: 'fraction',
  //     type: 'bullets',
  //   },

  //   pagination: {
  //     el: '.swiper-pagination-step-number',
  //     type: 'fraction',
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next-step',
  //     prevEl: '.swiper-button-prev-step',
  //   },
  // })

  // var nextStep = $('.swiper-button-next-step');
  // var prevStep = $('.swiper-button-prev-step');
  // var paginationStep = $('.swiper-pagination-step');
  // var fractionStep = $('.swiper-pagination-fraction')



  // nextStep.css('left', prevStep.width() + 10 + paginationStep.width() + 32);
  // paginationStep.css('left', prevStep.width() + 21 );
  // fractionStep.css('left', 0);
});