const express = require('express');
const app = express();
app.use(express.json());



const roledata = require('./routes/role');

app.use('/api/role', roledata);

app.listen(3000, () => console.log('server is going on 3000'));