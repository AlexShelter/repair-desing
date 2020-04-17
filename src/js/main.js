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
    modalThanks = $('.modal-thanks');
    modalThanks__button = $('.modal-thanks__button');


  modalBtn.on('click', function () {
    modal.addClass('modal--visible');
  })

  closeBtn.on('click', function () {
    modal.removeClass('modal--visible');
    modalThanks.removeClass('modal-thanks--visible');
  })

  modalThanks__button.on('click', function () {
    modalThanks.removeClass('modal-thanks--visible');
  })

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      modal.removeClass('modal--visible');
      modalThanks.removeClass('modal-thanks--visible');
    }
  });

  $(window).on('click', function (e) {
    //e.preventDefault();
    let t = e.target.classList
    if (t[0] == 'modal' || t[0] == 'modal-thanks' ) {
      modal.removeClass('modal--visible');
      modalThanks.removeClass('modal-thanks--visible');
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
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThanks.addClass('modal-thanks--visible');
        }
      });
    }
  });

  // маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {
    placeholder: "+7(___) ___-__-__"
  });


  //            API Yandex Map
  // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.

    //Переменная для включения/отключения индикатора загрузки
    var spinner = $('.ymap-container').children('.loader');
    //Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
    var check_if_load = false;
    
     function init () {
      var myMap = new ymaps.Map('map', {
              center: [47.244729, 39.723187],
              zoom: 13
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Наш офис',
              balloonContent: 'Bход со двора'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/canada.png',
              // Размеры метки.
              iconImageSize: [32, 32],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          });
  
      myMap.geoObjects
          .add(myPlacemark)
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMap.layers.get(0).get(0);
    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function() {
      // Скрываем индикатор загрузки после полной загрузки карты
      spinner.removeClass('is-active');
    });
  };

  // Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}

function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}

// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
 
$(function() {
 
  //Запускаем основную функцию
  ymap();
 
});

// END


  


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