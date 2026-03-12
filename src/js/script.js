const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const nomeInput = document.getElementById("nome");
const nota1Input = document.getElementById("nota1");
const nota2Input = document.getElementById("nota2");
const nota3Input = document.getElementById("nota3");
const nota4Input = document.getElementById("nota4");

let alunos = [];

botao.addEventListener("click", function () {
  let nome = nomeInput.value;

  let notas = [
    Number(nota1Input.value),
    Number(nota2Input.value),
    Number(nota3Input.value),
    Number(nota4Input.value),
  ];

  let media = notas[0] * 0.2 + notas[1] * 0.3 + notas[2] * 0.2 + notas[3] * 0.3;

  let aluno = {
    nome: nome,
    notas: notas,
    media: media.toFixed(2),
  };

  alunos.push(aluno);

  mostrarAlunos();

  nomeInput.value = "";
  nota1Input.value = "";
  nota2Input.value = "";
  nota3Input.value = "";
  nota4Input.value = "";

  nomeInput.focus();
});

function mostrarAlunos() {
  resultado.innerHTML = "";

  alunos.forEach(function (aluno) {
    resultado.innerHTML += `
      <p>
        <strong>${aluno.nome}</strong> |
        Notas: ${aluno.notas.join(", ")} |
        Média: ${aluno.media}
      </p>
    `;
  });
}
