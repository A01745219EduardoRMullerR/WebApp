const express = require('express')
const app = express()
const path = require('path')
const mongoose = require("mongoose");
const playlistRoutes = require('./router/playlists')


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/ciudades", playlistRoutes)

mongoose.connect('mongodb://user10:root@54.198.161.35:27017/base10?authSource=admin')
    .then(()=>{
        app.listen(8081,()=>console.log("Servidor Back-End en línea"))
    })
    .catch(err=>console.log(err))

app.get('/prueba', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

/*app.listen(8081, ()=>{
    console.log('Servidor en linea en el puerto 8081')
})*/