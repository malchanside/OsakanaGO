// 地図の中心を決める
var latlng = new google.maps.LatLng(35.387951, 139.427123);
 
// 地図を表示するためのオプションを設定する
var opt = {
  zoom: 17,
  center: latlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
 
// 地図を表示する。
var map = new google.maps.Map(document.getElementById('map'), opt);

//指定した画像のアイコンを設置する

//鴨池
var image1 = 'fishicon1.png';
    var marker1 = new google.maps.Marker({
        position: {lat: 35.387115, lng: 139.427281 },
        map: map,
        icon: image1
    });

//κ
var image2 = 'fishicon2.png';
    var marker2 = new google.maps.Marker({
        position: {lat: 35.387704, lng: 139.426141 },
        map: map,
        icon: image2
    });

//θ
var image3 = 'fishicon3.png';
    var marker3 = new google.maps.Marker({
        position: {lat: 35.388918, lng: 139.427515 },
        map: map,
        icon: image3
    });

//メディア
var image4 = 'fishicon4.png';
    var marker4 = new google.maps.Marker({
        position: {lat: 35.388211, lng: 139.427310 },
        map: map,
        icon: image4
    });

function sakujo() {
			marker1.setMap(null);
}