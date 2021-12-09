const mongoose = require("mongoose");

const dbConnect = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log("¡La base de datos se ha conectado correctamente!".black.bgBrightGreen);
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	dbConnect
};