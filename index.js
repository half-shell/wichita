const express = require('express')
const port = 3000
const routes = require('./routes')

const app = express()

const routers = {
    user: express.Router()
}

app.use('/user', routers.user)

routes(routers)

//Test route
app.get('/ping', (req, res) => {
    res.send('PONG\n')
})

app.listen(port, () => {
    console.log('wichita\'s listenin on port ' + port)
})
