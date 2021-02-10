require('dotenv').config()
const mydate = require('./modules/mydate')
const express = require('express')
const mytools = require('./modules/mytools')
const jwt = require('jsonwebtoken')
const uniqid = require('uniqid')

let secret = uniqid()
let expiration = 2000
let token = jwt.sign({username: "William", password: "azer"}, secret, {expiresIn: expiration})
console.log(jwt.verify(token, secret))
setTimeout(()=>{
    console.log("token expired !")
}, expiration)
const app = express()
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_NAME
    }
})

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
  app.use(allowCrossDomain);

app.use(express.static('public'))
app.set(`view engine`, 'ejs')

app.get('/getUsers', (req, res) => {
    knex.select('*').from('users').then((rows)=>{
        let data = []
        for (rows of rows){
            // console.log(`${mydate.infoDate(rows.name).getDay()}`)
            // console.log(`${rows.titre}`)
            data.push(rows)
        }
        return data
    })
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        if(err) throw err
    })
})

app.get('/getFilms', (req, res) => {
    knex.select('*').from('films').then((rows)=>{
        let data = []
        for (rows of rows){
            // console.log(`${mydate.infoDate(rows.name).getDay()}`)
            // console.log(`${rows.titre}`)
            data.push(rows)
        }
        return data
    })
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        if(err) throw err
    })
})

app.get('/insertFilms', (req, res)=>{
    mytools.films(`${__dirname}/tournage.json`, (data)=>{
        //data.insertAllFilms()
    })
})

app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`)
})