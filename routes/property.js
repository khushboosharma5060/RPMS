const express = require('express');
const { getPropertyCollection } = require('../mongodb')
const App = express.Router();
const { validate } = require('express-validation')
const propertyValidation = require('../validation/propertyValidation')
const { ObjectId } = require('mongodb');
const fs = require('fs')

App.post('/', validate(propertyValidation, {}, {}), async (req, res) => {
    req.body.created = new Date();
    await getPropertyCollection().insertOne(req.body)
    res.send('insurted');
});


App.get('/', async (req, res) => {
    const finddata = await getPropertyCollection().find().toArray();
    res.send(finddata);
});

App.get('/:id', async (req, res) => {
    const findOne = await getPropertyCollection().findOne({ _id: new ObjectId(req.params.id) });
    res.send(findOne);
});


App.put('/:id', async (req, res) => {
    req.body.updat = new Date()
    await getPropertyCollection().updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
    res.send('updated');
});


App.delete('/:id', async (req, res) => {
    const deleted = await getPropertyCollection().deleteOne({ _id: new ObjectId(req.params.id) });
    res.send('deleted');
});






 
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, fild, cb) {
    var dir = `property_photos/${req.params.id}`
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


App.put('/:id/photo', upload.array('property_images'), async(req, res) => {
    const photo = `property_photos/${req.params.id}.png` 
    await getPropertyCollection().updateOne({_id:new ObjectId(req.params.id)}, {$set:{photo}});
  res.send('property_photos_uploded');
});


App.get('/:id/photo-list', async (req, res) => {
  var dir = `property_photos/${req.params.id}`
  fs.readdir(dir, function (err, files) {
    res.send(files)
  });
});


 App.get('/:id/photo/:photo_id', async (req, res) => {
  const path = `property_photos/${req.params.id}/${req.params.photo_id}`
  const img = fs.readFileSync(path);
  res.writeHead(200, {'Content-Type': 'image/gif' });
  res.end(img, 'binary'); 
 });




module.exports = App; 