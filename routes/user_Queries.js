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
  req.body.updat = new Date()
  await  getUser_queriesCollection().updateOne({ _id: new ObjectId(req.params.id)}, { $set: req.body });
  res.send('updated');
});


router.delete('/:id', async (req, res) => {
  await  getUser_queriesCollection().deleteOne({ _id: new ObjectId(req.params.id)});
  res.send('deleted')
});









const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'user_Queries_photos/')
  },
  filename: function (req, file, cb) {
    let myfile = req.params.id + '.png';
    cb(null, myfile);
  }
});

const upload = multer({storage});

router.put('/:id/photo', upload.single("profile_images"), async (req, res) => {
  const photo = `user_Queries_photos/${req.params.id}.png`
  await getUser_queriesCollection().updateOne({_id: new ObjectId(req.params.id)}, {$set: {photo}});
  res.send('updated');
});
 



router.get('/:id/photo', async (req, res) => {
  const user_Queries = await getUser_queriesCollection().findOne({_id:new ObjectId(req.params.id)});
  console.log(user)
  const img = fs.readFileSync(user_Queries.photo);
  res.writeHead(200, {'Content-Type': 'image/gif' });
  res.end(img, 'binary'); 
}); 



module.exports = router;
   