const express = require('express');
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors())
app.use(express.json());

let data = []

app.get('/', (req, res) => {
    console.log("call GET/")
    res.send(data);
})

app.post('/', (req, res) => {
    console.log("Body: ", req.body)
    data.push(req.body)
    res.send(data);
})

app.delete('/', (req, res) => {
    console.log("Body: ", req.body)
    data = []
    res.send(data);
})


app.listen(port, () => console.log(`🚀🚀 server UP: Listening on port ${port} 🚀🚀`))