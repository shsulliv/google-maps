if (location.protocol !== 'https:') location.protocol = 'https:';

const { GOOGLE_COORDS } = require('./constants');
const { makeMap, renderMarker } = require('./map');
const geolocate = require('./geolocation');
const createRouter = require('./route');

window.onload = () => {
  const map = makeMap();
  const router = createRouter(map);
  renderMarker(GOOGLE_COORDS, 'green', map);

  geolocate(position => {
    map.setCenter(position);
    renderMarker(position, 'navy', map);
    router.renderRoute(position, GOOGLE_COORDS, 'DRIVING');

    document.getElementById('controls').addEventListener('click', (
      { target }
    ) => {
      router.renderRoute(position, GOOGLE_COORDS, target.parentNode.value);
    });
  });
};
