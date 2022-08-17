// 1. IMPORTACIONES
const express = require("express");
const app = express();
const PORT = 4004;

// 2/ MIDDLEWARES
app.use(express.json());

//3. RUTAS
//req request res respuesta
app.get("/", (req, res) => {
    return res.json({
        msg: "Hellos World"
    });
});
// se pone primero las direcciones antes que los parametros, (como el siguiente GET)
app.get("/query", (req, res) => {
    return res.json({
        nombre: req.query.nombre,
        apellido : req.query.apellido,
    });
});
// es necesario poner : y despues el parametro que se quiere devolver
app.get("/:id", (req, res) => {
    return res.json({
        msg: req.params.id,
    });
});

//4. SERVIDOR
app.listen(PORT, () =>{
    console.log(`Servidor en linea en el puerto ${PORT}`);
});