// Accessing the Directions API

const directionsService = new google.maps.DirectionsService();

const createRequest = (origin, destination, travelMode) => ({
  origin,
  destination,
  travelMode: google.maps.DirectionsTravelMode[travelMode],
  unitSystem: google.maps.UnitSystem.METRIC
});

module.exports = function createRouter(map) {
  const renderer = new google.maps.DirectionsRenderer({
    map,
    suppressMarkers: true,
    polylineOptions: {
      strokeColor: '#d42039',
      strokeWeight: 5
    }
  });

  function renderRoute(origin, destination, travelMode) {
    const request = createRequest(origin, destination, travelMode);

    directionsService.renderRoute(request, (directions, status) => {
      if (status == google.maps.DirectionsStatus.OK) {
        renderer.setDirections(directions);
      } else {
        console.log('Unable to complete your request');
      }
    });
  }

  return { renderRoute };
};
