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
var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
$('.page__content').bind(mousewheelevt, function(e){

    var evt = window.event || e //equalize event object     
    evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

    if(delta > 0) {
      $('.page__header').addClass('fixed')   
    }
    else{
      $('.page__header').removeClass('fixed')   
    }   
});
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



