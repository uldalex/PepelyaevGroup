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
$('.dropdown').on('mouseenter', function () {
  $(this).addClass('active');
  $(this).find('.dropdown-menu').slideDown(300);
});
$('.dropdown').on('mouseleave', function () {
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
});
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());

});
$("#practicleListListInputFilter").on("click", function() {
  var close = $('#practicleFilterClose');
  $(close).addClass('active');
  $(close).on('click', function(){
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
  var close = $('#branchesFilterClose');
  $(close).addClass('active');
  $(close).on('click', function(){
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

});
