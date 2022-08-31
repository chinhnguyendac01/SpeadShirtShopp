$(document).ready(function () {
     var stt = 0;
     var endImg = $("img.slide:last").attr("idx");
   
     $(".change-img button").click(function () {
       stt = $(this).attr("idx");
   
       changeImg(stt);
     });
   
     $("#nextt").click(function () {
       if (++stt > endImg) {
         stt = 0;
       }
   
       changeImg(stt);
     });
   
     $("#prevv").click(function () {
       if (--stt < 0) {
         stt = endImg;
       }
   
       changeImg(stt);
     });
   
     var interval;
     var timer = function () {
       interval = setInterval(function () {
         $("#nextt").click();
       }, 2000);
     };
     timer();
   });
   function changeImg(stt) {
     $("img.slide").hide();
     $("img.slide").eq(stt).fadeIn(500);
     $(".change-img button").removeClass("active");
     $(".change-img button").eq(stt).addClass("active");
   }
   