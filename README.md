# Ourspace API

### Presentación

El servidor API se encuentra en la dirección `http://localhost:3770`

Las consultas que comiencen por `/api`, `no` necesita `identificación`

Las consultas que comiencen por `/my`, `si` necesita `identificación`

Aclaración: recurso == oferta == productos. Ya que se ofertan recursos.

### API

#### /api/resources
    ##### Ruta completa: `/api/resources`
    Descripción: Devuelve una lista de todas las ofertas disponibles.

    > Método: Get

    | Parametros    | Obligatorio | Tipo   | Descripción           |
    | --------- | ---------- | ------ | --------------------- |
    |   |            |        |                           |

    > Respuesta

    | Parámetros    | Tipo   | Descripción                                            |
    | ------- | ------ | ----------------------------------------------- |
    | status    | int    | Devuelve 1 en caso de error.<br /> Devuelve 200 en caso de éxito |
    | data | array | Array de ofertas                                      | 
    | message | string | Descripción en caso de error   | 


    ##### Ruta completa: `/api/resources/details`
    Descripción: Devuelve una lista de ofertas según tipo de recurso buscado. 

    > Método: Get

    | Parametros    | Obligatorio | Tipo   | Descripción           |
    | --------- | ---------- | ------ | --------------------- |
    | type  |     si       |    int    | Tipo de recurso |

    > Respuesta

    | Parámetros    | Tipo   | Descripción                                            |
    | ------- | ------ | ----------------------------------------------- |
    | status    | int    | Devuelve 1 en caso de error.<br /> Devuelve 200 en caso de éxito |
    | data | array | Array de ofertas   
    | message | string | Descripción en caso de error   | 


    ##### Ruta completa: `/api/resources/img`
    Descripción: Subir imagenes al servidor.

    > Método: Post

    | Parametros    | Obligatorio | Tipo   | Descripción           |
    | --------- | ---------- | ------ | --------------------- |
    | img  |     si       |    png/jpg    | Imagen |

    > Respuesta

    | Parámetros    | Tipo   | Descripción                                            |
    | ------- | ------ | ----------------------------------------------- |
    | status    | int    | Devuelve 1 en caso de error.<br /> Devuelve 200 en caso de éxito | 
    | message | string | Descripción en caso de error   | 

#### /api/resources/details



#### /api/resources/comments


#### /api


