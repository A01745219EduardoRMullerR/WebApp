const router = require('express').Router()
const playlistController = require("../controller/playlists")

router.post('/agregarPlaylist', playlistController.agregarPlaylist)
router.get('/obtenerPlaylist', playlistController.obtenerPlaylists)
router.post('actualizarPlaylist', playlistController.actualizarPlaylists)
router.post('/eliminarPlaylist', playlistController.borrarPlaylist)

module.exports = router