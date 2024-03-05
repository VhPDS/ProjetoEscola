const express = require("express");
const alunoController = require("../controllers/alunoController");

const router = express.Router();

router.get('/alunos', alunoController.getAluno);
router.post('/alunos', alunoController.postAluno);

module.exports = router;