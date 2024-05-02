const { rejects } = require('assert');
const fs = require('fs');


class repository {
    Create = (newRegister) => {
        return new Promise((resolve,reject) => {
            fs.readFile('bd.json', 'utf8', (err, data) => {
                if (err) {
                    console.error('Error al leer el archivo:', err)
                    reject(false)
                    return
                }
    
                const bdArray = JSON.parse(data)
                bdArray.push(newRegister)
                const newbdJSON = JSON.stringify(bdArray, null, 2)
    
                fs.writeFile('bd.json', newbdJSON, 'utf8', (err) => {
                    if (err) {
                        console.error('Error al escribir en el archivo:', err)
                        return
                    }
                })

                resolve(true)
            })

        })
        
    }

    DeleteById = (id) => {
        return new Promise((resolve,reject) => {
            fs.readFile('bd.json', 'utf8', (err, data) => {
                if (err) {
                    console.log('Error al leer el archivo:', err)
                    reject(false)
                    return;
                }
    
                const bdArray = JSON.parse(data)
                const newBdArray = bdArray.filter(item => item.id !== id)
                const newbdJSON = JSON.stringify(newBdArray, null, 2)
    
                fs.writeFile('bd.json', newbdJSON, 'utf8', (err) => {
                    if (err) {
                        console.error('Error al escribir en el archivo:', err)
                        return
                    }
                })
                resolve(true)
            })
        })
        
    }

    ReadAll = () => {
        return new Promise((resolve, reject) => {
            fs.readFile('bd.json', 'utf8', (err, data) => {
                if (err) {
                    console.log('Error al leer el archivo:', err)
                    reject(false);
                    return;
                }
                const bdArray = JSON.parse(data);
                resolve(bdArray);
            });
        });
    }

    ReadById = (id) => {
        return new Promise((resolve,reject) => {
            fs.readFile('bd.json', 'utf8', (err, data) => {
                if (err) {
                    console.error('Error al leer el archivo:', err)
                    reject(false)
                    return;
                }
    
                const bdArray = JSON.parse(data)
                const item = bdArray.find(item => item.id === id)
                resolve(item)
            })
        })
    }
}

module.exports = repository



