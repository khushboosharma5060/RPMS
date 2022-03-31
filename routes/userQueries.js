const express = require('express');
const router = express.Router();
const{getUserQueriesCollection} = require('../mongodb') 





router.post('/', async(req, res) => {
    await getUserQueriesCollection().insertOne(req.body)
    res.send('added');
})


router.get('/', async  (req, res) => {
    const geted = await getUserQueriesCollection().find().toArray();
    res.send(geted);
  });
  

  router.get('/:id', async (req, res) => {
    const getid = await getUserQueriesCollection().findOne({_id: req.params.id});
    res.send(getid);
  });
   

  router.put('/:id', async (req, res) => {
    const id = req.params.id;
    await getUserQueriesCollection().updateOne({id}, {$set: req.body});
    res.send('updated');
  });
  
  
  router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await getUserQueriesCollection().deleteOne({id});
    res.send('deleted')
  });
  


module.exports = router;
