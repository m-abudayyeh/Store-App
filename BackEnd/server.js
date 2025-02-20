const express = require("express");
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 9000;
app.use(cors());


app.get("/", (req, res) => {
  res.send("Test ");
});

app.get('/api/products', async (req, res) => {
      const response = await axios.get('https://fakestoreapi.com/products');
      res.json(response.data);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});