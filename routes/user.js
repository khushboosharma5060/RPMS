const fs = require('fs');
const express = require('express');
const router = express.Router();
const { getUserCollection } = require('../mongodb')
const { validate } = require('express-validation')
const userValidation = require('../validation/userValidation')
var {ObjectId} = require('mongodb');


router.post('/', validate(userValidation, {}, {}),async function (req, res) {
  req.body.created = new Date();
  await getUserCollection().insertOne(req.body);
  res.send('added');
});


router.get('/', async (req, res) => {
  const geted = await getUserCollection().find().toArray();
  res.send(geted);
});



router.get('/:id', async (req, res) => {
  const getid = await getUserCollection().findOne({_id:new ObjectId(req.params.id)});
  console.log('param vala id:', req.params.id)
  console.log('mogodb ka result',getid)
  res.send(getid);
});


router.put('/:id', async (req, res) => {
  req.body.created = new Date();
  await getUserCollection().updateOne({_id:new ObjectId(req.params.id)}, {$set: req.body});
  res.send('updated');
});


router.delete('/:id', async (req, res) => {
  await getUserCollection().deleteOne({_id:new ObjectId(req.params.id)});
  res.send('deleted')
});
  




const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'user_photos/')
  },
  filename: function (req, file, cb) {
    let myfile = req.params.id + '.png';
    cb(null, myfile);
  }
});

const upload = multer({storage});

router.put('/:id/photo', upload.single("profile_images"), async (req, res) => {
  const photo = `user_photos/${req.params.id}.png`
  await getUserCollection().updateOne({_id: new ObjectId(req.params.id)}, {$set: {photo}});
  res.send('updated');
});
 



router.get('/:id/photo', async (req, res) => {
  const user = await getUserCollection().findOne({_id:new ObjectId(req.params.id)});
  console.log(user)
  const img = fs.readFileSync(user.photo);
  res.writeHead(200, {'Content-Type': 'image/gif' });
  res.end(img, 'binary'); 
}); 



module.exports = router; 