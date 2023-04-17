const express = require('express');
const index = express();
const bodyParser = require('body-parser');
const Post = require('./models/Post');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

//Connect to DB


require('dotenv/config');
index.use(bodyParser.json());

// const postsRouter = require('./routes/posts');
// index.use('/posts', postsRouter);

//Listen to the server
index.listen(3000, function (req, res) {
    console.log("Express api is running at port 4200");
    MongoClient.connect(url, function(err, db) {
      if(err) throw err;
      var mydb = db.db('school');
      var mydata = {
        name: "Harish",
        age: 25
      };
      mydb.collection('velammal').insertOne(mydata, function(err, res) {
        if(err) throw err;
        console.log('Document inserted');
        db.close();
      });
    });
});

let abc = {
  "status": 200,
  "statusMessage": "Success"
};

index.get('/getData', function (req, res) {
    res.json(abc);
});


index.post('/posts', (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  console.log("In here");
  post.save()
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    console.log(err);
  })
});
