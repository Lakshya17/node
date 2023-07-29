const dbConnect = require('./mongodb')

const insert = async () => {
    const db = await dbConnect();
    const result =await db.insertMany(
        [
            {name: 'Lakshya',brand: 'Sharma',price: 350,category: 'Mobile'},
            {name: 'Lsya',brand: 'Hello',price: 250,category: 'Tablet'},
            {name: 'Laksfdahya',brand: 'Kohli',price: 650,category: 'Laptop'}
        ])  
    console.log(result.acknowledged)
}

insert();
