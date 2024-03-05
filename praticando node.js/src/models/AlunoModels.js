const mongoose = require("mongoose");

const alunoSchema = mongoose.Schema({
  nome: String,
  idade: Number,
  sala: String,
});

const alunoModel = mongoose.model("aluno", alunoSchema);

module.exports = alunoModel;
