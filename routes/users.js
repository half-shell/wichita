'use strict'
const models = require('../models');
let User = models.User;

module.exports = function(usersRouter){

    // get all Users
    usersRouter.get('/', (req, res) => {
      User.findAll().then((users) =>
      {
        res.send(users)
      })
    });

    // create new user
    usersRouter.post('/', (req, res)=> {
      if(req.body == null || req.body == undefined)
        res.send('you forgot the payload');
      else if(req.body.firstname == null || req.body.lastname == null
        || req.body.password == null || req.body.email == null)
        res.send('you forgot something in the payload');
      else
        User.create({firstname: req.body.firstname,
            lastname : req.body.lastname,
            password:req.body.password,
            email:req.body.email}).then(() => {
              res.send('User created')
            });
    })

    //get this user
    usersRouter.get('/:user_id', (req, res, err) => {
        User.where({id: req.params.user_id}).then((user)=>{
          if(user == null)
            res.send("this user doesn't exist");
          req.send(user);
        })
    })

    // modify this user
    usersRouter.put('/:user_id', (req, res) => {
      User.where({id : req.params.user_id}).then((user)=>
      {
        if(req.body.pseudo != null)
          user.update({pseudo : req.body.pseudo});
        if(req.body.password != null)
          user.update({password : req.body.password});
         if(req.body.email != null)
          user.update({email : req.body.email});

        res.send('Fin de modification');
      })
    })

    // get all his friend
    usersRouter.get('/:user_id/friends', (req, res) => {
        User.where({id : req.params.user_id}).then((user) => {
          console.log(user);
        })
        res.send('get All of His Friends of id ' + req.params.user_id)
    });

    // create new friend
    usersRouter.post('/:user_id/friends', (req, res)=> {
        User.where({id : req.params.user_id}).then((user)=>{
          console.log(user)
        })
        res.send('post new friends in user of id ' + req.params.user_id)
    })

    //get this friend
    usersRouter.get('/:user_id/friends/:friend_id', (req, res) => {
        res.send('get new friend');
    })

    // modify this friend
    usersRouter.put('/:user_id/friends/:friend_id', (req, res) => {
      res.send('modify this friend');
    })
}
