# Día 3: Primer endpoint

## Qué he hecho

- He creado el endpoint `GET /api/health`.
- He devuelto una respuesta JSON.
- He usado el status code `200`.
- He probado la ruta desde navegador.
- He probado la ruta desde Thunder Client o Postman.
- He probado una ruta incorrecta para comprobar qué ocurre.

## Endpoint creado

```http
GET /api/health
```

## Respuesta obtenida

```json
{
  "status": "ok",
  "message": "UserManager API funcionando",
  "timestamp": "..."
}
```

## Explicación personal

El endpont `api/health/` sirve para comprobar el estado en el que se encuentra la API para garantizar su funcionamiento.

## Comparación de rutas
|Ruta|Método|Para qué sirve|
|---|---|---|
|`/`|`GET`|Mensaje inicial de la API|
|`/api/health`|`GET`|Comprobar el estado de la API|
|`/api/ping`|`GET`|Comprobar respuesta rápida del servidor|

## Pruebas realizadas
Petición 	Código esperado 	Resultado obtenido
GET / 	200 	
GET /api/health 	200 	
GET /api/ping 	200 	

