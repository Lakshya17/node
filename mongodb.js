const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dataBase = 'e-com'

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(dataBase)
    return db.collection('product');
    // let response = await collection.find({}).toArray()
    // console.log(response)
}

module.exports = dbConnect;