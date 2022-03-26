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
    destination:async function(req, fild, cb) {
        const folder = `property_photos/${req.params.id}/`;
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder);
        }
        cb(null, folder)
    },
    filename: function (req, file, cb) {
        let myfile = Date.now() + '.png';
        cb(null, myfile);
        console.log(myfile);
    }
});

const uplode = {storage}

App.put('/:id/photo', uplode.array('property_images'), async(req, res) => {
    const image = property_photos/'.png'
    await getPropertyCollection().updateOne({ _id: new ObjectId(req.params.id) }, { $set:{image}  })
    res.send('updated');
});



module.exports = App; 