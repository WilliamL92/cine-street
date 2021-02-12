require('dotenv').config()
const mydate = require('./modules/mydate')
const express = require('express')
const mytools = require('./modules/mytools')
const jwt = require('jsonwebtoken')
const uniqid = require('uniqid')
const bodyParser = require('body-parser')
const mailjet = require('node-mailjet').connect(process.env.API_KEY, process.env.SECRET_KEY)

// let secret = uniqid()
// let expiration = 2000
// let token = jwt.sign({username: "William", password: "azer"}, secret, {expiresIn: expiration})
// console.log(jwt.verify(token, secret))
// setTimeout(()=>{
//     console.log("token expired !")
// }, expiration)
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
app.use(bodyParser.json())



app.post('/insertUser', (req, res) => {
    let userEmail = false
    knex.select('*').from('users').then((rows)=>{
        let data = []
        
        for (rows of rows){
            // console.log(`${mydate.infoDate(rows.name).getDay()}`)
            // console.log(`${rows.titre}`)
            if(rows.email == req.body.email){
                userEmail = true
            }
            data.push(rows)
        }
        return data
    })
    .then((result)=>{
        if(!userEmail){
            knex('users').insert({nom: req.body.nom, prenom: req.body.prenom, email: req.body.email, password: req.body.password, date_ajout: mydate.getTimeNow()}).then((err)=>{
                const request = mailjet
                .post("send", {'version': 'v3.1'})
                .request({
                  "Messages":[
                    {
                      "From": {
                        "Email": process.env.EMAIL_FROM,
                        "Name": "CINE-STREET"
                      },
                      "To": [
                        {
                          "Email": req.body.email,
                          "Name": req.body.nom
                        }
                      ],
                      "Subject": "Bienvenu chez CINE-STREET.",
                      "HTMLPart": `<h3>Un nouveau membre d'équipage !</h3><p>Bonjour ${req.body.prenom} ${req.body.nom} et merci de faire confiance à cine-street.</p><p>Ta demande d'inscription a été validé, bravo !</p>`,
                      "CustomID": "AppGettingStartedTest"
                    }
                  ]
                })
                request
                  .then((result) => {
                    console.log(`email sent to ${req.body.email}`)
                  })
                  .catch((err) => {
                    console.log(err.statusCode)
                  })
                
             }).catch((err)=>{
                 console.log(err)
             })
        }

    })
    .catch((err)=>{
        console.log(err)
    })

    
})

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
    knex.select('*').from('list-films').then((rows)=>{
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
        data.insertAllFilms()
        res.send('insertion des données en cours, consultez les logs pour voir quand le téléchargement est terminé.')
    })
})

app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`)
})