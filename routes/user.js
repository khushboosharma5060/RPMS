var express = require('express');
var router = express.Router();

// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// let collection;
// async function connect() {
//   await client.connect();
//   console.log('Connected successfully to mongodb');
//   const db = client.db('rpms');
//   collection = db.collection('user');
// }
// connect();



router.post('/',async function (req, res) {
  req.body.id = new Date().valueOf();
   await collection.insert(req.body);
  res.send('added');
});



router.get('/',async function (req, res) {
  const geted = await collection.find().toArray();
  res.send(geted);
});


router.get('/:id', async function (req, res) {
  const id = +req.params.id;
  const getid = await collection.findOne({id});
  res.send(getid);
});


router.put('/:id', async(req, res) => {
  const id = +req.params.id;
  await collection.updateone({id}, {$set: req.body});
  res.send('updated');
});


router.delete('/:id',async (req, res) => {
  const id = +req.params.id;
  await collection.deleteOne({id});
  res.send('deleted');
});


module.exports = router;