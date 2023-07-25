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

const path = require("node:path")

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

const http = require('node:http')

// http.createServer((req, res) => {
//     res.writeHead(200);
//     res.write('hello this is lakshya')
//     console.log(req.url)
//     res.end('Server is createdsdf')
// }).listen(4500);
const data = require('./data')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(data)) 
    res.end()
}).listen(3000)