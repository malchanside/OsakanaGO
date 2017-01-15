//非対応ブラウザへのアラート
if (!navigator.geolocation) {
    alert('お使いのブラウザはサポート対象外です。別のブラウザでお試しください。');
}

// 地図を表示するためのオプションを設定する
var opt = {
    zoom: 17,
    center: new google.maps.LatLng(35.387951, 139.427123),
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

// 地図を表示する。
var map = new google.maps.Map(document.getElementById('map'), opt);

//アイコンを設置する
var placedata = [
    ['鴨池', 35.387115, 139.427281, 'fishicon1.png'],
    ['κ', 35.387704, 139.426141, 'fishicon2.png'],
    ['θ', 35.388918, 139.427515, 'fishicon3.png'],
    ['メディア', 35.388211, 139.427310, 'fishicon4.png'],
    ['テスト用けーいち自宅', 35.690885, 139.703263, 'fishicon1.png']
];
var marker1, marker2, marker3, marker4, marker5;
var marker = [marker1, marker2, marker3, marker4, marker5];

var i;
for (i = 0; i < 5; i++) {

    marker[i] = new google.maps.Marker({
        position: {lat: placedata[i][1], lng: placedata[i][2] },
        map: map,
        icon: placedata[i][3]
    });
}


function movetomyhouse() {
    map.panTo(new google.maps.LatLng(placedata[4][1], placedata[4][2]));
}

var latLng;

var neko = new google.maps.Marker({
    position: {lat: 0, lng: 0},
    map: map,
    icon: 'neko.png'
});


var ido, keido;

//現在地を追跡,https://syncer.jp/how-to-use-geolocation-api
var watchId = navigator.geolocation.watchPosition(
    function (result) {
    //    neko.setMap(null);
        neko.setVisible(false);
        //現在地の取得成功
        var position = result.coords,
            radius = position.accuracy,
            latLng = new google.maps.LatLng(position.latitude, position.longitude);
        neko = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: 'neko.png'
        });
        ido = position.latitude;
        keido = position.longitude;
        neko.setVisible(true);


       //チェック用、あとで消す
        var nichiji = new Date(),
            year = nichiji.getFullYear(),
            month = nichiji.getMonth() + 1,
            week = nichiji.getDay(),
            day = nichiji.getDate(),
            hour = nichiji.getHours(),
            minute = nichiji.getMinutes(),
            second = nichiji.getSeconds();
        console.log(year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second);
        console.log(position);
    },
    //取得に失敗した場合
    function (error) {
        // エラーコード(error.code)の番号
        // 0:UNKNOWN_ERROR				原因不明のエラー
        // 1:PERMISSION_DENIED			利用者が位置情報の取得を許可しなかった
        // 2:POSITION_UNAVAILABLE		電波状況などで位置情報が取得できなかった
        // 3:TIMEOUT					位置情報の取得に時間がかかり過ぎた…

        // エラー番号に対応したメッセージ
        var errorInfo = [
            "原因不明のエラーが発生しました…。",
            "位置情報の取得が許可されませんでした…。",
            "電波状況などで位置情報が取得できませんでした…。",
            "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。"
        ],
            // エラー番号
            errorNo = error.code,
            // エラーメッセージ
            errorMessage = "[エラー番号: " + errorNo + "]\n" + errorInfo[errorNo];

        // アラート表示
        alert(errorMessage);
    },
    {
        "enableHighAccuracy": true,
        "timeout": 8000,
        "maximumAge": 0
    }
);


