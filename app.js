const express = require('express');
const app = express();
const cors = require('cors');
require('./config/db');
app.use(cors()); 
app.use(express.json());
app.use('/users', require('./routes/users'));

app.get('/list', (req, res) => {
  res.json({ message: 'api' });
});

app.listen(3000, () => {
  console.log('server on port 3000');
});
