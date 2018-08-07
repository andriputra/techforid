$(document).ready(function(){
  $(window).bind("scroll", function() {
  var navHeight = $( window ).height() - 65 ;
    if ($(window).scrollTop() >= navHeight) {
      $("#myHeader").addClass("fixed");
    }
    else {
      $("#myHeader").removeClass("fixed");
    }
 });
});
