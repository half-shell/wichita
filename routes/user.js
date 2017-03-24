'use strict'

module.exports = function(userRouter){
    userRouter.get('/', (req, res) => {
        res.send('It works')
    })
}
