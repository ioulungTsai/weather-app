const request = require('request')

const url = 'https://api.darksky.net/forecast/f4598ead4de47224700d74c558dc78b1/37.8267,-122.4233'

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.currently)
})