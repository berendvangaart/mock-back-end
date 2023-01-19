/**
 * This is a mock backend for debugging purposes
 * */

const express = require('express');
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors())
app.use(express.json());

let data = []

/**
 * return all elements
 */
app.get('/', (req, res) => {
    console.log("call GET/")
    res.send(data);
})

/**
 * add new element to data
 */
app.post('/', (req, res) => {
    console.log("Body: ", req.body)
    data.push(req.body)
    res.send(data);
})

/**
 * remove element with coresponding id from data
 */
app.delete('/:id', (req, res) => {
    console.log("ID: ", req.params.id)
    data = data.filter(element => {
        return element.id !== req.params.id
    })
    res.send(data);
})

/**
 * update element by id
 */
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
    data = result
    console.log("result ", result)
    res.send(result);
})


app.listen(port, () => console.log(`🚀🚀 server UP: Listening on port ${port} 🚀🚀`))