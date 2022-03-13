var express = require('express');
var router = express.Router();

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

let collection;

async function connect() {

  await client.connect();
  console.log('Connected successfully to mongodb');
  const db = client.db('rpms');
  collection = db.collection('admin');
}
connect();





router.post('/', function (req, res) {
  req.body.id = new Date().valueOf();
  collection.insert(req.body);
  res.send('added');
});


router.get('/', function (req, res) {
  const geted = collection.find().toArray();
  res.send(geted);
});


router.get('/:id', function (req, res) {
  const id = +req.params.id;
  const getid = collection.find({id});
  res.send(getid);
});


router.put('/:id', (req, res) => {
  const id = +req.params.id;
  collection.updateone({id}, {$SET: req.body});
  res.send('updated');
});


router.delete('/:id', (req, res) => {
  const id = +req.params.id;
  collection.deleteOne({id});
});


module.exports = router;