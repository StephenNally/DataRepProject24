const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.zw5qs.mongodb.net/');

const gameSchema = new mongoose.Schema({
  title:String,
  year:String,
  review:String,
  username:String,
  createdAt: { type: Date, default: Date.now }
});

const gameModel = new mongoose.model('sdfsdfsdf45',gameSchema);

//fetches all game reviews
app.get('/api/games', async (req, res) => {
    const games = await gameModel.find({});
    res.status(200).json({games})
});

//fetch game by id
app.get('/api/game/:id', async (req ,res)=>{
  const game = await gameModel.findById(req.params.id);
  res.json(game);
})

//find game by id and update
app.put('/api/game/:id', async (req, res)=>{
  const game = await gameModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(game);
})

//new game review
app.post('/api/games',async (req, res)=>{
    console.log(req.body.title);
    const {title, year, review, username} = req.body;

    const newGame = new gameModel({title, year, review, username});
    await newGame.save();

    res.status(201).json({"message":"Game Added!",Game:newGame});
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//delete game
app.delete('/api/game/:id', async (req, res) => {
  
  console.log('Deleting game with ID:', req.params.id);
  const game = await gameModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Game deleted successfully", game });
  
}
);

