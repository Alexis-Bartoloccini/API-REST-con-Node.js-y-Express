# API REST con Node.js y Express

Una API REST construida con Node.js y Express, utilizando un archivo JSON como base de datos.

## Instrucciones de Instalación

Sigue estos pasos para instalar y ejecutar la API en tu entorno local:

1. **Clona el Repositorio:**
   ```bash
   git clone https://github.com/Alexis-Bartoloccini/API-REST-con-Node.js-y-Express
   cd API-REST-con-Node.js-y-Express
2. **Instala las Dependencias:**

npm install

Este comando instalará todas las dependencias necesarias, incluyendo Express y las definiciones de TypeScript para Express.

3. **Compila el Proyecto:**

npm run tsc

Este comando utilizará TypeScript para compilar tu código TypeScript en JavaScript. Los archivos compilados estarán en la carpeta build.

3.1.  **Ejecuta la Aplicación:**

npm start

Esto iniciará la aplicación Node.js. La API estará disponible en http://localhost:3000.

5. **Modo de Desarrollo:**
Si prefieres reiniciar automáticamente la aplicación y realizar cambios durante el desarrollo, puedes usar el siguiente comando en lugar de npm start:

npm run dev

Nota: Asegúrate de tener Node.js y npm instalados en tu equipo antes de seguir estos pasos.

***Cómo Usar***

Interactuar con la API

**La API proporciona las siguientes rutas y métodos:**

1. Obtener todas las entradas del diario:

Ruta: /api/diaries
Método: GET
Descripción: Obtiene una lista de todas las entradas del diario.

url http://localhost:3000/api/diaries

2. Obtener una entrada del diario por ID:

Ruta: /api/diaries/:id
Método: GET
Descripción: Obtiene una entrada del diario específica según su ID.

url http://localhost:3000/api/diaries/1

3. Agregar una nueva entrada al diario:

Ruta: /api/diaries
Método: POST
Descripción: Agrega una nueva entrada al diario.

curl -X POST -H "Content-Type: application/json" -d '{"comment": "Nuevo Comentario", "date": "2023-12-25", "weather": "sunny", "visibility": "great"}' 
http://localhost:3000/api/diaries

4. Eliminar una entrada del diario por ID:

Ruta: /api/diaries/:id
Método: DELETE
Descripción: Elimina una entrada del diario específica según su ID.

curl -X DELETE http://localhost:3000/api/diaries/1

