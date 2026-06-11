# Día 4: Métodos HTTP

## Qué he hecho

- He creado rutas simuladas para usuarios.
- He probado `GET /api/users`.
- He probado `GET /api/users/:id`.
- He probado `POST /api/users` enviando JSON.
- He probado `PATCH /api/users/:id` enviando JSON.
- He probado `DELETE /api/users/:id`.
- He creado una colección de pruebas en Thunder Client o Postman.

## Endpoints trabajados

```http
GET /api/users
GET /api/users/:id
POST /api/users
PATCH /api/users/:id
DELETE /api/users/:id
```

## Explicación personal

GET sirve para obtener información.
POST sirve para crear información.
PATCH sirve para modificar parte de un recurso.
DELETE sirve para eliminar o desactivar un recurso.

## Pruebas realizadas
|Petición|Método|Código esperado|Resultado obtenido|
|---|---|---|---|
|`/api/users`|`GET`|200||
|`/api/users/1`|`GET`|200||
|`/api/users`|`POST`|201||
|`/api/users/1`|`PATCH`|200||
|`/api/users/1`|`DELETE`|200||

## Explicación propia sobre métodos HTTP 
| Método   | ¿Para qué sirve?                                                     | Ejemplo en UserManager API                                     |
| -------- | -------------------------------------------------------------------- | -------------------------------------------------------------- |
| `GET`    | Recibir datos en formato json desde del servidor                     | Obtener los datos de un cliente en específico `/api/users/:id` |
| `POST`   | Enviar datos en formato json desde el cliente                        | Añadir un nuevo cliente en el servidor `POST api/users`        |
| `PATCH`  | Modificar parte de los datos en formato json alojados en el servidor | Modificar el rol de un usuario `PATCH api/users/:id`           |
| `DELETE` | Eliminar datos en formato json alojados en el servidor               | Eliminar un usuario del servidor `DELETE api/users/:id`        |
