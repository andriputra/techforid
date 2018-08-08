$(document).ready(function(){
  var navHeight = $('#myHeader').offset().top;
  $(window).scroll(function(){
    if ($(window).scrollTop() > navHeight) {
      $("#myHeader").addClass("fixed").slideDown('slow');
    }
    else {
      $("#myHeader").removeClass("fixed");
    }
 });
});
