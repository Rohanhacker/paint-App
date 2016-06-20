// canvas

var $canvas = $("canvas");
var $context = $("canvas")[0].getContext("2d");

// end
var $color = $(".red").css("background-color");
$("#revealColorSelect").click(function() {
  $("#colorSelect").toggle();
});

$(".controls ul").on("click","li",function() {
  $(".selected").removeClass("selected");
  $(this).addClass("selected");
  $color = $(this).css("background-color");
});
function colorshow() {
  var $r = $("#red").val();
  var $g = $("#green").val();
  var $b = $("#blue").val();
  $("#newColor").css({"background-color": "rgb(" + $r + "," + $g + "," + $b + ")" });
  $color = $("#newColor").css("background-color");
}
colorshow();
$("input[type=range]").mouseenter(function() {
    $(this).mousemove(colorshow);
}
);
$("#addNewColor").click(function() {
  $nl = $("<li></li>");
  $nl.css({"background-color" : $color })
  $("ul").append($nl);
  $(".selected").removeClass("selected");
  $($nl).addClass("selected");
  });

// canvas drawing stuff

$("canvas").mousedown(
  function(e) {
    laste = e;
    md = true;
  }
).mousemove(
  function(e) {
    if(md) {
      $context.beginPath();
      $context.moveTo(laste.offsetX,laste.offsetY);
      $context.lineTo(e.offsetX,e.offsetY);
      $context.strokeStyle = $color;
      $context.stroke();
    }
  }
).mouseup(function() {
  md = false;
});
