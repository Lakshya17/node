// const add = require('./add.js')

// const sum = add(1,3);
// console.log(add)
// console.log(sum);

// console.log('Hello from index.js')

// require('./batman')
// require('./superman')

// const superHero = require('./superHero')
// const batman = new superHero('batman')
// console.log(batman.getName())
// batman.setName('Lakshya')
// console.log(batman.getName())

// // const newSuperHero = require('./superHero')
// const newSuperHero = new superHero('yash')
// console.log(newSuperHero.getName())

// const add = require('./add')
// console.log(add.add(3,4))
// console.log(add.subtract(4,5))
// console.log(add)
// console.log(add.lakshya)

// const data = require('./data.json')
// console.log(data)
// console.log('hello lakshya, watch mode is workfding')

// const path = require("node:path")
// console.log(path )
// console.log(__filename)
// console.log(__dirname )

// console.log(path.basename(__dirname))

// console.log(path.basename(__filename))

// const {superhero, newSuperHero} = require('./batman')


// console.log({superhero, newSuperHero})

// console.log('lahefsfds')

// const path = require("node:path")

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))


// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))
 

// console.log(path.parse(__filename))
// console.log(path.parse(__dirname))

// console.log(path.format(path.parse(__filename)))

// console.log(path.format({"root": "D:", "dir":"we","base": "indfs.js"})) 

// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute(path.format({"root": "D:", "dir":"we","base": "indfs.js"})))


// console.log(path.join('folder1', '//folder2', __filename))
// console.log(path.join(__dirname, 'data.json'))

// console.log('see belw it')

// console.log(path.resolve('folder1', 'folder2', 'index.js'))
// console.log(path.resolve('/folder1', 'folder2', 'index.js'))
// console.log(path.resolve('/folder1', '/ folder2', 'index.js'))
// console.log(path.resolve('/folder1', '//folder2', '../index.js'))

// console.log(EventEmitter)

// const EventEmitter = require('node:events')

// const emitter = new EventEmitter()

// emitter.on('order-pizza', (size, topping) => {
//     console.log(`Pizza is ordered with ${size} size and have ${topping} topping`)
// })

// emitter.on('order-pizza', () => {
//     console.log(`This is the second listener`)
// })

// emitter.emit('order-pizza', 'large', 'macroni')


// console.log(emitter)

// const PizzaShop = require('./pizza-shop')
// const DrinkMachine = require('./drink-machine')

// const pizza = new PizzaShop()
// const drink = new DrinkMachine()

// pizza.on('order', (size, topping) => {
//     console.log(`Pizza is ordered with ${size} size and have ${topping} topping`)
//     drink.serveDrink(size)
// })
// // console.log(PizzaShop, pizza)

// console.log(pizza.orderNumber)
// pizza.order('large', 'macaroni')
// pizza.displayOrderNumber()

// const buffer = new Buffer.from('Lakshya')

// buffer.write('ldfsdfds')
// console.log(buffer.toString())
// console.log(buffer)
// console.log(buffer.toJSON())
// console.log(fs)

// const fs = require('node:fs')
 
// const content = fs.readFileSync('./file.txt')
// const contents = fs.readFileSync('./file.txt', 'utf-8')

// // console.log(content)
// // console.log(contents)
// // console.log('first')
// fs.readFile('./file.txt', 'utf-8', (error, data) => {
//     if(error){
//         console.log(error)
//     }else{
//         // console.log(data )
//     }
// })
// // console.log('second')

// fs.writeFileSync('./greet.txt', 'hello this is lakshya again')

// fs.writeFile('./greet.txt', 'Hellow lakshya aybscsf dss', {flag: 'a'}, (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log('File written successfully')
//     }
// })

// const fs = require('node:fs/promises');

// fs.readFile('./greet.txt', 'utf-8')
// .then(data => console.log(data))
// .catch(error => console.log(error))


// const fs = require('node:fs')
// const zlib = require('node:zlib')

// const gzip = zlib.createGzip();

// const readableStream = fs.createReadStream('./file1.txt', {
//     encoding: 'utf-8',
//     highWaterMark: 3
// })

// console.log(gzip)
// const writableStream = fs.createWriteStream('./file2.txt')

// readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'))

// readableStream.pipe(writableStream)

// readableStream.on('data', (chunk) => {
//     console.log(chunk);
//     writableStream.write(chunk)
// })

// const http = require('node:http')
// const fs = require('node:fs')
// console.log(http)

// console.log(req, 'sad')
// const superHero ={
//     firstName: 'Lakshya',
//     lastName: 'Sharma'
// }
// const server = http.createServer((req, res) => {
//     const name = 'Lakshya'
//     res.writeHead(200, { 'Content-Type': 'text/html'})
//     let html = fs.readFileSync('./index.html', 'utf-8')
//     html = html.replace('{{name}}', name)
//     res.end(html)
// })

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.writeHead(200, {'Content-Type' : 'text/plain'})
//         res.end('This is homepage')
//     }else if(req.url === '/about'){
//         res.writeHead(200, {'Content-Type': 'text/plain'})
//         res.end('This is the about page')
//     }else if(req.url === '/api'){
//         res.writeHead(200, {'Content-Type': 'application/json'})
//         res.end(JSON.stringify({
//             firstName: 'Lakshya',
//             lastName: 'Sharma'
//         }))
//     }else{
//         res.writeHead(400)
//         res.end('Page Not Found')
//     }
// })

// fs.createReadStream('./index.html').pipe(res)
// server.listen(3001, () => {
//     console.log('Server is up and running')
// })



// const start = Date.now()
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
// console.log("Hash: " , Date.now() - start)
// console.log(start)

// const crypto = require('node:crypto')
// process.env.UV_THREADPOOL_SIZE = 8;
// const MAX_CALLS = 16;
// const start = Date.now()

// for (let i=0; i<MAX_CALLS; i++){
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`HASH: ${i + 1}`, Date.now() - start);
//     });
// }

// Promise.resolve().then(() => {
//     console.log('Promise Queue')
// })
// process.nextTick(() => {
//     console.log('Next tick queue 2')
// })

// process.nextTick(() => {
//     console.log('Next tick queue')
// })


// setTimeout(() => {
//     console.log('Set timeout 2')
// }, 1000)

// process.nextTick(() => {
//     console.log('nextTick process inside')
// })

// setImmediate(() => {
//     console.log('setImmediate Queue')
// })

// const cluster = require('node:cluster');

// // console.log(cluster)

// const os = require('node:os')

// console.log(os.cpus().length)

// const http = require('node:http')

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end("Server Working")
// })

// const PORT = process.env.PORT;
// server.listen(3000, () => console.log('Port is running on 3000'))

// console.warn("hello Lakshya")
// fs.writeFileSync('hello.txt', 'THis is the fs module')
// const fs = require('node:fs').writeFileSync

// fs('hello.json', '{"key":"value"}')

// const http = require('node:http')
// const { argv } = require("node:process")

// http.createServer((req, res) => {
//     res.writeHead(200);
//     res.write('hello this is lakshya')
//     console.log(req.url)
//     res.end('Server is createdsdf')
// }).listen(4500);
// const data = require('./data')

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.write(JSON.stringify(data)) 
//     res.end()
// }).listen(3000)

// console.log(process.argv)

// const fs = require('node:fs');
// const path = require('node:path')

// const data = process.argv;

// console.log(data)
// if(data[2] == 'add'){
//     console.log('fssdf')
//     fs.writeFileSync(data[3], data[4])
// }else if(data[2] == 'remove'){
//     fs.unlinkSync(data[3])
// }else{
//     console.log('Invalid input')
// }

// fs.writeFileSync('apple.txt', 'This is a apple file.nod')

// const dirPath = path.join(__dirname, '/files')
// console.log(dirPath)

// fs.writeFileSync(`${dirPath}/apple.txt`, 'ssfsdf')
// for(i=0;i<5;i++){

// }

// const a = fs.readdir(dirPath, (err, data) => {
//     // console.log('File name', data)
//     data.forEach((data)=>{
//         console.log(data)
//     })
// })
// console.log(a) 

// const dirPath = path.join(__dirname, 'crud');
// // console.log(dirPath)
// const filePath = `${dirPath}/apple.txt`

