// Tutorials drawn from:
// https://developers.google.com/maps/documentation/javascript/adding-a-google-map
// https://www.sitepoint.com/find-a-route-using-the-geolocation-and-the-google-maps-api/
// Nautical styled map from: https://snazzymaps.com/style/92258/nautical-map
// Marker icons made by http://www.flaticon.com/authors/scott-de-jonge

const { coordinates, MAP_OPTIONS } = require('./constants');
const { makeMap, renderMarker } = require('./map');
const geolocate = require('./geolocation');
const createRouter = require('./route');

window.onload = () => {
  const map = makeMap();
  const router = createRouter(map);
  renderMarker(coordinates.GOOGLE, 'green', map);

  geolocate(position => {
    map.setCenter(position);
    renderMarker(position, 'navy', map);
    router.renderRoute(position, coordinates.GOOGLE, 'DRIVING');

    document.getElementById('controls').addEventListener('click', (
      { target }
    ) => {
      router.renderRoute(position, coordinates.GOOGLE, target.parentNode.value);
    });
  });
};
