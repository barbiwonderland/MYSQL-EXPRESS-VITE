// app.js

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const tweetRoutes = require('./routes/tweetsRoutes');
const interactionRoutes = require('./routes/interactionsRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
// Rutas
app.use('/users', userRoutes);
app.use('/tweets',tweetRoutes);
app.use('/interaction',interactionRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
