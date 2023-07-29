const express = require('express');
const dbConnect = require('./mongodb')
const app = express();

app.use(express.json())

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray()
    // console.log(data); 
    res.send(data)
})

// app.post('/', async (req, res) => {
//     let data = await dbConnect();
//     let queryParam = req.query
//     let result = await data.insertOne(queryParam)
//     res.send(result)
// })

app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    res.send(result)
})

app.put('/', (req, res) => {
    res.send({resutl: 'true'})
})
app.listen(3000, () => {
    console.log('Server is running')
})