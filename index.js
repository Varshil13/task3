const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sample API route
app.get('/api', (req, res) => {
  res.json({
    message: 'API working live on Heroku!',
    db_uri: process.env.DB_URI,
    jwt: process.env.JWT_SECRET
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
