const express = require('express')
const app = express()

app.get('/prueba', (req, res) =>{
    res.send('Prueba de servidor funcionando')
})

app.listen(8081, ()=>{
    console.log('Servidor en linea en el puerto 8081')
})