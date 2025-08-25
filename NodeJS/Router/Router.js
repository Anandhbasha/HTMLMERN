import express from 'express'
import { edit, insert, read, deleteUser } from '../Controller/Controller.js'

const route = express.Router()

route.get('/',read)

route.post('/insert',insert)

route.put('/update/:id',edit)
route.delete('/delete/:id',deleteUser)

export default route

