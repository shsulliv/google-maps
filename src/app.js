if (location.protocol !== 'https:') location.protocol = 'https:';

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
