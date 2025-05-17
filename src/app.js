const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.routes');
const { initDB } = require('./models/db');
require('dotenv').config();

app.use(express.json());
app.use('/api', todoRoutes);

const port = process.env.PORT || 3000;

initDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
  });
});
