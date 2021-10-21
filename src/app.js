const express = require('express')
const path = require('path')
const hbs = require('hbs')
const getWeatherInfo = require('./utils/getWeatherInfo')
const app = express()

const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../template/views')
const partialsPath = path.join(__dirname,'../template/partials')
app.use(express.static(publicPath))
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.get('/',(req,res) => {
    res.render('index',{
        content: 'hello hbs',
        title: 'Weather',
        author: 'zg'
    })
})

app.get('/help',(req,res) => {
    res.render('help',{
        title: 'Help',
        author: 'zg'
    })
})

app.get('/weather',(req,res) => {
    let city = req.query.city
    if (!city) {
        return res.send({
            error: "You must provide a city"
        })
    }
    getWeatherInfo(city,(err,data) => {
        if(err){
            return res.send({
                error: err
            })
        }
        res.send({
            data: data
        })
    })
})

app.get('/help/*',(req,res) => {
    res.render('404',{
        errormessage: 'sub page not found'
    })
})

app.get('*',(req,res) => {
    res.render('404',{
        errormessage: 'page not found'
    })
})

app.listen('5000')