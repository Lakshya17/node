// const express = require('express');
// const dbConnect = require('./mongodb')
// const mongodb = require('mongodb')

// const app = express();

// app.use(express.json())

// app.get('/', async (req, res) => {
//     let data = await dbConnect();
//     data = await data.find().toArray()
//     // console.log(data); 
//     res.send(data)
// })

// app.post('/', async (req, res) => {
//     let data = await dbConnect();
//     let queryParam = req.query
//     let result = await data.insertOne(queryParam)
//     res.send(result)
// })

// app.post('/', async (req, res) => {
//     let data = await dbConnect();
//     let result = await data.insertOne(req.body)
//     res.send(result)
// })


// app.put('/:name', async (req, res) => {
//     let data = await dbConnect();
//     let result = await data.updateOne({'name': req.params.name}, {$set: req.body})
//     res.send(result)
// })


// app.delete('/:id', async (req, res) =>{
//     const data = await dbConnect();
//     const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
//     res.send(result)
//     console.log(new mongodb.ObjectId(req.params.id), 'Deleted')
// })

// app.listen(3000, () => {
//     console.log('Server is running')
// })


// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/e-com');
// const ProductSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,
//     category: String
// })
// const main = async () => {
//     const ProductModel = mongoose.model('products', ProductSchema)
//     let data = new ProductModel({name: 'a7', price: '1000', brand: 'Nokia', category: 'Kuch bhi'});
//     const result = await data.save();
//     console.log(result)
// }
// main();

// const updateInDB = async () => {
//     const Product = new mongoose.model('products', ProductSchema);
//     const data = await Product.updateOne({name: 'a7'}, {$set: {price: 300}});
// }

// // updateInDB();

// const deleteInDB = async () => {
//     const Product = new mongoose.model('products', ProductSchema);
//     let data = await Product.deleteOne({name: 'a8'})
//     console.log(data)
// }

// // deleteInDB()

//     const findInDB = async () => {
//         const Product = mongoose.model('products', ProductSchema);
//         const data = await Product.find({name: 'a8'});
//         console.log(data)
//     }

//     findInDB();

// const express = require('express');
// require('./config')
// const Product = require('./product')
// const app = express();
// const mongoose = require('mongoose')
// app.use(express.json())


// app.get('/list', async(req, res) => {
//     let data = await Product.find();
//     res.send(data)
// })

// app.put('/create/:id', async (req, res) => {
//     let data = await Product.updateOne({ _id : req.params.id},{$set: {
//         price: 4500
//     }})
//     res.send(data);
// })

// app.delete('/delete/:_id', async (req, res) => {
//     console.log(req.params)
//     let data = await Product.deleteOne(req.params.id)
//     res.send(data)
// })

// app.post('/create', async (req, res) => {
//     // console.log(req.body)
//     let data = new Product(req.body)
//     const result = await data.save();
//     res.send(result);
//     // console.log(result)
// })

const express = require('express')
require('./config')
const Product = require('./product')
const app = express()
app.use(express.json());


app.get('/search/:key', async (req, res) => {
    let data = await Product.find({
        "$or": [
            {"name" : {$regex:req.params.key}},
            {"brand" : {$regex:req.params.key}}
        ]
    })
    res.send(data)
})

app.listen(3000, () => {
    console.log('Server Running')
});


