// Get the user's current location

module.exports = cb => {
  // HTML5 geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      cb(userLocation);
    });
  } else {
    console.log('No support for geolocation');
  }
};
