// Get the user's current location

const renderError = require('./error');

module.exports = cb => {
  // HTML5 geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        cb(userLocation);
      },
      error => {
        renderError();
      }
    );
  } else {
    renderError();
  }
};
