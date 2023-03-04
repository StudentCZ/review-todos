const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

app.listen(5001, () => {
  console.log('server has started on port 5001');
});
