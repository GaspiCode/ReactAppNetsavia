const fs = require('fs');
const { resolve } = require('path');


class repository {
    Create = async (newRegister) => {
        try {
            const data = await new Promise((resolve, reject) => {
                fs.readFile('bd.json', 'utf8', (err, data) => {
                    if (err) {
                        console.error('Error al leer el archivo:', err)
                        reject()
                    }
                    resolve(data)
                })
            })
            const bdArray = JSON.parse(data)
            bdArray.push(newRegister)
            const newbdJSON = JSON.stringify(bdArray, null, 2)

            await new Promise((resolve, reject) => {
                fs.writeFile('bd.json', newbdJSON, 'utf8', (err) => {
                    if (err) {
                        console.error('Error al escribir en el archivo:', err)
                        reject()
                    }
                    resolve()
                })
            })
            return true
        }
        catch (err) {
            console.error('Error (Repository.Create): ',err);
            return false
        }
    }


    DeleteById = async (id) => {
        try {
            const data = await new Promise((resolve, reject) => {
                fs.readFile('bd.json', 'utf8', (err, data) => {
                    if (err) {
                        console.error('Error al leer el archivo:', err)
                        reject()
                    }
                    resolve(data)
                })
            })

            const bdArray = JSON.parse(data)
            const newBdArray = bdArray.filter(item => item.id !== id)
            const newbdJSON = JSON.stringify(newBdArray, null, 2)

            await new Promise((resolve, reject) => {
                fs.writeFile('bd.json', newbdJSON, 'utf8', (err) => {
                    if (err) {
                        console.error('Error al escribir en el archivo:', err)
                        reject()
                    }
                })
                resolve()
            })
            return true
        }
        catch(err) {
            console.error('Error (Repository.DeleteById):',err);
            return false
        }
    }

    ReadAll = async () => {
        try {
            const data = await new Promise((resolve, reject) => {
                fs.readFile('bd.json', 'utf8', (err, data) => {
                    if (err) {
                        console.log('Error al leer el archivo:', err)
                        reject()
                    }
                    const bdArray = JSON.parse(data)
                    resolve(bdArray)
                })
            })
            return data
        }
        catch(err) {
            console.log('Error (Repository.ReadAll)',err)
            return false
        }
    }

    ReadById = async (id) => {
        try {
            const data = await new Promise((resolve, reject) => {
                fs.readFile('bd.json', 'utf8', (err, data) => {
                    if (err) {
                        console.error('Error al leer el archivo:', err)
                        reject()
                    }
                    resolve(data)
                }) 
            })
            const bdArray = JSON.parse(data)
            const item = bdArray.find(item => item.id === id)
            return item
        }
        catch(err) {
            console.log('Error: (Repository.ReadById)',err)
            return false
        }
    }
}

module.exports = repository



