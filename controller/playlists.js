const mongoose = require('mongoose')
const PlaylistsSchema = require('../models/playlists')

exports.agregarPlaylist = async (request, response) => {
    const newPlaylist = new PlaylistsSchema(request.body)
    try{
        await newPlaylist.save()
        console.log('Agregado')
        response.json({operacion: 'correcta'})
    }catch(error){
        console.log(err)
        res.json({operacion: "incorrecta"})
    }
}

exports.obtenerPlaylists = async (request, response) => {
    const playlists = await PlaylistsSchema.find()
    console.log(playlists)
    response.json(playlists)
}

exports.actualizarPlaylists = async (request, response) => {
    try{
        await PlaylistsSchema.findOneAndUpdate(request.body.filtro, request.body.cambio)
        console.log('Cambio realizado')
        response.json({operacion: 'correcta'})
    }catch(error){
        console.log(err)
        res.json({operacion: "incorrecta"})
    }
}

exports.borrarPlaylist = async (request, response) => {
    await PlaylistsSchema.findByIdAndRemove(req.body)
    console.log("Playlist eliminada")
    res.json({operacion: "correcta"})
}