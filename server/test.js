const Repository = require('./repository.js');

const repository = new Repository

// const data = {
//     id: 1,
//     nombre: "Mateo",
//     edad: 32,
//     ciudad: "Barcelona"
// }


avaiableId()
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.error(err)
    })

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

    let id = 0;
    while (bdArray[id]["id"] === id) {
        id++
    }
    return id
}

//const response = await fetch('/data',{method: 'GET'})
//console.log(repository.avaiableId())