// @ts-nocheck
console.log("Start");

$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  if (startchange.length){
  $(document).scroll(function() { 
    console.log(offset);
    scroll_start = $(this).scrollTop();
    if(scroll_start > offset.top) {
        $(".nav").css('color', 'orange');
        $("<style>#logo::after{border-color: orange}</style>" ).appendTo("head");
    } else {
        $('.nav').css('color', 'black');
        $("<style>#logo::after{border-color: blue}</style>" ).appendTo("head");
    }});
   }
});