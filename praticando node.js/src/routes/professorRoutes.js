const express = require("express");
const professorController = require("../controllers/professorController");

const RouterProfessor = express.Router();

RouterProfessor.get("/professor", professorController.getProfessor);
RouterProfessor.post("/professor", professorController.postProfessor);

module.exports = RouterProfessor;
