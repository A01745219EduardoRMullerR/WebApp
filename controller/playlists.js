const mongoose = require('mongoose')
const PlaylistsSchema = require('../models/playlists')

exports.agregarPlaylist = async (request, response) => {

    var string = request.body.descripcion
    var title = request.body.nombre
    console.log(title)
    console.log(title.length)
    console.log(typeof title)

    if(typeof title === "string" && typeof string === "string"){
        if(title.length > 5 && title.length < 50){


            if(string.length > 50 && string.length < 250){
                const newPlaylist = new PlaylistsSchema(request.body)
                newPlaylist._id = mongoose.Types.ObjectId()
                try{
                    await newPlaylist.save()
                    console.log('Agregado')
                    response.json({'HTTP Status': 200})
                }catch(error){
                    console.log(err)
                    response.json({operacion: "incorrecta"})
                }
            }else{
                var e = new Error("InvalidBodyException: Description must be between 50 and 250 characters.")}
            console.log(e)
            response.json({'HTTP Status': 400})
        }else{
            var e = new Error("InvalidbodyException: Title must be between 5 and 50 characters")
            console.log(e)
            response.json({'HTTP Status': 400})
        }
    }else{
        var e= new Error("InvalidBodyException: Fields must be Strings")
        console.log(e)
        response.json({'HTTP Status': 400})
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