#### /my/admin

    ##### Ruta completa: `/my/admin/misProductos`
    Descripción: Devuelve la lista de productos/ofertas creadas por un usuario específico. La API identifica al usuario mediante el TOKEN.

    > Método: Get

    | Parametros    | Obligatorio | Tipo   | Descripción           |
    | --------- | ---------- | ------ | --------------------- |
    | No  |            |        |                            |

    > Respuesta

    | Parámetros    | Tipo   | Descripción                                            |
    | ------- | ------ | ----------------------------------------------- |
    | status    | int    | Devuelve 1 en caso de error. <br /> Devuelve 100 en caso de fallo de identificaicón <br /> Devuelve 200 en caso de éxito |
    | data | array | Array de ofertas/productos del usuario          | 
    | message | string | Descripción en caso de error/fallo de identificación   | 


    ##### Ruta completa: `/my/admin/crearProducto`
    Descripción: Crea una nueva oferta/producto.

    > Método: Post

    | Parametros    | Obligatorio | Tipo   | Descripción           |
    | --------- | ---------- | ------ | --------------------- |
    | idTipo  |     si       |   int     |     Tipo de oferta  |
    | nombre  |     si       |   string     |     Nombre de la oferta  |
    | descripcion  |     no       |   string     |     Descripción de la oferta  |
    | precio  |     si       |   int     |     Precio de la oferta  |
    | normas  |     no       |   array (int)     |     Lista de normas seleccionadas  |
    | plazoOferta  |     si       |   int     |     La oferta puede ser: Largo plazo o corto plazo  |
    
    

    > Respuesta

    | Parámetros    | Tipo   | Descripción                                            |
    | ------- | ------ | ----------------------------------------------- |
    | status    | int    | Devuelve 1 en caso de error. <br /> Devuelve 100 en caso de fallo de identificaicón <br /> Devuelve 200 en caso de éxito | 
    | message | string | Descripción del status devuelto   | 



    ##### Ruta completa: `/my/admin/eliminarProducto`
    Descripción: Elimina un producto.

    > Método: Post

    | Parametros    | Obligatorio | Tipo   | Descripción           |
    | --------- | ---------- | ------ | --------------------- |
    | idOferta  |     si       |   int     |    Id de la oferta  |
    
    

    > Respuesta

    | Parámetros    | Tipo   | Descripción                                            |
    | ------- | ------ | ----------------------------------------------- |
    | status    | int    | Devuelve 1 en caso de error. <br /> Devuelve 100 en caso de fallo de identificaicón <br /> Devuelve 200 en caso de éxito | 
    | message | string | Descripción del status devuelto   | 

    
    ##### Ruta completa: `/my/admin/modificarProducto`
    Descripción: Modifica una oferta/producto.

    > Método: Post

    | Parametros    | Obligatorio | Tipo   | Descripción           |
    | --------- | ---------- | ------ | --------------------- |
    | idTipo  |     si       |   int     |     Tipo de oferta  |
    | nombre  |     si       |   string     |     Nombre de la oferta  |
    | descripcion  |     no       |   string     |     Descripción de la oferta  |
    | precio  |     si       |   int     |     Precio de la oferta  |
    | normas  |     no       |   array (int)     |     Lista de normas seleccionadas  |
    | plazoOferta  |     si       |   int     |     La oferta puede ser: Largo plazo o corto plazo  |
    
    

    > Respuesta

    | Parámetros    | Tipo   | Descripción                                            |
    | ------- | ------ | ----------------------------------------------- |
    | status    | int    | Devuelve 1 en caso de error. <br /> Devuelve 100 en caso de fallo de identificaicón <br /> Devuelve 200 en caso de éxito | 
    | message | string | Descripción del status devuelto   | 



    ##### Ruta completa: `/my/admin/getNormas`
    Descripción: Devuelve la lista de normas.

    > Método: Get

    | Parametros    | Obligatorio | Tipo   | Descripción           |
    | --------- | ---------- | ------ | --------------------- |
    |    |            |        |          |

    > Respuesta

    | Parámetros    | Tipo   | Descripción                                            |
    | ------- | ------ | ----------------------------------------------- |
    | status    | int    | Devuelve 1 en caso de error.<br /> Devuelve 200 en caso de éxito |
    | data | array | Array de normas                                      | 
    | message | string | Descripción en caso de error   | 



    ##### Ruta completa: `/my/admin/getComentarios`
    Descripción: Devuelve la lista de comentarios de una oferta especificada.

    > Método: Get

    | Parametros    | Obligatorio | Tipo   | Descripción           |
    | --------- | ---------- | ------ | --------------------- |
    |   idOferta |    Si        |   int     |     idOferta de la cual se quiere obtener los comentarios     |

    > Respuesta

    | Parámetros    | Tipo   | Descripción                                            |
    | ------- | ------ | ----------------------------------------------- |
    | status    | int    | Devuelve 1 en caso de error.<br /> Devuelve 200 en caso de éxito |
    | data | array | Array de comentarios                                      | 
    | message | string | Descripción en caso de error   | 


    ##### Ruta completa: `/my/admin/publicarComentario`
    Descripción: Crea un comentario sobre una oferta.

    > Método: Get

    | Parametros    | Obligatorio | Tipo   | Descripción           |
    | --------- | ---------- | ------ | --------------------- |
    |   idOferta |    Si        |   int     |     idOferta de la cual se quiere obtener los comentarios     |
    |   fecha |    Si        |   int     |     fecha de la publicación del comentario     |
    |   text |    Si        |   int     |   comentario que se quiere publicar     |

    > Respuesta

    | Parámetros    | Tipo   | Descripción                                            |
    | ------- | ------ | ----------------------------------------------- |
    | status    | int    | Devuelve 1 en caso de error.<br /> Devuelve 200 en caso de éxito |                           | 
    | message | string | Descripción en caso de error   | 



`/my/reservas`


