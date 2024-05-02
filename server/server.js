const express = require('express')
const path = require('path')
const app = express()
const port = 8080

const Repository = require('./repository')
const repository = new Repository

app.use(express.static(path.join(__dirname,'../front/dist')))

app.get('/', (res) => {
     res.sendFile(path.join(__dirname,'../front/dist/index.html'))
})

app.get('/data',async (req,res) =>{
    try {
        const result = await repository.ReadAll()
        res.json(result)
    } catch (err) {
        console.error(err);
    }
})




app.listen(port,(res) => {
    console.log('Servidor iniciado en el puerto:  http://localhost:'+ port)
})

