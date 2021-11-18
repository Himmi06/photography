// ---------------------------node -----------------------------------------------

// core modules
const fs = require('fs')
const http = require('http')


app = http.createServer((req, res) => {
    if (req.method == "GET") {
        switch (req.url) {
            case '/':
                fs.readFile(__dirname+'/public/index.html', (err, data) => {
                    if (err) return res.end(err.message)
                    res.writeHeader(200, { "Content-Type": "text/html" });
                    res.write(data);
                    res.end();
                })
                break
            case '/contact':
                // another
                break
            default:
                res.end('Please ENter Correct Route')
        }
    } else {
        res.end('Please Send From Get Method')
    }
})



app.listen(80, () => {
    console.log('server is running')
})






// -------------------------------express------------------------------------------------------------------------------

// 3rdparty express
// const express=require('express')

// const app=express()
// const port=80

// // middleware
// app.use(express.static(__dirname+'/public/'))


// // routes
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/public/')


// })
// app.get('/contact',(req,res)=>{
//     res.sendFile(__dirname+'/public/work-single.html')


// })

// // server listening


// app.listen(port, () => {
//     console.log(`Server started on ${port}`);
// });