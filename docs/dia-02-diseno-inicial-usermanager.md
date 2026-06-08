# Día 2: Preparación del proyecto

## Herramientas utilizadas
- TypeScript: Lenguaje de programación para el backend.
- Node: Ejecutar JavaScipt sin navegador.
- Express: Framework que simplifica la creación de servidores y rutas http.
- package.json: Gestión de dependencias.
- tsconfig: Configuración del lenguaje TS.
- Thunder client: Extensión que actúa a modo de cliente para hacer peticiones http.

## Qué he hecho

- He inicializado el proyecto Node.js.
- He instalado Express.
- He configurado TypeScript.
- He creado la carpeta src.
- He creado el archivo src/server.ts.
- He arrancado el servidor en local.
- He probado la respuesta desde Thunder Client.

## Comando para arrancar el proyecto

```bash
npm run dev
```

## URL de prueba

```text
http://localhost:3000
```

## Respuesta obtenida

```json
{
  "message": "UserManager API"
}
```
![[funcionamiento-api.png]]

## Explicación personal
¿Qué hace el archivo src/server.ts? Ejecutar la lógica de negocio y comunicarse con el cliente a través de respuestas http.
¿Qué hace app.listen? Abre los puertos y mantiene al servidor a la espera de recibir peticiones http. (Hilo bloqueado esperando eventos).
¿Qué hace app.get? Es como un switch, ejecuta una petición http del tipo en este caso get siempre que la petición del cliente coincida con la respuesta tipo string del parámetro del método. (Socket).
¿Por qué usamos express.json? Convierte el JSON que llega en el cuerpo de una petición en un objeto manejable.

## Errores detectados
- ERROR: Unexpected ",": Faltaba especificicar el nombre de la ruta en el parámetro del método `app.get`.
-  404 Not Found: Al poner un parámetro que no es de tipo string en el `app.get` no aparece al acceder desde el cliente.