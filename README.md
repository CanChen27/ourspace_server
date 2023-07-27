# Ourspace API SERVER Reference

### About

El servidor API se encuentra en la dirección `http://localhost:3770`

Las consultas que comiencen por `/api`, `no` necesita `identificación`

Las consultas que comiencen por `/my`, `si` necesita `identificación`


`/api/resources`
##### Ruta completa /api/resources
> Request methods

- Post


| params    | obligatory | type   | description           |
| --------- | ---------- | ------ | --------------------- |
| No params |            |        | Devuelve la lista de ofertas |

> Response params

| col1    | col2   | col3                                            |
| ------- | ------ | ----------------------------------------------- |
| status    | int    | the request success; 0: if success<br /> 1: fail |
| data | string | description                                     | 


`/api/resources/details`


`/api/resources/comments`


`/api`


`/my/admin`


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