//つかわないとおもふ
//https://syncer.jp/how-to-use-geolocation-api
/*
function catchfish() {
// 現在地を取得
	navigator.geolocation.getCurrentPosition(
        //取得に成功した場合
		function (position) {
                // 取得したデータの整理
			var data = position.coords,
                // データの整理
                lat = data.latitude,
                lng = data.longitude,
                accLatlng = data.accuracy,
                // 位置情報
                latlng = new google.maps.LatLng(lat, lng);
            decision();
		},

		//取得に失敗した場合
		function (error) {
			// エラーコード(error.code)の番号
			// 0:UNKNOWN_ERROR				原因不明のエラー
			// 1:PERMISSION_DENIED			利用者が位置情報の取得を許可しなかった
			// 2:POSITION_UNAVAILABLE		電波状況などで位置情報が取得できなかった
			// 3:TIMEOUT					位置情報の取得に時間がかかり過ぎた…

			// エラー番号に対応したメッセージ
			var errorInfo = [
				"原因不明のエラーが発生しました…。",
				"位置情報の取得が許可されませんでした…。",
				"電波状況などで位置情報が取得できませんでした…。",
				"位置情報の取得に時間がかかり過ぎてタイムアウトしました…。"
			],
                // エラー番号
                errorNo = error.code,
                // エラーメッセージ
                errorMessage = "[エラー番号: " + errorNo + "]\n" + errorInfo[errorNo];

			// アラート表示
			alert(errorMessage);
		},

		// [第3引数] オプション
		{
			"enableHighAccuracy": true,
			"timeout": 5000,
			"maximumAge": 2000
		}

	);
}
*/

var counter = 0;
var sakana0 = 0,
    sakana1 = 0,
    sakana2 = 0,
    sakana3 = 0,
    sakana4 = 0;
var count = [sakana0, sakana1, sakana2, sakana3, sakana4];
var muri;
var distance = 0;

function tsukamaetakesu(){
  document.getElementById('tsukamaeta').innerHTML = "<br>";
}


function catchfish() {

    for (i = 0; i < 5; i++) {
      var lat1 = ido,
          lng1 = keido,
          lat2 = placedata[i][1],
          lng2 = placedata[i][2];

      // 測地線航海算法の公式,http://hamasyou.com/blog/2010/09/07/post-2/
      //ここから引用
    //  function geoDistance(lat1, lng1, lat2, lng2) {
      // 引数 6 は小数点以下の桁数（距離の精度）

          if ((Math.abs(lat1 - lat2) < 0.00001) && (Math.abs(lng1 - lng2) < 0.00001)) {
            distance = 0;
          } else {
            lat1 = lat1 * Math.PI / 180;
            lng1 = lng1 * Math.PI / 180;
            lat2 = lat2 * Math.PI / 180;
            lng2 = lng2 * Math.PI / 180;

            var A = 6378140;
            var B = 6356755;
            var F = (A - B) / A;

            var P1 = Math.atan((B / A) * Math.tan(lat1));
            var P2 = Math.atan((B / A) * Math.tan(lat2));

            var X = Math.acos(Math.sin(P1) * Math.sin(P2) + Math.cos(P1) * Math.cos(P2) * Math.cos(lng1 - lng2));
            var L = (F / 8) * ((Math.sin(X) - X) * Math.pow((Math.sin(P1) + Math.sin(P2)), 2) / Math.pow(Math.cos(X / 2), 2) - (Math.sin(X) - X) * Math.pow(Math.sin(P1) - Math.sin(P2), 2) / Math.pow(Math.sin(X), 2));

            distance = A * (X + L);
            var decimal_no = Math.pow(10, 6);
            distance = Math.round(decimal_no * distance / 1) / decimal_no;  //単位はmだよ
          }
          console.log(distance);
    //  }
      //ここまで引用
      if (distance <= 15){
          muri = 0;
          //捕獲数+1
          count[i] = 1;
          counter = count[0] + count[1] + count[2] + count[3] + count[4];

          //アイコン消す
          marker[i].setMap(null);
          //つかまえたアラート
          document.getElementById('tsukamaeta').innerHTML = placedata[i][0] + "の魚をつかまえた！";
          setTimeout(tsukamaetakesu, 3000);
          //捕獲数表示を変える
          document.getElementById('getosakana1').innerHTML = "捕まえた数<br>"+ counter + "匹";
          shinka();
      }else{
            //無理な場合
          muri = 1;

      }
    }
    if(muri == 1){
      alert('つかまえられなかったよ！もう少し近づいてね！');
    }

}

var nekopic = ["neko1.jpg", "neko2.jpg", "neko3.jpg", "neko4.jpg", "neko5.jpg"];

function shinka(){
  document.getElementById("shinka").innerHTML = "<img src="+nekopic[counter-1]+">";
}
