var express = require('express');
var router = express.Router();

<<<<<<< HEAD
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
=======
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

let collection;
async function connect() {
  await client.connect();
  console.log('Connected successfully to mongodb');
  const db = client.db('rpms');
  collection = db.collection('user');
}
connect();





router.post('/', async function (req, res) {
  req.body.id = new Date().valueOf();
  await collection.insert(req.body);
>>>>>>> 970b0bbf187f7e3da9cd6a3345580e5d0e1d1519
  res.send('added');
});


<<<<<<< HEAD

router.get('/',async function (req, res) {
=======
router.get('/', async  (req, res) => {
>>>>>>> 970b0bbf187f7e3da9cd6a3345580e5d0e1d1519
  const geted = await collection.find().toArray();
  res.send(geted);
});


<<<<<<< HEAD
router.get('/:id', async function (req, res) {
=======
router.get('/:id', async (req, res) => {
>>>>>>> 970b0bbf187f7e3da9cd6a3345580e5d0e1d1519
  const id = +req.params.id;
  const getid = await collection.findOne({id});
  res.send(getid);
});


<<<<<<< HEAD
router.put('/:id', async(req, res) => {
  const id = +req.params.id;
  await collection.updateone({id}, {$set: req.body});
=======
router.put('/:id', async (req, res) => {
  const id = +req.params.id;
  await collection.updateOne({id}, {$set: req.body});
>>>>>>> 970b0bbf187f7e3da9cd6a3345580e5d0e1d1519
  res.send('updated');
});


<<<<<<< HEAD
router.delete('/:id',async (req, res) => {
  const id = +req.params.id;
  await collection.deleteOne({id});
  res.send('deleted');
=======
router.delete('/:id', async (req, res) => {
  const id = +req.params.id;
  await collection.deleteOne({id});
  res.send('deleted')
>>>>>>> 970b0bbf187f7e3da9cd6a3345580e5d0e1d1519
});


module.exports = router;