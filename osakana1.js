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
    ['テスト用けーいち自宅', 35.679317, 139.589668, 'fishicon1.png']
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
    map.panTo(new google.maps.LatLng(35.679317, 139.589668));
}

var latLng;

var neko = new google.maps.Marker({
    position: {lat: 0, lng: 0},
    map: map,
    icon: 'neko.png'
});

//現在地を追跡,https://syncer.jp/how-to-use-geolocation-api
var watchId = navigator.geolocation.watchPosition(
    function (result) {
    //    neko.setMap(null); //ここ不安
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


function decision() {
    for (i = 0; i < 5; i++) {
        if (){
            //捕まえられる場合(設定した範囲内に魚がいる場合)
            //捕獲数+1

            //アイコン消す
            marker[i].setMap(null);
            //つかまえたアラート
            document.getElementById('getosakana1').innerHTML = (placedata[i][0] + 'の魚をつかまえた！');
        }else{
            //無理な場合
            alert('つかまえられなかったよ！もう少し近づいてね！');
        }
    }
}
