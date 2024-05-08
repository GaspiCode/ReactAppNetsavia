const { MongoClient } = require('mongodb')
const ObjectId = require('mongodb').ObjectId

class Repository_MongoDb {

    cliente = new MongoClient('mongodb://localhost:27017')
    db = this.cliente.db('ReactAppNetsavia')
    coll = this.db.collection('Usuarios')

    Create = async (data) => {
        try {
            await this.cliente.connect()

            await this.coll.insertOne(data)

            return true
        } catch (err) {
            console.error('Error (Repository_Mongodb.Create): ', err)
            return false
        }
        finally {
            await this.cliente.close()
        }
    }

    DeleteById = async (data) => {

        try {
            await this.cliente.connect()

            const result = await this.coll.deleteOne({ "_id": ObjectId.createFromHexString(data._id) })

            if (result.deletedCount === 0) {
                console.error('Error (Repository_Mongodb.DeleteByID): No se ha encontrado un registro con la id proporcionada')
                return false
            }

            return true
        } catch (err) {
            console.error('Error (Repository_Mongodb.DeleteById): ', err)
            return false
        }
        finally {
            await this.cliente.close()
        }
    }

    ReadAll = async () => {
        try {
            await this.cliente.connect()
            const cursor = await this.coll.find()
            const resultado = await cursor.toArray()

            return resultado

        } catch (err) {
            console.error('Error (Repository_Mongodb.ReadAll): ', err)
        }
        finally {
            await this.cliente.close()
        }
    }

    Update = async (data) => {
        try {
            await this.cliente.connect()

            const result = await this.coll.updateOne({ "_id": ObjectId.createFromHexString(data._id)  }, 
            { $set: { 
                nombre: data.nombre,
                ciudad: data.ciudad,
                edad: data.edad
            }})

            if (result.matchedCount === 0) {
                console.error('Error (Repository_Mongodb.Update): no se encontro ningun elemento con la id proporcionada')
                return false
            }

            return true

        } catch (err) {
            console.error('Error (Repository_Mongodb.Update): ', err)
            return false
        }
        finally {
            await this.cliente.close()
        }


    }

}

module.exports = Repository_MongoDb
