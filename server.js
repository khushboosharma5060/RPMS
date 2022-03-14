const express = require('express');
const app = express();
app.use(express.json());


const userdata = require('./routes/user');
const property = require('./routes/property')
app.use('/api/user', userdata);
app.use('/api/property', property)

<<<<<<< HEAD
app.listen(3000, () => console.log('server is going on 3000')); 

=======
const userdata = require('./routes/user');
const unitdata = require('./routes/unit')

app.use('/api/user', userdata);
app.use('/api/unit', unitdata);

app.listen(3000, () => console.log('server is going on 3000'));
>>>>>>> 970b0bbf187f7e3da9cd6a3345580e5d0e1d1519
