const express = require('express');
const router = express.Router();
const {  getUser_queriesCollection } = require('../mongodb')
const { validate } = require('express-validation')
const userValidation = require('../validation/tenentValidation');
var { ObjectId } = require('mongodb');



router.post('/', validate(userValidation, {}, {}), async function (req, res) {
  req.body.created = new Date()
  await  getUser_queriesCollection().insert(req.body);
  res.send('added');
});


router.get('/', async (req, res) => {
  const geted = await  getUser_queriesCollection().find().toArray();
  res.send(geted);
});


router.get('/:id', async (req, res) => {
  const getid = await  getUser_queriesCollection().findOne({ _id: new ObjectId(req.params.id) });
  res.send(getid);
});


router.put('/:id', async (req, res) => {
  await  getUser_queriesCollection().updateOne({ _id: new ObjectId(req.params.id)}, { $set: req.body });
  res.send('updated');
});


router.delete('/:id', async (req, res) => {
  await  getUser_queriesCollection().deleteOne({ _id: new ObjectId(req.params.id)});
  res.send('deleted')
});