const express = require("express");
const cors = require("express");

const userRoutes = require("../routes/usuarios");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";
    //middlewares
    this.middleware();
    //rutas de la aplicación
    this.routes();
  }

  middleware() {
    //CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, userRoutes);
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`servidor corriendo en  puerto ${this.port}`);
    });
  }
}

module.exports = Server;
