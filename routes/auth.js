'use strict'
const models = require('../models');
let User = models.User;
//payload sous la forme login / password
module.exports = function(authRouter) {

    authRouter.post('/', (req, res, err) => {
      User.findOne({where: { email: req.body.username }}).then((user) => {
        console.log(user);
          if (!user) {
              res.send("bad username")
          }
          if (user.password == req.body.password) {
              res.send("Authentification successfull")
          }
          else {
              res.send("Authentification not successfull")
          }
      });
    });
}
