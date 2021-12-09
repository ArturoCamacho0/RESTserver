const { response } = require("express");

const getUsers = (request, response = response) => {
	response.json({
		ok: true,
		message: "get API controlador",
	});
};

const postUsers = (request, response = response) => {
  const body = request.body;

	response.json({
		ok: true,
		message: "post API controlador",
    body
	});
};

const putUsers = (request, response = response) => {
  const id = request.params.id;
  const body = request.body;

	response.json({
		ok: true,
		message: "put API controlador",
    id,
    body
	});
};

const patchUsers = (request, response = response) => {
	response.json({
		ok: true,
		message: "patch API controlador",
	});
};

const deleteUsers = (request, response = response) => {
	response.json({
		ok: true,
		message: "delete API controlador",
	});
};

module.exports = {
	getUsers,
  postUsers,
  putUsers,
  patchUsers,
  deleteUsers,
};
