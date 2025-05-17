const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.routes');
require('dotenv').config();

app.use(express.json());
app.use('/api', todoRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
