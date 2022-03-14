var express = require('express');
var App = express.Router();
// const {propertyCollection} = require('../server')


const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

let propertyCollection;
async function connect() {
  await client.connect();
  console.log('Connected successfully to mongodb');
  const db = client.db('rpms');
  propertyCollection = db.collection('property');
}
connect();

App.post('/', async (req, res) => {
    req.body.id = new Date().valueOf();
    await propertyCollection.insertOne(req.body)
    res.send('insurted')
});


App.get('/', async(req, res) => {
    const finddata = await propertyCollection.find().toArray();
    res.send(finddata);
});



App.get('/:id',async (req, res) => {
    const id = +req.params.id;
    const findOne = await propertyCollection.findOne({id});
    res.send(findOne);
});


App.put('/:id',async (req, res) => { 
    const id = +req.params.id;
    await propertyCollection.updateOne({id}, {$set:req.body})
    res.send('updated');
});


App.delete('/:id',async (req, res) => {
    const id = +req.params.id;
    await propertyCollection.deleteOne({id});
    res.send('deleted');
});

module.exports = App;