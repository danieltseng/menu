$(function(){
  $("#icon1 img").hover(
   function() {
      $(this).attr("src","img/icon_pan_hover.png");
   },
   function() {
      $(this).attr("src","img/icon_pan.png");
   }
      );
  $("#icon2 img").hover(
   function() {
      $(this).attr("src","img/icon_door_hover.png");
       },
   function() {
      $(this).attr("src","img/icon_door.png");
   }
      );
  $("#icon3 img").hover(
   function() {
      $(this).attr("src","img/icon_plate_hover.png");
       },
   function() {
      $(this).attr("src","img/icon_plate.png");
   }
      );
});
