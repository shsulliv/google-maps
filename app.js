// Tutorials drawn from:
// https://developers.google.com/maps/documentation/javascript/adding-a-google-map
// https://www.sitepoint.com/find-a-route-using-the-geolocation-and-the-google-maps-api/

const calculateRoute = ({ travelMode }) => {

  const mapOptions = {
    zoom: 10,
    center: {lat: 51.5074, lng: 0.1278}, // Center initialized to London
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  const mapObject =
    new google.maps.Map(document.getElementById('map'), mapOptions);

  const directionsService = new google.maps.DirectionsService();

  const start = {lat: 51.5138453, lng: -0.1005393}; // St. Paul's Cathedral
  const end = {lat: 51.5332408, lng: -0.1281903}; // Google London, King's Cross

  const directionsRequest = {
    origin: start,
    destination: end,
    travelMode: google.maps.DirectionsTravelMode[travelMode],
    unitSystem: google.maps.UnitSystem.METRIC
  };

  directionsService.route(
    directionsRequest,
    (response, status) => {
      if (status == google.maps.DirectionsStatus.OK) {
        new google.maps.DirectionsRenderer({
          map: mapObject,
          directions: response
        });
      }
      else
        console.log('Unable to complete your request');
    }
  );
};

const controls = document.getElementById('controls');

controls.addEventListener('click', (event) => {
  event.preventDefault();
  calculateRoute({travelMode: event.target.value});
});

calculateRoute({ travelMode: 'DRIVING' });
