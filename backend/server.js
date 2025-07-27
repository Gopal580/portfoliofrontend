const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 5000;
const dotenv = require('dotenv');
dotenv.config();
const contactroute=require('./routes/contactRoute')

app.use(cors({ 
  origin: process.env.CORS, // Use environment variable for CORS origin
  credentials: true                
}));
app.use(express.json());
dotenv.config();
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.use('/api',contactroute)
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
