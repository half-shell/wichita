'use strict'

const sequelize = require('sequelize')
const express = require('express')
const bodyparser = require('body-parser')
const port = 3000
const routes = require('./routes')
const models = require('./models')

const app = express()

const routers = {
    users: express.Router(),
    auth: express.Router(),
}
app.use(bodyparser.json())

app.use('/users', routers.users)
app.use('/auth', routers.auth)

//models.sequelize.sync({ force: true })

routes(routers)

//Test route
app.get('/ping', (req, res) => {
    res.send('PONG\n')
})

app.listen(port, () => {
    console.log('wichita\'s listenin on port ' + port)
})
