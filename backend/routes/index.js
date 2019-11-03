var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

//Appel du model -> Schema
const gamesModel = require('../models/gamesModel');


//Page Accueil par defaut
router.get('/', function (req, res) {
  //Appel de la vue index.twig
  res.render('index'), {title: 'Backend VideoGames Shop'}
});

router.get('/games/add', function (req, res) {
  //Appel de la vue index.twig
  res.render('addGames');
});

router.get('/games/edit', function (req, res) {
  //Appel de la vue index.twig
  res.render('editGames');
});

//Liste de tous les jeux Json

router.get('/games', async (req, res) => {
  try {
    //stock des valeurs dans une constante et request findAll
    const gamesList = await gamesModel.find();
    //rendu
    res.send(gamesList);
  }catch (e) {
    //Sinon erreur
    console.log(e);
    res.status(400).send(e);
  }
});

//Route par id
router.get('/games/:id', function (req, res) {

  const id = mongoose.Types.ObjectId(req.params.id);
  if(mongoose.Types.ObjectId.isValid(id)){
    gamesModel.findById(id).then((gamesId) =>{
      if(gamesId){
        console.log('Ok');
        res.send(gamesId)
      }else{
        console.log('Id introuvable')
      }
    }).catch((err)=>{
      console.log(err);
    });
  }else{
    console.log('Entrer un id valide !')
  }
});

//Ajouter un jeu
router.post('/games/add', function (req, res) {
  gamesModel.create(req.body).then(
      addGames => {
        addGames.save();
        res.send(addGames);
        console.log(addGames);
      }).catch((err => {
    console.log(err);
  }))
});

//Update console
//ICI GET POUR TESTER DANS URL
//ex: http://localhost:3000/games/edit?id=5dbd2b3b41aab51968486eb9&price=123456
//id valide = 5dbd2b3b41aab51968486eb9
router.post('/games/edit/:id', (req, res) =>{

    gamesModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(updateGames =>{
            res.send({
                confirmation: 'Success',
                data: updateGames,
            });
        })
        .catch(e =>{
            res.json({
                confirmation:'error',
                message: e.message
            });
        });

        console.log(this.data);
});

//effacer
//delete
//http://localhost:3000/games/delete/5dbc44111d6e8f2798598985
router.get('/games/delete/:id', function (req, res) {
  const id = mongoose.Types.ObjectId(req.params.id);
  if(mongoose.Types.ObjectId.isValid(id)) {
    gamesModel.remove({_id: id})
        .then((docs)=>{
          if(docs) {
            res.send({"success":true,data:docs});
          } else {
            res.send({"success":false,data:"no such user exist"});
          }
        }).catch((err)=>{
      console.log(err);
    })
  }else {
    res.send({"success":false,data:"please provide correct Id"});
  }
});



module.exports = router;
