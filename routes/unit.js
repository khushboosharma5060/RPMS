const express = require('express');
var router = express.Router();
const {getUnitCollection} = require('../mongodb')
const { validate } = require('express-validation')
// const unitValidation = require('../validation/unitValidation')


 
router.post('/', (req, res) => {
<<<<<<< HEAD
    collection.insertOne(req.body);
=======
  getUnitCollection().insertOne(req.body);
>>>>>>> 33a599d285ff660bb527acd7d637ddac343a2523
    res.send('added'); 
});


router.get('/', async  (req, res) => {
    const geted = await getUnitCollection().find().toArray();
    res.send(geted);
  });
  
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const getid = await getUnitCollection().findOne({id});
    res.send(getid);
  });
   
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    await getUnitCollection().updateOne({id}, {$set: req.body});
    res.send('updated');
  });
  
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await getUnitCollection().deleteOne({id});
    res.send('deleted')
  });
  

module.exports = router;
