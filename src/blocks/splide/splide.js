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
  if(document.getElementById("events")) {
    var banner =  document.getElementById('events') 
   
    var splide = new Splide( banner, {
      type   : 'loop',
      perPage: 3,
      perMove: 1,
      autoplay:true,
      pauseOnHover:true,
      pauseOnFocus: true,
      arrows:false,
      breakpoints: {
        768: {
          perPage: 2,
        },
        480: {
          perPage: 1,
        },
        }
    }); 
    splide.mount();
    }
    if(document.getElementById("news")) {
      var banner =  document.getElementById('news') 
     
      var splide = new Splide( banner, {
        type   : 'loop',
        perPage: 1,
        perMove: 1,
        autoplay:false,
        pauseOnHover:true,
        pauseOnFocus: true,
        arrows:true,
      }); 
      splide.mount();
      }
      if(document.getElementById("press-relise")) {
        var banner =  document.getElementById('press-relise') 
       
        var splide = new Splide( banner, {
          type   : 'loop',
          perPage: 1,
          perMove: 1,
          autoplay:false,
          pauseOnHover:true,
          pauseOnFocus: true,
          arrows:true,
        }); 
        splide.mount();
        }
        if(document.getElementById("analitic")) {
          var banner =  document.getElementById('analitic') 
         
          var splide = new Splide( banner, {
            type   : 'loop',
            perPage: 1,
            perMove: 1,
            autoplay:false,
            pauseOnHover:true,
            pauseOnFocus: true,
            arrows:true,
          }); 
          splide.mount();
          }
          if(document.getElementById("video")) {
            var banner =  document.getElementById('video') 
           
            var splide = new Splide( banner, {
              type   : 'loop',
              perPage: 1,
              perMove: 1,
              autoplay:false,
              pauseOnHover:true,
              pauseOnFocus: true,
              arrows:true,
            }); 
            splide.mount();
            }
            if(document.getElementById("books")) {
              var banner =  document.getElementById('books') 
             
              var splide = new Splide( banner, {
                type   : 'loop',
                perPage: 1,
                perMove: 1,
                autoplay:false,
                pauseOnHover:true,
                pauseOnFocus: true,
                arrows:true,
              }); 
              splide.mount();
              }
});