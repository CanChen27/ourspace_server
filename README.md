# Ourspace API

## Presentación

El servidor API se encuentra en la dirección `http://localhost:3770`

Las consultas que comiencen por `/api`, `no` necesita `identificación`

Las consultas que comiencen por `/my`, `si` necesita `identificación`

Aclaración: recurso == oferta == productos. Ya que se ofertan recursos.

## API

### /api/resources
#### Ruta completa: `/api/resources`
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


#### Ruta completa: `/api/resources/details`
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


#### Ruta completa: `/api/resources/comentarios`
Descripción: Devuelve una lista de ofertas según tipo de recurso buscado. 

> Método: Get

| Parametros    | Obligatorio | Tipo   | Descripción           |
| --------- | ---------- | ------ | --------------------- |
| idOferta  |     si       |    int    | Id de la oferta de la cual se quiere obtener los comentarios |

> Respuesta

| Parámetros    | Tipo   | Descripción                                            |
| ------- | ------ | ----------------------------------------------- |
| status    | int    | Devuelve 1 en caso de error.<br /> Devuelve 200 en caso de éxito.<br /> Devuelve 201 en caso de no encontrar resultados.|
| data | array | Array de ofertas   
| message | string | Descripción en caso de error   | 


#### Ruta completa: `/api/resources/img`
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



### /api

#### Ruta completa: `/api/reguser`

Descripción: Registrar un nuevo usuario.

> Método: Post

| Parametros    | Obligatorio | Tipo   | Descripción           |
| --------- | ---------- | ------ | --------------------- |
| username  |     si       |   string     |  Nombre del usuario |
| password  |     si       |   string     | Contraseña de la cuenta |
| phone  |     si       |   int     | Número de teléfono|
| email  |     si       |   int     | Correo electrónico |

> Respuesta

| Parámetros    | Tipo   | Descripción                                            |
| ------- | ------ | ----------------------------------------------- |
| status    | int    | Devuelve 1 en caso de error. <br />  Devuelve 200 en caso de éxito | 
| message | string | Descripción del status devuelto   | 



#### Ruta completa: `/api/login`

Descripción: iniciar seción.

> Método: Post

| Parametros    | Obligatorio | Tipo   | Descripción           |
| --------- | ---------- | ------ | --------------------- |
| username  |     si       |   string     |  Nombre del usuario |
| password  |     si       |   string     | Contraseña de la cuenta |



> Respuesta

| Parámetros    | Tipo   | Descripción                                            |
| ------- | ------ | ----------------------------------------------- |
| status    | int    | Devuelve 1 en caso de error. <br />  Devuelve 200 en caso de éxito | 
| message | string | Descripción del status devuelto   | 
| data  |  string     | En caso se éxito, data contiene el TOKEN |


### /my/admin

#### Ruta completa: `/my/admin/misProductos`
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


#### Ruta completa: `/my/admin/crearProducto`
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



#### Ruta completa: `/my/admin/eliminarProducto`
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


#### Ruta completa: `/my/admin/modificarProducto`
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



#### Ruta completa: `/my/admin/getNormas`
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



#### Ruta completa: `/my/admin/publicarComentario`
Descripción: Crea un comentario sobre una oferta.

> Método: Post

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



### /my/reservas

#### Ruta completa: `/my/reservas/newReserva`
Descripción: Crea una nueva reserva.

> Método: Post

| Parametros    | Obligatorio | Tipo   | Descripción           |
| --------- | ---------- | ------ | --------------------- |
| idOferta  |     si       |   int     |     Id de la oferta  |
| uuid  |     si       |   string     |     Identificador de la reserva  |
| fecha  |     si       |   string     |     Fecha la reserva  |
| hora  |     si       |   time     |     Hora reservada  |
| compartir  |     si       |   int    | Si se quiere compartir o no|
| genteCompartir  |     si       |   int     |     Cuantos usuarios quiere compartir |

> Respuesta

| Parámetros    | Tipo   | Descripción                                            |
| ------- | ------ | ----------------------------------------------- |
| status    | int    | Devuelve 1 en caso de error. <br /> Devuelve 100 en caso de fallo de identificaicón <br /> Devuelve 200 en caso de éxito | 
| message | string | Descripción del status devuelto   | 


#### Ruta completa: `/my/reservas/misReservas`
Descripción: Devuelve la lista de reservas hechas por el usuario. La API identifica al usuario mediante el TOKEN.

> Método: Get

| Parametros    | Obligatorio | Tipo   | Descripción           |
| --------- | ---------- | ------ | --------------------- |
| No  |            |        |                            |

> Respuesta

| Parámetros    | Tipo   | Descripción                                            |
| ------- | ------ | ----------------------------------------------- |
| status    | int    | Devuelve 1 en caso de error. <br /> Devuelve 100 en caso de fallo de identificaicón <br /> Devuelve 200 en caso de éxito |
| data | array | Array de reservas del usuario  | 
| message | string | Descripción en caso de error/fallo de identificación   | 


#### Ruta completa: `/my/reservas/modificarReserva`

Descripción: Modifica una reserva.

> Método: Post

| Parametros    | Obligatorio | Tipo   | Descripción           |
| --------- | ---------- | ------ | --------------------- |
| idOferta  |     si       |   int     |     Id de la oferta  |
| uuid  |     si       |   string     |     Identificador de la reserva  |
| fecha  |     si       |   string     |     Fecha la reserva  |
| hora  |     si       |   time     |     Hora reservada  |
| compartir  |     si       |   int    | Si se quiere compartir o no|
| genteCompartir  |     si       |   int     |     Cuantos usuarios quiere compartir |


> Respuesta

| Parámetros    | Tipo   | Descripción                                            |
| ------- | ------ | ----------------------------------------------- |
| status    | int    | Devuelve 1 en caso de error. <br /> Devuelve 100 en caso de fallo de identificaicón <br /> Devuelve 200 en caso de éxito | 
| message | string | Descripción del status devuelto   | 


#### Ruta completa: `/my/reservas/cancelarReserva`

Descripción: Elimina una reserva.

> Método: Post

| Parametros    | Obligatorio | Tipo   | Descripción           |
| --------- | ---------- | ------ | --------------------- |
| uuid  |     si       |   string     |    Id de la reserva  |

> Respuesta

| Parámetros    | Tipo   | Descripción                                            |
| ------- | ------ | ----------------------------------------------- |
| status    | int    | Devuelve 1 en caso de error. <br /> Devuelve 100 en caso de fallo de identificaicón <br /> Devuelve 200 en caso de éxito | 
| message | string | Descripción del status devuelto   | 


### /my

#### Ruta completa: `/my/userInfo`

Descripción: Devuelve la información del usuario que se ha identificado

> Método: Get

| Parametros    | Obligatorio | Tipo   | Descripción           |
| --------- | ---------- | ------ | --------------------- |
| No  |            |        |                            |

> Respuesta

| Parámetros    | Tipo   | Descripción                                            |
| ------- | ------ | ----------------------------------------------- |
| status    | int    | Devuelve 1 en caso de error. <br /> Devuelve 100 en caso de fallo de identificaicón <br /> Devuelve 200 en caso de éxito |
| data | array | Informaición personal del usuario | 
| message | string | Descripción en caso de error/fallo de identificación   | 





## ....