`/my`


---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

### Login y Registro

##### Login

> Description

- Login API

> Url

```
/api/login
```

> Request methods

- Post

| params   | obligatory | type   | description           |
| -------- | ---------- | ------ | --------------------- |
| username | yes        | string | id, email of the user |
| password | yes        | string | password              |

> Response params

| col1    | col2   | col3                                            |
| ------- | ------ | ----------------------------------------------- |
| status  | int    | the request success; 0: if success<br />1: fail |
| message | string | description                                     |
| token   |        |                                                 |

---

---

##### Registro

> Description

- Register API

> Url

```
/api/regisUser
```

> Request methods

- Post

| params       | obligatory | type   | description           |
| ------------ | ---------- | ------ | --------------------- |
| username     | yes        | string | id, email of the user |
| password     | yes        | string | password              |
| name         | yes        | string |                       |
| surname      | yes        | string |                       |
| birth        | yes        | date   |                       |
| email        | yes        | string |                       |
| phone number | yes        | string |                       |
|              |            |        |                       |
|              |            |        |                       |
|              |            |        |                       |

> Response params

| col1    | col2   | col3                                            |
| ------- | ------ | ----------------------------------------------- |
| status  | int    | the request success; 0: if success<br />1: fail |
| message | string | description                                     |
|         |        |                                                 |

---

---

---

---

---

---

---

---

---

### Publicaciones

##### Obtener datos

> Description

- lista de recursos API

> Url

```
/api/publicaciones/recursos
```

> Request methods

- Get

| params      | obligatory | type   | description |
| ----------- | ---------- | ------ | ----------- |
| dimensiones | no         | string |             |
| precio      | no         | string |             |
| ubicacion   | no         |        |             |
| tiempo      | no         |        |             |
|             | no         |        |             |
|             | no         |        |             |
|             | no         |        |             |
|             |            |        |             |

> Response params

| col1        | col2 | col3 |
| ----------- | ---- | ---- |
| dimensiones |      |      |
| precio      |      |      |
| ubicacion   |      |      |
| fotos       |      |      |
| propietario |      |      |
|             |      |      |
|             |      |      |

##### Detalles del recurso

> Description

- detalles de un recurso API

> Url

```
/api/publicaciones/detalles
```

> Request methods

- Get

| params     | obligatory | type   | description |
| ---------- | ---------- | ------ | ----------- |
| id recurso | si         | string |             |
|            |            |        |             |
|            |            |        |             |

> Response params

| col1        | col2 | col3 |
| ----------- | ---- | ---- |
| dimensiones |      |      |
| precio      |      |      |
| ubicacion   |      |      |
| fotos       |      |      |
| propietario |      |      |

---

---

---

---

---

---

---

---

### Detalles de Publicación

##### Reserva

```
/api/info
```

### Ofertar

```
/api/share
```

##### Algo

---

---

---

---

---

---

---

---

---

---

---

### Administracion

##### Personal details

> Description

- Personal details API

> Url

```
/my/login
```

> Request methods

- Get

| params | obligatory | type | description |
| ------ | ---------- | ---- | ----------- |
|        |            |      |             |
|        |            |      |             |

> Response params

| col1         | col2   | col3                                            |
| ------------ | ------ | ----------------------------------------------- |
| status       | int    | the request success; 0: if success<br />1: fail |
| message      | string | description                                     |
| username     |        |                                                 |
| name         |        |                                                 |
| surname      |        |                                                 |
| phone number |        |                                                 |
| birth        |        |                                                 |
| email        |        |                                                 |
|              |        |                                                 |
|              |        |                                                 |
|              |        |                                                 |
|              |        |                                                 |

> Description

- Login API

> Url

```
/api/login
```

> Request methods

- Post

| params   | obligatory | type   | description           |
| -------- | ---------- | ------ | --------------------- |
| username | yes        | string | id, email of the user |
| password | yes        | string | password              |

> Response params

| col1    | col2   | col3                                            |
| ------- | ------ | ----------------------------------------------- |
| status  | int    | the request success; 0: if success<br />1: fail |
| message | string | description                                     |
| token   |        |                                                 |
