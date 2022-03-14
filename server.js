const express = require('express');
const app = express();
app.use(express.json());


const userdata = require('./routes/user');
const property = require('./routes/property')
app.use('/api/user', userdata);
app.use('/api/property', property)

app.listen(3000, () => console.log('server is going on 3000')); 

const userdata = require('./routes/user');
const unitdata = require('./routes/unit')

app.use('/api/user', userdata);
app.use('/api/unit', unitdata);

app.listen(3000, () => console.log('server is going on 3000'));
 