const express = require('express');
const router = express.Router();
const{getUserCollection} = require('../mongodb')

router.post('/', async function (req, res) {
  req.body.id = new Date().valueOf();
  await getUserCollection().insert(req.body);
  res.send('added');
});


router.get('/', async(req, res) => {
  const geted = await getUserCollection().find().toArray();
  res.send(geted);
});


router.get('/:id', async (req, res) => {
  const id = +req.params.id;
  const getid = await getUserCollection().findOne({id});
  res.send(getid);
});


router.put('/:id', async (req, res) => {
  const id = +req.params.id;
  await getUserCollection().updateOne({id}, {$set: req.body});
  res.send('updated');
});


router.delete('/:id', async (req, res) => {
  const id = +req.params.id;
  await getUserCollection().deleteOne({id});
  res.send('deleted')
});


module.exports = router;