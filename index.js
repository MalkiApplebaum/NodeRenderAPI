require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/services', async (req, res) => {
  try {
    const response = await axios.get('https://api.render.com/v1/services', {
      headers: {
        Authorization: `Bearer ${process.env.RENDER_API_KEY}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

// app.get('/', async (req, res) => {
//     res.json('hello to my rener projects');
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
