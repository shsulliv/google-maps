window.calculateRoute = () => {

  const mapOptions = {
    zoom: 10,
    center: {lat: 51.5074, lng: 0.1278}, // Center initialized to London
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  const mapObject = new google.maps.Map(document.getElementById("map"),
                                        mapOptions);

  const directionsService = new google.maps.DirectionsService();

  const start = {lat: 51.5138453, lng: -0.1005393}; // St. Paul's Cathedral
  const end = {lat: 51.5332408, lng: -0.1281903}; // Google London, King's Cross

  const directionsRequest = {
    origin: start,
    destination: end,
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
  };

  directionsService.route(
    directionsRequest,
    function(response, status)
    {
      if (status == google.maps.DirectionsStatus.OK) {
        new google.maps.DirectionsRenderer({
          map: mapObject,
          directions: response
        });
      }
      else
        console.log("Unable to complete your request");
    }
  );
}
