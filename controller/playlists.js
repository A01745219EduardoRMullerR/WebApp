const mongoose = require('mongoose')
const PlaylistsSchema = require('../models/playlists')

exports.agregarPlaylist = async (request, response) => {

    // Existen los dos campos dentro del request.body
    if(request.body.hasOwnProperty("nombre") && request.body.hasOwnProperty("descripcion")){
        console.log('this works')
        var desc = request.body.descripcion
        var title = request.body.nombre
        console.log(title)
        console.log(title.length)
        console.log(typeof title)
        // Ambos Campos que se usan deben ser strings
        if(typeof title === "string" && typeof desc === "string"){
            // El titulo debe de ser entre 5 y 50 caracteres
            if(title.length > 5 && title.length < 50){

                // La Descripcion debe de ser de entre 50 y 250 caracteres
                if(desc.length > 50 && desc.length < 250){

                    // Todas las condiciones para subir el JSON son satisfactorias
                    const newPlaylist = new PlaylistsSchema(request.body)
                    newPlaylist._id = mongoose.Types.ObjectId()
                    try{
                        await newPlaylist.save()
                        console.log('Updated Succesfully')
                        response.json({Status: 200})
                    }catch(error){
                        console.log(err)
                        response.json({operacion: "incorrecta"})
                    }
                }else{
                    var e = new Error("InvalidBodyException: Description must be between 50 and 250 characters.")}
                console.log(e)
                response.json({Status: 422})
            }else{
                var e = new Error("InvalidbodyException: Title must be between 5 and 50 characters")
                console.log(e)
                response.json({Status: 422})
            }
        }else{
            var e= new Error("InvalidBodyException: Fields must be Strings")
            console.log(e)
            response.json({Status: 422})
        }




    }else{
        var e= new Error("InvalidBodyException: The fields must be 'nombre' and 'descripcion'.")
        console.log(e)
        response.send({Status: 422})
    }



}

exports.obtenerPlaylists = async (request, response) => {
    try{
        const playlists = await PlaylistsSchema.find()
        console.log(playlists)
        response.json(playlists)
    }catch(err){
        console.log(err)
        response.json({Status: 500})
    }

}

exports.actualizarPlaylists = async (request, response) => {
    try{
        await PlaylistsSchema.findOneAndUpdate(request.body.filtro, request.body.cambio)
        console.log('Cambio realizado')
        response.json({Status: 200})
    }catch(error){
        console.log(err)
        res.json({Status: 422})
    }
}

exports.borrarPlaylist = async (request, response) => {
    await PlaylistsSchema.findByIdAndRemove(req.body)
    console.log("Playlist eliminada")
    res.json({operacion: "correcta"})
}