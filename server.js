const express = require('express');
const bodyParser = require('body-parser');

const { connectToDataBase } = require('./utils/connectToDataBase');

require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 4500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

connectToDataBase(process.env.URI__DB);

app.use('/api/v1/variant', require('./routes/variantRoutes'));
app.use('/api/v1/product', require('./routes/productRoutes'));

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));