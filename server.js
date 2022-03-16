const express = require('express');
const { connect } = require('./mongodb')
const { ValidationError } = require('express-validation')

const app = express();
app.use(express.json());
connect();

const userdata = require('./routes/user');
const unitdata = require('./routes/unit');
const property = require('./routes/property');

        // Api rout
app.use('/api/user', userdata);
app.use('/api/unit', unitdata)
app.use('/api/property', property)

// Validation middleware
app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err.details.body)
    }
    return res.status(400).json(err)
})


app.listen(3000, () => console.log('server is going on 3000')); 


