/* global document */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });


//init
//слайдеры

document.addEventListener( 'DOMContentLoaded', function() {

  if(document.getElementById("banner")) {
  var banner =  document.getElementById('banner') 
 
  var splide = new Splide( banner, {
    type   : 'loop',
    perPage: 1,
    autoplay:true,
    pauseOnHover:true,
    pauseOnFocus: true,
    
  } ); 
  splide.mount();
  }
  if(document.getElementById("victory")) {
    var banner =  document.getElementById('victory') 
   
    var splide = new Splide( banner, {
      type   : 'loop',
      perPage: 4,
      autoplay:true,
      pauseOnHover:true,
      pauseOnFocus: true,
      
    } ); 
    splide.mount();
    }
});