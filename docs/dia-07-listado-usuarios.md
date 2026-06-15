# Día 7: Listado de usuarios en memoria

## Qué he hecho

- He creado un tipo User en TypeScript.
- He creado un array de usuarios en memoria.
- He actualizado el endpoint GET /api/users.
- He devuelto un listado de usuarios en formato JSON.
- He añadido el total de usuarios en la respuesta.
- He comprobado que no se devuelven contraseñas.

## Endpoint trabajado

```http
GET /api/users
```

## Respuesta obtenida

```json
{
  "message": "Listado de usuarios",
  "total": 3,
  "data": [
    {
      "id": 1,
      "name": "Ana García",
      "email": "ana@email.com",
      "role": "USER",
      "isActive": true
    }
  ]
}
```

## Explicación personal

Trabajar en memoria significa que los datos están guardados temporalmente
mientras el servidor está encendido. Si reinicio el servidor, los datos vuelven
al estado inicial.

## Comprobaciones
- [x] La ruta  `GET api/users` responde 
- [x] El status code es 200
- [x] La respuesta contiene `message`, `total` y `data`
- [x] data es un array
- [x] Los usuarios no incluyen contraseña

## Memoria vs base de datos
¿Qué significa guardar datos en memoria? Guardar datos de forma temporal durante la ejecución de un programa.
¿Qué problema tiene? Que al cerrar el programa los datos almacenados desaparecen.
¿Por qué más adelante necesitaremos una base de datos? Para poder almacenar los datos de forma persistente en el tiempo.