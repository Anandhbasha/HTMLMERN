import express from 'express'
import { edit, insert, read, deleteUser, registerNew, loginUser, authUser } from '../Controller/Controller.js'

const route = express.Router()

route.get('/',authUser,read)

route.post('/insert',insert)

route.put('/update/:userName',edit)
route.delete('/delete/:userName',deleteUser)

route.post('/reg',registerNew)
route.post('/login',loginUser)

export default route

