

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


let userCollections;
let propertyCollection;
async function connect() {
  await client.connect();
  console.log('Connected successfully to mongodb');
  const db = client.db('rpms');
  collection = db.collection('property');
    userCollections = db.collection('user');
    console.log(userCollections)
    console.log(propertyCollection)
}
connect();

module.exports = {userCollections, propertyCollection}