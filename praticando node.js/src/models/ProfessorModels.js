const mongoose = require("mongoose");

const professorSchema = mongoose.Schema({
  nome: String,
  aulas: Number,
  salario: Number,
  Materia: String,
});

const professorModel = mongoose.model("professor", professorSchema);

module.exports = professorModel;
