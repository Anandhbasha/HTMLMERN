import express from 'express'
import route from './Router/Router.js'
const app = express()

const PORT = 8888
app.use(express.json())
app.use('/',route)
app.listen(PORT,()=>{
    console.log(`This sever is running under  http://localhost:${PORT}` );    
})