$(document).ready(function(){
  $("button").click(function(){
    $("p:last").removeClass("intro").addClass("main");
  });
});