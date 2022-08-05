require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3001;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
