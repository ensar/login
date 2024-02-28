const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('server is up');
});
