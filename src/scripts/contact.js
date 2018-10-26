// Removes text from input fields
function clearInputFields() {
  document.getElementById('contactFirstInputField').value = '';
  document.getElementById('contactInputField').value = '';
  document.getElementById('contactInquiry').value = ''; 
}

// Display an alert when contact form is submitted
const contactForm = document.getElementById('contactForm');
const fakeRequest = evt => {
  alert('Thank you for contacting us, you will hear from us shortly');
  evt.preventDefault();

  clearInputFields();
};

contactForm.addEventListener('submit', fakeRequest, true);

// Google Maps API related functions
function initMap(){
  var location = {lat: 63.417831662, lng: 10.401831726};
  var map = new google.maps.Map(document.getElementById('googleMap'), {
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

