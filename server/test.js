const Repository = require('./repository.js');
const fs = require('fs')
const repository = new Repository

const data = {
    nombre: "Martin",
    edad: 25,
    ciudad: "Sevilla",
    id: 5
}

avaiableId = async () => {
    const data = await new Promise((resolve, reject) => {
        fs.readFile('bd.json', 'utf8', (err, data) => {
            if (err) {
                console.error('Error (Repository.avaiableId): al leer el archivo:', err)
                reject()
            }
            resolve(data)
        })
    })
    const bdArray = JSON.parse(data)
    let flag = true, id = 0, k = 0
    while (flag) {
        if (!bdArray[k + 1])
            flag = false
        if (bdArray[k].id === id)
            id++
        k++
    }
    return id
}

//const response = await fetch('/data',{method: 'GET'})
//console.log(repository.avaiableId())

// repository.DeleteById(0)
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.error(err)
//     })


repository.Update(data)
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.error(err)
    })
