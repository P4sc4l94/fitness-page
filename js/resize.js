// Uses jQuery to change background color of nav after you scroll past a certain position
// https://stackoverflow.com/questions/52637835/dynamically-change-background-color-on-scroll
$(document).ready(function(){       
  var scroll_pos = 0;
  var w = $(window).width(); //stores width of window 
  $(document).scroll(function() {
      scroll_pos = $(this).scrollTop();
        if(scroll_pos > 25 && w >= 768) {
            $("nav").css('background-color', '#333333');
            $("nav").css('transition', '0.3s');
        } else if(scroll_pos <= 25 || w >= 768) {
            $("nav").css('background-color', 'inherit');
        }
  });

  // $(window).resize(function(){
  //   var scroll_pos = 0;
  //   var w = $(window).width();
  //   $(document).scroll(function() {
  //     scroll_pos = $(this).scrollTop();
  //     if(w < 768) {
  //         $("nav").css('background-color', '#333333');
  //         $("nav").css('transition', '0.3s');
  //     } 
  //   })
  // })
});


// $(window).ready(function() {
//   var wi = $(window).width();

//   $(window).resize(function(){
//     var wi = $(window).width();
//     var scroll_pos = 0;

//     if (wi >= 768) {
//       $(document).scroll(function() {
//         scroll_pos = $(this).scrollTop();
//         if(scroll_pos > 25) {
//           $("nav").css('background-color', '#333333');
//           $("nav").css('transition', '0.3s');
//         }
//         else {
//           $("nav").css('background-color', 'transparent');
//         }
//       })
//     }
//     else if (wi < 768) {
//       $("nav").css('background-color', '#333333');
//     }
//   })
// })