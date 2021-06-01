$(document).ready(function(){
var usbList;
function getall() {
  $(".usbList").html(" ");
  $.ajax({
    url:"api/getUSB.php",
    method:"GET",
    success:function(data) {
      usbList = JSON.parse(data);
      console.log(usbList);
      for (var i = 0; i < usbList.length; i++) {
        $(".usbList").append('<li><h2>'+"id: "+usbList[i]["id"]+'</h2><h3>'+"Name: "+usbList[i]["name"]+'</h3><h4>'+"Group: "+usbList[i]["groupe"]+'</li>');
      }
    }
  })
}
getall();
});

