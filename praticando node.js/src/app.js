const express = require("express");
const mongoose = require("mongoose");
const alunoRoutes = require("../src/routes/alunoRoutes");
const professorRoutes = require("../src/routes/professorRoutes");

const app = express();
const port = 3000;

mongoose.connect(
  "mongodb+srv://admin:admin123@cluster0.ygwphav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.use(express.json());
app.use(alunoRoutes);
app.use(professorRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
