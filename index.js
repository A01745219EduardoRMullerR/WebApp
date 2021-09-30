const express = require('express')
const app = express()
const path = require('path')


app.use(express.static(path.join(__dirname, 'public')))

app.get('/prueba', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(8081, ()=>{
    console.log('Servidor en linea en el puerto 8081')
})