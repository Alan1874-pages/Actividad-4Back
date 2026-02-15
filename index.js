const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let mensajes = [
    {id : 1, usuario: "Sistema", texto: "Que tal como te va como andas en ee dia tan bonito"}
];

app.get('/api/mensajes', (req, res) => {
    console.log("peticion de mensajse ");
    res.json(mensajes);
});

app.post('/api/mensajes', (req, res) => {
    const cuerpo =  req.body ;
    console.log("mensaje recibido", cuerpo);

    const nuevoMensaje = {
        id : mensajes.length + 1,
        usuario : cuerpo.usuario || "Anonimo",
        texto : cuerpo.texto || ""
    };
    
    mensajes.push(nuevoMensaje);

    res.status(201).json({
        ok : true,
        mensaje : "Mensaje recibido",
        data : nuevoMensaje
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

