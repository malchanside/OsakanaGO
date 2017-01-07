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


var image = ['fishicon1.png', 'fishicon2.png', 'fishicon3.png', 'fishicon4.png'];
var coordinate = [
    ['鴨池', 35.387115, 139.427281],
    ['κ', 35.387704, 139.426141],
    ['θ', 35.388918, 139.427515],
    ['メディア', 35.388211, 139.427310]
];
var marker1, marker2, marker3, marker4;
var marker = [marker1, marker2, marker3, marker4];

var i;
for (i = 1; i < 5; i++) {
    
    marker[i - 1] = new google.maps.Marker({
        position: {lat: coordinate[i - 1][1], lng: coordinate[i - 1][2] },
        map: map,
        icon: image[i - 1]
    });
}
