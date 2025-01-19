const express = require('express');
const app = express();
const PORT = 3000;

const router = require('../routes/routesIndex');
router(express, app);

app.get('/', (request, response) => {
  response.send('Response from Donations App!');
});

app.listen(PORT, () => {
  console.log(`Server started. Listening on port ${PORT}...`);
});
