$("#revealColorSelect").click(function() {
  $("#colorSelect").toggle();
});

$(".controls ul").on("click","li",function() {
  $(".selected").removeClass("selected");
  $(this).addClass("selected");
});
