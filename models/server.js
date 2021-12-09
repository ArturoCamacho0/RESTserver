const express = require("express");
var cors = require("cors");
const { dbConnect } = require("../database/config");

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		// Conectar a la base de datos
		this.db();

		// Middlewares
		this.middlewares();

		// Rutas
		this.routes();
	}

	async db() {
		await dbConnect();
	}

	middlewares() {
		// CORS
		this.app.use(cors());

        // Body Parser
        this.app.use(express.json());

        // Directorio público
		this.app.use(express.static("public"));
	}

	routes() {
		this.app.use("/api/users", require("../routes/user.routes"));
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(("Servidor corriendo en el puerto " + this.port).cyan);
		});
	}
}

module.exports = Server;
