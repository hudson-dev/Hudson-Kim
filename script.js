// @ts-nocheck
console.log("Start");

$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();

  var top = $('#top');
  var topOffset = top.offset();

  if (startchange.length){
  $(document).scroll(function() { 

    console.log(offset);
    scroll_start = $(this).scrollTop();
    if(scroll_start > topOffset.top) {
      $("#home").css('background-color', 'blue');

      $(".nav").css('color', 'orange');
      $("<style>#logo::after{border-color: orange}</style>" ).appendTo("head");

      // $(".nav").css('color', 'white');
      // $("<style>#logo::after{border-color: orange}</style>" ).appendTo("head");

      $("h1").css('color', 'white');
    } else {
      $("#home").css('background-color', 'white');

      $('.nav').css('color', 'black');
      $("<style>#logo::after{border-color: blue}</style>" ).appendTo("head");
      
      // $('.nav').css('color', 'black');
      // $("<style>#logo::after{border-color: blue}</style>" ).appendTo("head");
      $("h1").css('color', 'black');
    }

    // if(scroll_start > offset.top) {
    //     $(".nav").css('color', 'orange');
    //     $("<style>#logo::after{border-color: orange}</style>" ).appendTo("head");
    // } else {
    //     $('.nav').css('color', 'black');
    //     $("<style>#logo::after{border-color: blue}</style>" ).appendTo("head");
    // }



    });
   }
});



