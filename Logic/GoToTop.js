var showGoToTop = 150;
$(window).scroll(function () {
  if ($(this).scrollTop() >= showGoToTop) {
    $("#gototop").fadeIn();
  } else {
    $("#gototop").fadeOut();
  }
});
$(document).ready(function () {
  $("#gototop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});