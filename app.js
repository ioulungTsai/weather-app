const request = require('request')

const url = 'https://api.darksky.net/forecast/f4598ead4de47224700d74c558dc78b1/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!')
  } else if (response.body.error) {
    console.log('Unable to find location')
  } else {
    const {temperature, precipProbability} = response.body.currently
    console.log(`${response.body.daily.data[0].summary} It is currently ${temperature} degree out. There is a ${precipProbability * 100}% chance of rain.`)
  }
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYnJhbmRvbnRzYWkiLCJhIjoiY2sxZ3JiZ3YyMTdvMzNpcDdvN3N5OGVveSJ9.hTY_3KY1x8tR90xnzw0GLw&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to location service!')
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location. Try another search.')
  } else {
    const { center } = response.body.features[0]
    const latitude = center[1]
    const longtitude = center[0]
    console.log(latitude, longtitude)
  }
})
