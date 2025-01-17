const request = require('request')

const forecast = (latitude, longtitude, callback) => {
  const url = `https://api.darksky.net/forecast/f4598ead4de47224700d74c558dc78b1/${latitude},${longtitude}`

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (response.body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degree out. There is a ${response.body.currently.precipProbability * 100}% chance of rain.`)
    }
  })
}

module.exports = forecast
