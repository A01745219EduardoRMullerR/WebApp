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



### 1.3 Update

Dentro de Controllers esta la funcion asincrona actualizarPlaylists que toma como parametro un JSON de la siguiente forma:

```JSON
{
    "filtro": {
        "nombre": "Testing site"
    }, "cambio": {
        "nombre": "Edited Test Site"
    }
}
```

