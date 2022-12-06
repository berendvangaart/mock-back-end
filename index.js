const express = require('express');
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors())
app.use(express.json());


app.listen(port, () => console.log(`🚀🚀 server UP: Listening on port ${port} 🚀🚀`))