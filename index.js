// Importar dependencias (configurar en package.json)
import express from "express";
import dotenv from "dotenv";
import connection from "./database/connection.js"

// Configurar el dotenv para usar variables de entorno
dotenv.config();

// Mensaje de Bienvenida para verificare ejecutó la API de Node
console.log("API Nde en ejecución");

// Usar la conexión a la Base de Datos
connection();

// Crear el servidor Node
const app = express();
const puerto = process.env.PORT || 3900;

// Configurar cors para que acepte peticiones del frontend

// Configurar el servidor de Node
app.listen(puerto, () => {
  console.log("Servidor de Node ejecutándose en el puerto", puerto);
});

export default app;