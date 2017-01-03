// 地図の中心を決める
var latlng = new google.maps.LatLng(35.388276, 139.427348);
 
// 地図を表示するためのオプションを設定する
var opt = {
  zoom: 15,
  center: latlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
 
// 地図を表示する。
var map = new google.maps.Map(document.getElementById('map'), opt);