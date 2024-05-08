const express = require('express')
const path = require('path')
const app = express()
const port = 8080

const Repository_MongoDb = require('./repository_mongodb')
const repository = new Repository_MongoDb

app.use(express.static(path.join(__dirname,'../front/dist')))
app.use(express.json())

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

app.post('/data', async (req,res) =>{
    try{
        await repository.Create(req.body)
        res.status(200).send('OK')
    } catch(err){
        console.error(err)
    }
    
})

app.delete('/data',async (req,res) => {
    try{
        await repository.DeleteById(req.body)
        res.status(200).send('OK')
    }catch(err){
        console.error(err)
    }
    
})

app.put('/data',async (req,res) => {
    try{
        await repository.Update(req.body)
        res.status(200).send('OK')
    }catch(err){
        console.error(err)
    }
})


app.listen(port,(res) => {
    console.log('Servidor iniciado en el puerto:  http://localhost:'+ port)
})

