const alunoModel = require("../models/AlunoModels");

async function getAluno(req, res) {
  try {
    const alunos = await alunoModel.find();
    res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function postAluno(req, res) {
  try {
    const { nome, idade, sala } = req.body;
    const addAluno = new alunoModel({ nome, idade, sala });
    const alunoSalvo = await addAluno.save();
    res.status(201).json(alunoSalvo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAluno,
  postAluno,
};
