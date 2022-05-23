const { request } = require("express");
const { response } = require("express");

usuarioControlador = {};

const usuarioGet = (req = request, res = response) => {
  const query = req.query;

  res.json({
    msg: "get API - controlador",
    query,
  });
};

const usuarioPost = (req, res = response) => {
  const body = req.body;

  res.json({
    msg: "post API - controlador",
    body,
  });
};

const usuarioPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put API - controlador",
    id,
  });
};

const usuarioPatch = (req, res = response) => {
  res.json({
    msg: "Patch API - controlador",
  });
};

const usuarioDelete = (req, res = response) => {
  res.json({
    msg: "delete API - controlador",
  });
};

usuarioControlador = {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioPatch,
  usuarioDelete,
};

module.exports = usuarioControlador;
