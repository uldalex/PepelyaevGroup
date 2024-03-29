// const ready = require('./utils/documentReady.js');

// ready(function(){
//   console.log('DOM героически построен!');
// });


 const $ = require('jquery');
 //скрипты шапки
 $( document ).ready(function() {
  $(document).on('mouseenter', '.page-header__launguage-link', function(){
    $('.page-header__launguage-link').addClass('active')
    $('.launguage-panel').addClass('open')
  })
  $(document).on('mouseleave', '.page-header__launguage-link', function(){
    $('.page-header__launguage-link').removeClass('active')
    $('.launguage-panel').removeClass('open')
  })
  $('.page-header__launguage-link, .launguage-panel a').on('click', function(){
   $('.page-header__launguage-link').toggleClass('active')
   $('.launguage-panel').toggleClass('open')
   return false;
 })
 $(document).on('mouseenter', '#lk', function(){
  $('#lk').addClass('active')
  $('.user-panel').addClass('open')
})
$(document).on('mouseleave', '#lk', function(){
  $('#lk').removeClass('active')
  $('.user-panel').removeClass('open')
})
 $('#lk, .user-panel a').on('click', function(){
  $('#lk').toggleClass('active')
  $('.user-panel').toggleClass('open');
  return false;
})
$('#search-close, #search-open').on('click', function(){
  $('#search-fixed').toggleClass('open')
  return false;
})
/*Dropdown Menu*/

$('.dropdown').on('click', function () {
  if ($(this).hasClass("active")) {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
  $("#branchesListListInputFilter").val('');
  $("#practicleListListInputFilter").val('');
  $("#practicleFilterClose").removeClass('active');
  $("#branchesFilterClose").removeClass('active');
  var value = '';
  $("#practicleList li").filter(function() {
    let item = $(this).text().toLowerCase().indexOf(value) > -1;
    $(this).toggle(item);
  });
  $("#branchesList li").filter(function() {
    let item = $(this).text().toLowerCase().indexOf(value) > -1;
    $(this).toggle(item);
  });
  $("#practicleListListInputFilter").removeClass('active');
  $("#branchesListListInputFilter").removeClass('active');
} else {
 $(this).addClass('active');
  $(this).find('.dropdown-menu').slideDown(300); 
}
}).on('click','.search-input, .dropdown__close', function(e) { 
  e.stopPropagation();
   
});
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());

});
$("#practicleListListInputFilter").on("click", function() {
  $(this).addClass('active');
  var close = $('#practicleFilterClose');
  $(close).addClass('active');
  $(close).on('click', function(){
    $("#practicleListListInputFilter").removeClass('active');
    $("#practicleListListInputFilter").val('');
    var value = $("#practicleListListInputFilter").val().toLowerCase();
    $(this).removeClass('active');
    $("#practicleList li").filter(function() {
      let item = $(this).text().toLowerCase().indexOf(value) > -1;
      $(this).toggle(item);
    });
  })

});

$("#practicleListListInputFilter").on("keyup", function() {
   var value = $(this).val().toLowerCase();
  $("#practicleList li").filter(function() {
    let item = $(this).text().toLowerCase().indexOf(value) > -1;
    $(this).toggle(item);
  });
});
$("#branchesListListInputFilter").on("click", function() {
  $(this).addClass('active');
  var close = $('#branchesFilterClose');
  $(close).addClass('active');
  $(close).on('click', function(){
    $("#branchesListListInputFilter").removeClass('active');
    $("#branchesListListInputFilter").val('');
    var value = $("#branchesListListInputFilter").val().toLowerCase();
    $(this).removeClass('active');
    $("#branchesList li").filter(function() {
      let item = $(this).text().toLowerCase().indexOf(value) > -1;
      $(this).toggle(item);
    });
  })

});

$("#branchesListListInputFilter").on("keyup", function() {
   var value = $(this).val().toLowerCase();
  $("#branchesList li").filter(function() {
    let item = $(this).text().toLowerCase().indexOf(value) > -1;
    $(this).toggle(item);
  });
});
/*End Dropdown Menu*/
//меню
if ($(window).width() <= 600) {
$('.main-nav__item--has-child').on('click', function(){
  $(this).toggleClass('open');
  $(this).find('.main-nav__sublist-wrapper').toggleClass('open');
  return false;
})
}
var header = $('.page-header'),
	scrollPrev = 0;

  let menuElem = $('.page-header'), // Элемент который будет прилепать
  menuFixed = 300, // кол-во пикселей от границы, когда меню "прилипнет" к краю экрана.
  menuStatus = false; // Некая оптимизация.



$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
  if ( scrolled > 300 && scrolled < scrollPrev ) {
		header.addClass('fixed').css({'top':'0%'});
	}
  else if( scrolled > scrollPrev ) {
    header.css({'top':'-100%'});
   
  }
  else {
     header.removeAttr('style').removeClass('fixed'); 
  }
	scrollPrev = scrolled;
});;
//анимация
$(window).scroll(function(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.animation').offset().top;
	var eh = $('.animation').outerHeight();
  var et1 = $('.animation1').offset().top;
	var eh1 = $('.animation1').outerHeight();
  var et2 = $('.animation2').offset().top;
	var eh2 = $('.animation2').outerHeight();
	var dh = $(document).height();   
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
	$('.animation').addClass('animate')
	}
  if (wt + wh >= et1 || wh + wt == dh || eh1 + et1 < wh){
    $('.animation1').addClass('animate')
  }
  if (wt + wh >= et2 || wh + wt == dh || eh2 + et2 < wh){
    $('.animation2').addClass('animate')
  }
});


});
/*Перетаскиваем логотипы скролл*/
const slider = document.querySelector('.block-rete__list');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);


var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

InitVars();
InitMenu();


$(window).on("load",function(){
	UpdateScroll();
});





function InitVars(){
	$MainMenu = $('.block-rete__list');
	$Speed = $Scroll = 0;
	$MainMenuWidth = $MainMenu.width();
	$MainMenuMaxScroll = $MainMenu[0].scrollWidth - $MainMenu.outerWidth();
	$FirstLaunch = true;
}

function InitMenu(){
	$MainMenu.on('mousemove', function(e) { var mouse_x = e.pageX - $MainMenu.offset().left; var mouseperc = 100 * mouse_x / $MainMenuWidth; $Speed = mouseperc - 50; }).on ( 'mouseleave', function() { $Speed = 0; });
	
	
}



function UpdateScroll() {
	if ($Speed !== 0) { 
		$Scroll += $Speed / 3;
		if ($Scroll < 0){ $Scroll = 0;}
		if ($Scroll > $MainMenuMaxScroll){$Scroll = $MainMenuMaxScroll;
            $('.block-rete__list').removeClass('block-rete__list--scroll')
        } else {
            $('.block-rete__list').addClass('block-rete__list--scroll')
        }
		$MainMenu.scrollLeft($Scroll);
	}
	$MenuEvent = requestAnimationFrame(UpdateScroll);
}


