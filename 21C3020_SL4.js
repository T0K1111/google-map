let gpsInfo,btnGpsCheck;

let WP;
let lat = 0;
let lng = 0;

function SccCB(position){
  lat = position.coords.latitude;
  lng = position.coords.longitude;
  stopWP();
  
  alert("位置情報を更新しました");
  showGPS();
}

function ErrCB(error){
  alert("位置情報を取得できませんでした");
}

function stopWP(error){
  navigator.geolocation.clearWatch(WP);
}

function updateWP(error){
  stopWP();
  // 端末の位置情報を継続的に取得する(navigator.geolocation.watchPosition)
  WP = navigator.geolocation.watchPosition(SccCB, ErrCB, {enableHighAccuracy: true});
}

function showGPS(){
  let value = "緯度は" + lat + "<br>";
  value += "経度は" + lng;
  gpsInfo.innerHTML = value;
}

window.addEventListener("load", ()=>{
  // DOM取得
  gpsInfo = document.getElementById("gpsInfo");
  btnGpsCheck = document.getElementById("btnGpsCheck");

  // GPSチェックボタンイベント
  btnGpsCheck.addEventListener("click", updateWP);
   
});

function initMap(){
  var opts = {
    zoom: 15,
    center:new google.maps.LatLng(lat,lng),
    mapTypeID:'roadmap',

  };
  var map = new google.maps.Map(document.getElementById('map'),opts);
  var ymap = new yield.Map("map");
  ymap.drawMap(new ymap.LatLng(lat,lng),17,Y.LayerSetId.NORMAL);
 }

 stoplng();
 stoplat();

 function hoge(){
  gpsInfo = document.getElementById("gpsInfo");
  location.href = 'https://www.google.co.jp/maps/@'+ lat +','+ lng +',15z?hl=ja&authuser=0'
  
 }


 function tenyuuryoku(){
  var firstform = document.getElementById("firstform").value;
  var textForm = document.getElementById("secondform").value;
 
  var w_url = 'https://www.google.co.jp/maps/@'+ firstform +','+ textForm +',15z?hl=ja&authuser=0';
  window.open(w_url, "_blank") ;
  
 }



 