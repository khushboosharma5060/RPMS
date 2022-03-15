const express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    req.body.id = new Date().valueOf();
    collection.insertOne(req.body);
    res.send('added'); 
});

router.post('/', async function (req, res) {
    req.body.id = new Date().valueOf();
    await collection.insert(req.body);
    res.send('added');
  });
  
router.get('/', async  (req, res) => {
    const geted = await collection.find().toArray();
    res.send(geted);
  });
  
router.get('/:id', async (req, res) => {
    const id = +req.params.id;
    const getid = await collection.findOne({id});
    res.send(getid);
  });
   
router.put('/:id', async (req, res) => {
    const id = +req.params.id;
    await collection.updateOne({id}, {$set: req.body});
    res.send('updated');
  });
  
router.delete('/:id', async (req, res) => {
    const id = +req.params.id;
    await collection.deleteOne({id});
    res.send('deleted')
  });
  

module.exports = router;
