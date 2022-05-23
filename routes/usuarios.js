const { Router } = require("express");
const router = Router();

const controlador = require("../controllers/usuarios");

router.get("/", controlador.usuarioGet);
router.post("/", controlador.usuarioPost);
router.put("/:id", controlador.usuarioPut);
router.patch("/", controlador.usuarioPatch);
router.delete("/", controlador.usuarioDelete);

module.exports = router;
