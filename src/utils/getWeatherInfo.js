const request = require('request');

const getWeatherInfo = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=61ef6dddea8398b93ecd4b6b2429d419&query='+ address +'#'

    request({ url, json: true }, (err, {body}) => {
        const data = body
        if (err) {
            callback('unable to connect weather',null)
            return
        } else if (body.error) {
            callback('unable to request',null)
            return
        }
        callback(null,data.location.name
            + ' weather is '
            + data.current.weather_descriptions[0]
            + ' temperature is '
            + data.current.temperature
            + 'C')
    })
}

module.exports = getWeatherInfo

