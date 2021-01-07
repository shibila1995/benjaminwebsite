$(document).ready(function(){
    $('.food-slider').slick({
       autoplay:true,
      slidesToShow:3,
      slidesToScroll:1,
      prevArrow:".prev-btn",
      nextArrow:".next-btn",
     /*TO DISPLAY ONLY 2 IMAGES SLIDER SCREENSIZE BELOW 992*/
      responsive:[
         {
            breakpoint:992,
            settings:{
             slidesToShow:2,
            }
         },
          /*TO DISPLAY ONLY 1 IMAGES SLIDER SCREENSIZE BELOW 768*/
         {
          breakpoint:768,
          settings:{
           slidesToShow:1,
          }
       }
      ]
 
    });
 /*when hamburger icon is clicked whole content moved to right side*/
    $('.nav-trigger').click(function(){
       $('.site-content-wrapper').toggleClass('scaled');
    })
 });