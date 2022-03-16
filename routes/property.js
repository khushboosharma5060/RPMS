const express = require('express');

const {getPropertyCollection} = require('../mongodb')
const App = express.Router();
const { validate } = require('express-validation')
const propertyValidation = require('../validation/propertyValidation')


App.post('/', validate(propertyValidation, {}, {}), async (req, res) => {
    await getPropertyCollection().insertOne(req.body)
    res.send('insurted'); 
});


App.get('/', async(req, res) => {
    const finddata = await getPropertyCollection().find().toArray();
    res.send(finddata);
});

App.get('/:id',async (req, res) => {
    const id = req.params.id;
    const findOne = await getPropertyCollection().findOne({id});
    res.send(findOne);
});


App.put('/:id',async (req, res) => { 
    const id = req.params.id;
    await getPropertyCollection().updateOne({id}, {$set:req.body})
    res.send('updated');
});


App.delete('/:id',async (req, res) => {
    const id = req.params.id;
    await propertyCollection.deleteOne({id});
    res.send('deleted');
});

module.exports = App;