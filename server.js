const express = require('express');
const { connect } = require('./mongodb')
const { ValidationError } = require('express-validation')

const app = express(); 
app.use(express.json());
connect();
   
const userdata = require('./routes/user');
const property = require('./routes/property') 
const unitdata = require('./routes/unit')
const userQuriesdata = require('./routes/userQueries') 
const paymentdata = require('./routes/payment')
const leasedata = require('./routes/lease')


// API routes
app.use('/api/user', userdata);
app.use('/api/property', property); 
app.use('/api/unit', unitdata);
app.use('/api/userQueries',userQuriesdata);
app.use('/api/payment', paymentdata);
app.use('/api/lease', leasedata);


// Validation middleware
app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err.details.body)
    }
    return res.status(400).json(err)
});


app.listen(3000, () => console.log('server is going on 3000'));

 