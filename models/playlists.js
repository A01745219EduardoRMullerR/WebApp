const mongoose = require('mongoose')

const playlistsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    }
},{collection:'Playlists'})

const Playlist = mongoose.model('Playlists', playlistsSchema)
module.exports = Playlist