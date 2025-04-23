const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, I am Varshil Sharma! my API is live 🚀');
});

app.get('/api', (req, res) => {
  res.json({
    message: 'API working live on Render!',
    db_uri: process.env.DB_URI,
    jwt: process.env.JWT_SECRET
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
