const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express(); 
const PORT = 3000;

// Configuración de middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para servir el formulario
app.get('/', (req, res) => {
    res.send(`
    <h1>Formulario de Ejemplo</h1>
    <form action="/submit" method="POST">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br>
    <button type="submit">Enviar</button>
    </form>
    `);
    });
    // Ruta para manejar la recepción de datos del formulario
    app.post('/submit', (req, res) => {
        const { nombre, email } = req.body;
        res.send(
            `<h1>Datos Recibidos</h1>
            <p>Nombre: ${nombre}</p>
            <p>Email: ${email}</p>
            <a href="/">Volver</a>
            `);
        });
        
        // Iniciar el servidor
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });