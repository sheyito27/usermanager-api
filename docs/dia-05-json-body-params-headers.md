# Día 5: JSON, body, params y headers

## Qué he hecho

- He repasado qué es JSON.
- He aprendido para qué sirve el body.
- He probado route params.
- He probado query params.
- He probado headers.
- He creado rutas temporales de debug.
- He creado una colección de pruebas en Thunder Client o Postman.

## Rutas trabajadas

```http
POST /api/debug/body
GET /api/debug/params/:id
GET /api/debug/query
GET /api/debug/headers
PATCH /api/debug/users/:id
```

## Explicación personal

El body sirve para enviar datos principales al servidor.
Los params sirven para identificar recursos concretos en la ruta.
Los query params sirven para enviar filtros u opciones en la URL.
Los headers sirven para enviar información adicional de la petición.

## Pruebas realizadas
| Petición                                        | Dato probado | Código esperado |
| ----------------------------------------------- | ------------ | --------------- |
| `POST /api/debug/body`                          | Body         | 200             |
| `GET /api/debug/params/25`                      | Params       | 200             |
| `GET /api/debug/query?role=ADMIN&isActive=true` | Query params | 200             |
| `GET /api/debug/headers`                        | Headers      | 200             |
| `PATCH /api/debug/users/7?notify=true`          | Combinado    | 200             |
|                                                 |              |                 |

## A donde viaja cada dato
| Dato              | ¿Dónde viajaría? | Ejemplo                    |
| ----------------- | ---------------- | -------------------------- |
| ID de usuario     | URL              | Id de usuario              |
| Email de registro | Body             | Nombre de usuario a añadir |
| Filtro por rol    | QueryParam       | Filtrar usuario por nombre |
| Token JWT         | Header           | Token                      |
| Nueva contraseña  | Body             | Nueva contraseña           |
