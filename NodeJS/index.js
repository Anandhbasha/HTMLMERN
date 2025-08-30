import express from 'express'
import route from './Router/Router.js'
import dataBase from './Database/Db.js'
import cors from 'cors'
const app = express()

const PORT = 8888

app.use(cors({
    orgin:'http://localhost:5173/',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type','Authorization']
}))
dataBase("mongodb://127.0.0.1:27017/Newone")
app.use(express.json())
app.use('/',route)
app.listen(PORT,()=>{
    console.log(`This sever is running under  http://localhost:${PORT}` );    
})