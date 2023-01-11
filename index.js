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

app.put('/', (req, res) => {
    console.log("Body: ", req.body)

    const result = data.map(obj => {
        console.log(obj);
        if (obj.id === req.body.id) {
            return req.body
        } else {
            return obj
        }
    })

    console.log("result ",result)

    res.send(data);
})


app.listen(port, () => console.log(`🚀🚀 server UP: Listening on port ${port} 🚀🚀`))