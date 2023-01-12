const express = require('express');

var cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.use('/invoice', express.static('invoice.json'));

app.listen(8080, () => console.log('Example app is listening on port 8080.'));