// fs.writeFileSync(`${filePath}`, 'THis is a text file')
// fs.readFile(filePath, 'utf-8', (err, data) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log('data is: ', data)
//     }
// })

// fs.appendFile(filePath, 'and file name is apple txt', (err) => {
//     if(!err){
//         console.log('file is updated')
//     }
// // })

// fs.rename(filePath, `${dirPath}/file.txt`, (err) => {
//     if(!err){
//         console.log('file renamed')
//     }
// })

// fs.unlinkSync(`${dirPath}/file.txt`)

// let a = 10;
// let b = 0;
// const waitingData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(30);
//     }, 2000)
// })

// waitingData.then((data) => {
//     console.log(a+data)
// })

// const express = require('express')
// const app = express()
// console.log(app)

// app.get('', (req, res) => {
//     console.log(req.query)
//     res.send(`<h1>Hello lakshya</h1>
//         <a href="/about-us-page">Go to ABout page</a>
//     `)
// })

// app.get('/about-us-page', (req, res) => {
//     res.send({
//         name: 'lakshya',
//         email: 'lakshya@gmail.com'
//     })
// })

// const path = require('node:path')

// const publicPath = path.join(__dirname, '/public')

// // app.use(express.static(publicPath))
// app.set('view engine', 'ejs')

// app.get('', (req, res) => {
//     res.sendFile(`${publicPath}/index.html`)
// })

// app.get('/profile', (req, res) => {
//     const user = {
//         name: 'Lakshya',
//         email: 'lakshya@gmail.com',
//         city: 'indore',
//         skills: ['JS', 'React', 'Node']
//     }
//     res.render('profile', {user})
// })

// app.get('/login', (req, res) => {
//     res.render('login')
// })
// app.get('*', (req, res) => {
//     res.sendFile(`${publicPath}/404.html`)
// })

// app.listen(3000, () => {
//     console.log('Port is running on 3000')
// })

// console.log(express.static(publicPath))
// console.log(publicPath)
// console.log(__dirname)

// const ejs = require('ejs')
// console.log(ejs)


// const express = require('express')
// const app = express();
// const reqFilter = require('./middleware')
// const route = express.Router();

// // console.log(route)


// route.use(reqFilter)
// // app.use(reqFilter);
// app.get('/', (req, res) => {
//     res.send('Hello lakshya')
// })

// app.get('/users', (req, res) => {
//     res.send('Welcome to users page.')
// })

// route.get('/about', (req, res) =>  {
//     res.send('About us page')
// })

// route.get('/contact', (req, res) => {
//     res.send('This is the contact us page')
// })

// app.use('/', route)


// app.listen(3000, () => {
//     console.log('server started at 3000')
// });


// const { MongoClient } = require('mongodb')
// const url = 'mongodb://localhost:27017'
// const client = new MongoClient(url)
// const dataBase = 'e-com'

// async function dbConnect(){
//     let result = await client.connect();
//     let db = result.db(dataBase)
//     return db.collection('product');
//     // let response = await collection.find({}).toArray()
//     // console.log(response)
// }

// console.log(dbConnect())

// dbConnect().then((res) => {
//     res.find().toArray().then((data) => {
//         console.log(data)
//     })
// })

// const dbConnect = require('./mongodb')

// const main = async () => {
//     let data = await dbConnect()
//     data = await data.find().toArray();
//     // console.log(data)
// }

// main()

// const os = require('node:os')
// console.log(os.arch());
// console.log(os.freemem()/(1024*1024*1024))
// console.log(os.totalmem()/(1024*1024*1024))
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.userInfo())

const express = require('express');
const EventEmitter = require('node:events')
const app = express();
const event = new EventEmitter();

let count = 0; 
event.on('countAPI', () => {
    count++;
    console.log('Event count', count)
})

app.get('/', (req, res) => {
    res.send('api called')
    event.emit('countAPI')
})

app.get('/search', (req, res) => {
    event.emit('countAPI')
    res.send('search Api')
});

app.get('/update', (req, res) => {
    res.send('Api called again')
    event.emit('countAPI')
})

app.listen(3000, () => {
    console.log('Server is running')
})

