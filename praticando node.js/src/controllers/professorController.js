const professorModel = require("../models/ProfessorModels");

async function getProfessor(req, res) {
  try {
    const professor = await professorModel.find();
    res.json(professor);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
}

async function postProfessor(req, res) {
  const { nome, aulas, salario, Materia } = req.body;
  try {
    const novoProfessor = new professorModel({ nome, aulas, salario, Materia });
    const professorSalvo = await novoProfessor.save();
    res.status(201).json(professorSalvo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  postProfessor,
  getProfessor,
};
