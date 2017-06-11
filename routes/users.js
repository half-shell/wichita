'use strict'
const models = require('../models');
let User = models.User;
let friends = models.sequelize.models.userfriends;

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
        User.findOne({where: {id: req.params.user_id}}).then((user)=>{
          if(user == null)
            res.send("this user doesn't exist");
          res.send(user);
        })
    })

    // modify this user
    usersRouter.put('/:user_id', (req, res) => {
      User.findOne({where: {id : req.params.user_id}}).then((user)=>
      {
        if(req.body.lastname != null)
          user.update({lastname : req.body.lastname});
        if(req.body.firstname != null)
            user.update({lastname : req.body.firstname});
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
      friends.findAll({where: {userId : req.params.user_id}}).then((friend) =>
      {
        res.send(friends)
      })
      res.send('get All of His Friends of id ' + req.params.user_id)
    });

    // get all that have smtg
    /*usersRouter.post('/:user_id/friends', (req, res)=> {
      User.findOne({where: {id : req.params.user_id}}).then((user)=>{

        res.send('post new friends in user of id ' + req.params.user_id)
      })
    }

    //get this friend
    usersRouter.get('/:user_id/friends/:friend_id', (req, res) => {
      User.findOne({where:{id : req.params.user_id}}).then((user) =>
      {

      });
      res.send('get new friend');
    })

    //askToBeHisFriend
    usersRouter.post('/:user_id/friends/:friend_id', (req, res, err) => {
      User.findOne({where: {id : req.params.user_id}}).then((user) =>
      {
        return user;
      });
      res.send('get new friend');
    })


    // modify this friend
    usersRouter.put('/:user_id/friends/:friend_id', (req, res) => {
      res.send('modify this friend');
    })*/
}
