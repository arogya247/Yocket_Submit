import express from "express";
import mongoose from "mongoose";
import route from './route/routes.js'
import cors from 'cors'
import bodyParser from "body-parser";

const app = express()

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use('/users', route)

// app.post('/api/register', async(req, res) => {
//     console.log(req.body)
//     res.json({status: 'OK'})
// })

const PORT = 8000
const URL = 'mongodb+srv://user:user123@cluster0.bwetm.mongodb.net/cluster0?retryWrites=true&w=majority'

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(() =>{
    app.listen(PORT, () => {
        console.log(`server is runing great on ${PORT}`)
    })
}).catch((error) => {
    console.log("Error", error.message)
})
