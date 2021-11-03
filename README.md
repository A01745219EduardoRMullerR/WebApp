# WebApp
Proyecto Aplicaciones Web

# Documentacion

Desarrollo de un back-end para almacenar playlists de libros y canciones de forma no relacional

Las playlists tienen dos campos: Titulo y Descripcion, el Titulo de la playlist debe tener de 5 a 50 caracteres y su descripcion debe de ser de 50 a 250 caracteres

El modelo de la base de datos no relacional se ve de la siquiente forma:

```Javascript
Playlist{
  nombre:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    }
}

```

Se tienen las 4 operaciones tipo CRUD (Create, Read, Update & Delete)

### 1.1 Create
Dentro de controllers esta la funcion asincrona agregarPlaylist donde se envia un JSON con el nombre y descripcion de la playlist

* Endpoint: */prueba/agregarPlaylist*
* Metodo: *post
* Body: *JSON*
* Validaciones: Titulo debe de tener entre 5 y 50 caracteres, Descripcion debe de tener entre 50 y 250. Ambos campos deben de ser strings.

Ejemplo: 
```JSON
{
    "nombre" : "The Black Parade",
    "descripcion": "The Black Parade es el tercer álbum de estudio de la banda estadounidense de rock My Chemical Romance."
}
```

* Errores: 


HTTP status |Error
------------ | -------------
422 |Invalid Body Exception: Los nombres de los campos no coinciden
422 |Invalid Body Exception: Los valores no son strings
422 |Invalid Body Exception: El campo Titulo no tiene entre 5 y 50 caracteres
422 |Invalid Body Exception: El campo Descripcion no tiene entre 50 y 250 caracteres


###1.2 Read
En Controllers esta la funcion asincrona obtenerPlaylists que regresa las playlists guardadas en la base de datos


* Endpoint: */prueba/obtenerPlaylists*
* Metodo: *get
* Body: *JSON*
* Validaciones: 

Ejemplo de retorno:
```JSON
Playlists{
{"_id":{"$oid":"617f723d2a2f63ce98650a4a"},"nombre":"Edited Test Site","descripcion":"test descripcion of a char set that should be above 50 characters","__v":0}
{"_id":{"$oid":"617f727d2a2f63ce98650a4c"},"nombre":"Testing site 2.0","descripcion":"test descripcion of a char set that should be above 50 characters","__v":0}
}
```
* Errores:

HTTP status |Error
------------ | -------------
500 |Unknown Exception


### 1.3 Update

Dentro de Controllers esta la funcion asincrona actualizarPlaylists que toma como parametro un JSON de la siguiente forma:


* Endpoint: */prueba/actualizarPlaylists*
* Metodo: *post
* Body: *JSON*
* Validaciones: dentro de filtro debe de haber el campo Nombre

```JSON
{
    "filtro": {
        "nombre": "Testing site"
    }, "cambio": {
        "nombre": "Edited Test Site"
    }
}
```

HTTP status |Error
------------ | -------------
422 |Unknown Body Exception


### 1.4 Delete

Dentro de Controllers esta la funcion asincrona borrarPlaylist

* Endpoint: */prueba/borrarPlaylist*
* Metodo: *post
* Body: *JSON*
* Validaciones: 

Ejemplo de body: 
 ```JSON
 {
 "nombre":"Testing site"
 }
 ```

HTTP status |Error
------------ | -------------
500 |Unknown Exception: Something went wrong with the deletion
