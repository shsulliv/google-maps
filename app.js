// Tutorials drawn from:
// https://developers.google.com/maps/documentation/javascript/adding-a-google-map
// https://www.sitepoint.com/find-a-route-using-the-geolocation-and-the-google-maps-api/

// Nautical styled map from: https://snazzymaps.com/style/92258/nautical-map
const nauticalStyle =
[
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#101f4b"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#ff0000"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
                "color": "#f4f4f4"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#101f4b"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    // {
    //     "featureType": "road.highway",
    //     "elementType": "geometry.fill",
    //     "stylers": [
    //         {
    //             "saturation": "23"
    //         },
    //         {
    //             "color": "#d42039"
    //         }
    //     ]
    // },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": "-19"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#d9eded"
            },
            {
                "visibility": "on"
            }
        ]
    }
]

const calculateRoute = ({ travelMode }) => {

  // Building the Map
  const mapOptions = {
    zoom: 10,
    center: {lat: 51.5074, lng: 0.1278}, // Center initialized to London
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    styles: nauticalStyle
  };

  const mapObject =
    new google.maps.Map(document.getElementById('map'), mapOptions);

  // HTML5 geolocation
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition((position) => {
       var pos = {
         lat: position.coords.latitude,
         lng: position.coords.longitude
       };
       mapObject.setCenter(pos);

       const start = pos;
       const end = {lat: 51.5332408, lng: -0.1281903}; // Google London, King's Cross

       const startMarker = new google.maps.Marker({ position: start, map: mapObject, icon: 'gps.svg' });
       const stopMarker = new google.maps.Marker({ position: end, map: mapObject, icon: 'gps.svg' });

       // Accessing the Directions API
       const directionsService = new google.maps.DirectionsService();

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
               directions: response,
               suppressMarkers: true,
               polylineOptions: {
                 strokeColor: '#d42039',
                 strokeWeight: 5
              }
             });
           }
           else
             console.log('Unable to complete your request');
         }
       );
     });
   } else {
     console.log('No support for geolocation');
   }
};

// Setting the buttons to change mode of transportation
const controls = document.getElementById('controls');

controls.addEventListener('click', (event) => {
  event.preventDefault();
  calculateRoute({travelMode: event.target.parentNode.value});
});

// Setting an initialized route to 'Driving' on page load
calculateRoute({ travelMode: 'DRIVING' });
