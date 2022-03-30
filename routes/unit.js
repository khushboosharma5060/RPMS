const fs = require('fs');
const express = require('express');
var router = express.Router();
const { getUnitCollection } = require('../mongodb')
const { validate } = require('express-validation')
const unitValidation = require('../validation/unitValidation')
var { ObjectId } = require('mongodb');



router.post('/', validate(unitValidation, {}, {}), async (req, res) => {
  req.body.created = new Date();
  await getUnitCollection().insertOne(req.body);
  res.send('added');
});


router.get('/', async (req, res) => {
  const geted = await getUnitCollection().find().toArray();
  res.send(geted);
});


router.get('/:id', async (req, res) => {
  const getid = await getUnitCollection().findOne({ _id: new ObjectId(req.params.id) });
  res.send(getid);
});

router.put('/:id', async (req, res) => {
  req.body.updat = new Date()
  await getUnitCollection().updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
  res.send('updated');
});


router.delete('/:id', async (req, res) => {
  await getUnitCollection().deleteOne({ _id: new ObjectId(req.params.id) });
  res.send('deleted');
});









const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, fild, cb) {
    var dir = `unit_photos/${req.params.id}`
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    let myfile = Date.now() + '.png';
    cb(null, myfile);
  }
});

const upload = multer({ storage });


router.put('/:id/photo', upload.array('unit_images'), async (req, res) => {
  const photo = `unit_photos/${req.params.id}.png` 
  await getUnitCollection().updateOne({_id:new ObjectId(req.params.id)}, {$set:{photo}});
  res.send('unit_photo_uploded');
});

router.get('/:id/photo-list', async (req, res) => {
  var dir = `unit_photos/${req.params.id}`
  console.log(dir)
  fs.readdir(dir, function (err, files) {
    console.log(files)
    res.send(files)
  });
});



// 623acf731593745c7e3d3ac4/photo/: '1648225592207.png   urlpostman
// unit_photos/623acf731593745c7e3d3ac4/1648225592207.png   pathForRead
 router.get('/:id/photo/:photo_id', async (req, res) => {
  const path = `unit_photos/${req.params.id}/${req.params.photo_id}`
  const img = fs.readFileSync(path);
  res.writeHead(200, {'Content-Type': 'image/gif' });
  res.end(img, 'binary'); 
 });



 
module.exports = router;


