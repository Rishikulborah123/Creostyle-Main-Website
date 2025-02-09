require('dotenv').config();
const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();
const app = express()
const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json());
app.use('/api/form', require('./routes/form'));

app.listen(port, () => {
  console.log(`Server listening at port http://localhost:${port}`)
})
