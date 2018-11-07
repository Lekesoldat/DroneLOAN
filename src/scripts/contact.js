/*
FILE NAME: contact.js
WRITTEN BY: Andreas
WHEN: October 2018
PURPOSE: Implementing Google Maps and show a popup once form is submitted.
*/

// Display an alert when contact form is submitted
const contactForm = document.getElementById('contactUs');
function fakeRequest() {
  alert('Thank you for contacting us!🎉 You will hear from us shortly');
}

contactForm.addEventListener('submit', fakeRequest, true);

// Google Maps API related functions
function initMap(){
  const location = {lat: 63.417831662, lng: 10.401831726};
  const map = new google.maps.Map(document.getElementById('googleMap'), {
    center: location,
    zoom: 15,
    scrollwheel: false,
    fullscreenControl: true,

    // Place full screen view option on the bottom left
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },
  });
}