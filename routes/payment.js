const express = require('express');
const router = express.Router();
const { getPaymentCollection } = require('../mongodb');
const { validate } = require('express-validation');
const paymentValidation = require('../validation/paymentValidation')
var { ObjectId } = require('mongodb');
const { generateBillPdf } = require('../pdfGenerateBill')


router.post('/', validate(paymentValidation, {}, {}), async (req, res) => {
  req.body.created = new Date();
  generateBillPdf(req.body)
  await getPaymentCollection().insertOne(req.body);
  res.send('added');
});



router.get('/', async (req, res) => {
  const geted = await getPaymentCollection().find().toArray();
  res.send(geted);
})



router.get('/:id', async (req, res) => {
  const getid = await getPaymentCollection().findOne({ _id: new ObjectId(req.params.id) });
  res.send(getid);
});

router.put('/:id', async (req, res) => {
  req.body.updat = new Date()
  await getPaymentCollection().updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
  res.send('updated');
});


router.delete('/:id', async (req, res) => {
  await getPaymentCollection().deleteOne({ _id: new ObjectId(req.params.id) });
  res.send('deleted');
});



module.exports = router;




