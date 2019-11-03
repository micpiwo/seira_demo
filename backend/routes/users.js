const express = require('express');
const router = express.Router();
//appel du model user
const User = require('../models/user');
const mongoose = require('mongoose');
const db = "mongodb://localhost:27017/micjson";

//cors pour test en local
const cors = require('cors');
//options de cors
let corsOptions = {
  origin:'*',
  optionsSuccessStatus: 200,
  useUnifiedTopology: true
};
//connexion au mongodb atlas cloud
mongoose.connect(db, err => {
  if(err){
    console.log(err)
  }else{
    console.log('Connexion réussie à mongoDB users');
  }
});
router.get('/', (req, res) =>{
  res.render('users');
});

router.get('/datas', async (req, res) => {
  try {
    //stock des valeurs dans une constante et request findAll
    const usersList = await User.find({});
    //rendu
    res.send(usersList);
    console.log(usersList);
  }catch (e) {
    //Sinon erreur
    console.log(e);
    res.status(400).send(e);
  }
  console.log(usersList);
});

router.get('/register', function (req, res) {
  //Appel de la vue index.twig
  res.render('register');
});

router.get('/login', function (req, res) {
  //Appel de la vue index.twig
  res.render('login');
});

//post register user
router.post('/register', (req, res) => {
  //mongoose extrait les données
  let userData = req.body
  //instance de user et assignation au model
  let user = new User(userData)
  //sauvegarde de user
  user.save((error, registerUser) => {
    if(error){
      console.log(error)
    }else{
      res.status(200).send(registerUser)
    }
  })
})

router.post('/login', (req, res) =>{
  let userData = req.body

  //User exist ou non
  User.findOne({email: userData.email}, (error, user) => {
    if(error){
      console.log(error)
    }else{
      //Si email ne match pas
      if(!user){
        res.status(401).send('Email non valide !')
      }else{
        if(user.password !== userData.password){
          res.status(401).send('Mot de passe non valide !')
        }else{
          console.log('Connexion réussie !')
          res.status(200).send(user)
        }
      }
    }
  })
})

router.get('/users/events', (req, res) => {
  let events = [
    {
      "_id": "1",
      "name": "Nes",
      "description": "La console 8 bit de nintendo.",
      "date": "2019-10-23t18:25:46.511Z"
    },
    {
      "_id": "2",
      "name": "Super Nes",
      "description": "La console 16 bit de nintendo sortie en 1994.",
      "date": "2019-10-23t18:25:46.511Z"
    },
    {
      "_id": "3",
      "name": "Megadrive",
      "description": "La console 16 bit de Sega.",
      "date": "2019-10-23t18:25:46.511Z"
    },
    {
      "_id": "4",
      "name": "PC engine",
      "description": "La console de nec 16bit.",
      "date": "2019-10-23t18:25:46.511Z"
    },
  ]

  res.json(events)
})

router.get('/special', (req, res) => {
  let events = [
    {
      "_id": "1",
      "name": "Nes",
      "description": "La console 8 bit de nintendo.",
      "date": "2019-10-23t18:25:46.511Z"
    },
    {
      "_id": "2",
      "name": "Super Nes",
      "description": "La console 16 bit de nintendo sortie en 1994.",
      "date": "2019-10-23t18:25:46.511Z"
    },
    {
      "_id": "3",
      "name": "Megadrive",
      "description": "La console 16 bit de Sega.",
      "date": "2019-10-23t18:25:46.511Z"
    },
    {
      "_id": "4",
      "name": "PC engine",
      "description": "La console de nec 16bit.",
      "date": "2019-10-23t18:25:46.511Z"
    },
  ]

  res.json(events)
})

module.exports = router
