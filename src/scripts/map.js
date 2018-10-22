/* let lang;

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelectorAll('#googleMap').length > 0)
  {
    if (document.querySelector('html').lang) {
      lang = document.querySelector('html').lang;
    } else {
      lang = 'en';
    }

    var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&key=AIzaSyDUD161uyW5j432MBN_AN-MTGHSz50xl30&language=' + lang;
    document.getElementsByTagName('head')[0].appendChild(js_file);
  }
});

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('googleMap'),  {
    // Initialize center and zoom
    storeLatLng: {lat: 63.417831662, lng: 10.401831726},
    zoom: 1
  });
}

 */

var map;
var location = {lat: 63.417831662, lng: 10.401831726};

function initMap(){
  map = new google.maps.Map(document.getElementById('googleMap'), {
    center: location,
    zoom: 15,
    scrollwheel: false,
    fullscreenControl: true,

    // Place full screen view option on the bottom left
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },

  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
    animation: google.maps.Animation.DROP, 
    title: 'droneLOAN', 
    icon: {
      url: 'www.droneLOAN.com',
      scaledSize: new google.maps.Size(75, 120)
    }
  });
}