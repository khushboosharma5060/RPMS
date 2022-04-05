
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

let db;
async function connect() {
  await client.connect();
  console.log('Connected successfully to mongodb');
  db = client.db('rpms');
} 

function getPropertyCollection() {
  return db.collection('property');
}

function getUserCollection() {
  return db.collection('user');
};

function getUnitCollection() {
  return db.collection('unit');
};

function getUserQueriesCollection() {
  return db.collection('userQueries');
};

function getPaymentCollection() {
  return db.collection('payment');
}

function getLeaseCollection(){
  return db.collection('lease');
}

module.exports = {
  connect, getUserCollection, getPropertyCollection, getUnitCollection,
  getUserQueriesCollection, getPaymentCollection, getLeaseCollection
};    
