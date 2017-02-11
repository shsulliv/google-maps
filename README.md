# google-maps
## Description
Simple map app that takes a user's location and calculates a trip to Google London.

Live Demo [here](https://google-maps.surge.sh/)

## Installation
**Prerequisites:**
* [nodejs] >= [6.9.1](https://git.io/v1kpg)
* [npm] >= [3.10.9](https://git.io/v1kp6)

We recommend having [nvm] installed to manage [nodejs] versions, if you're
coming from ruby it's similar to `rbenv` or `rvm`. [n] is another, more
lightweight tool to manage [nodejs] versions. It is highly discouraged to
install [nodejs] with the installer provided on [nodejs].

## Run it locally

Clone the repository and run the local server:

```sh
git clone https://github.com/shsulliv/google-maps.git
cd google-maps
npm install && npm start
```

Navigate to [https://localhost:9966/](https://localhost:9966/) in your browser.

## Problem Definition
Create a webpage that uses the Google Maps JavaScript API to show a route from the user's current
location to another fixed location (which could be anywhere: your favorite restaurant, Buckingham Palace, Google London, etc.)
* Allow the user to switch between walking route, driving route, and public transportation
* Bonus points for making it responsive and work well on small screens (phone, tablets) and with touch interactions

## Resources Used
Tutorials drawn from:
* [Google Maps API Docs](https://developers.google.com/maps/documentation/javascript/adding-a-google-map)
* [Site Point Tutorial](https://www.sitepoint.com/find-a-route-using-the-geolocation-and-the-google-maps-api/)

Nautical Map Styling from:
* [Snazzy Maps](https://snazzymaps.com/style/92258/nautical-map)

[nvm]: https://github.com/creationix/nvm
[npm]: https://npmjs.com
[nodejs]: https://nodejs.org/en/
