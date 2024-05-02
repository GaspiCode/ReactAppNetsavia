const express = require('express')
const path = require('path')
const app = express()
const port = 8080

app.use(express.static(path.join(__dirname,'dist')));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res) => {
     res.sendFile(path.join(__dirname,'src','index.html'))
})

app.listen(port,(res) => {
    console.log('Servidor iniciado en el puerto:  http://localhost:'+ port)
})

