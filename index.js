const express = require('express');
const dotenv = require('dotenv').config(); // Load env vars
const path = require('path');
   
const app = express();

// enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});