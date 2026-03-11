const botao = document.getElementById("botao");

botao.addEventListener("click", function () {
  let nome = document.getElementById("nome").value;

  let nota1 = Number(document.getElementById("nota1").value);
  let nota2 = Number(document.getElementById("nota2").value);
  let nota3 = Number(document.getElementById("nota3").value);
  let nota4 = Number(document.getElementById("nota4").value);
  console.log(nome, nota1, nota2, nota3, nota4);

  let media = nota1 + nota2;
  console.log(media);
});
