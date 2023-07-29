const dbConnect = require('./mongodb')

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: 'Lakshya'}, {$set:{name: 'Lakshya1', age: 23}})

    // let result = await data.updateMany([
    //     {name: 'Lakshya'}, {$set:{name: 'Lakshya1', age: 23}},
    //     {name: 'a 40'}, {$set:{name: 'sdsdf', age: 22}},
    //     {name: 'm 40'}, {$set:{name: 'Lakssfsdfhya1', age: 3}}
    // ])
    console.log(result)
}

updateData();