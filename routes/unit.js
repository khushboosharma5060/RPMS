const fs = require('fs');
const express = require('express');
var router = express.Router();
const {getUnitCollection} = require('../mongodb')
const { validate } = require('express-validation')
// const unitValidation = require('../validation/unitValidation')
var { ObjectId } = require('mongodb');


 
router.post('/', async(req, res) => {
  req.body.created = new Date()
  await getUnitCollection().insertOne(req.body);
    res.send('added'); 
});


router.get('/', async  (req, res) => {
    const geted = await getUnitCollection().find().toArray();
    res.send(geted);
  });
  
  
router.get('/:id', async (req, res) => {
    const getid = await getUnitCollection().findOne({_id: new ObjectId(req.params.id)});
    res.send(getid);
  });
   
router.put('/:id', async (req, res) => {
    await getUnitCollection().updateOne({_id: new ObjectId(req.params.id)}, {$set: req.body});
    res.send('updated');
  });
  
router.delete('/:id', async (req, res) => {
    await getUnitCollection().deleteOne({_id: new ObjectId(req.params.id)});
    res.send('deleted')
  });
  

  const multer = require('multer');


  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
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
  
  const upload = multer({storage});
  
 
router.put('/:id/photo', upload.array("profile_photo"), async (req, res) => {
  const photo = `property_photos/${req.params.id}.png`
  await getPropertyCollection().updateOne({_id: new ObjectId(req.params.id)}, {$set: {photo}});
  res.send('updated');
});
   
  
  
  
  
  router.get('/:id/photo-list', async (req, res) => {
    var dir = `unit_photos/${req.params.id}`
    fs.readdir(dir, function (err, files) {
      console.log(files)
      res.send(files)
    });
  });
  
  
  
  
  router.get('/:id/photo/:photo_id', async (req, res) => {
    const path = `unit_photos/${req.params.id}/${req.params.photo_id}`
    const img = fs.readFileSync(path);
    res.writeHead(200, {'Content-Type': 'image/gif' });
    res.end(img, 'binary'); 
   });
  


module.exports = router;






// unit_photos/623c2481bec428abd274bdec/1648450897021.png