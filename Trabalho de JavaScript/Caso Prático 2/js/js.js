// * Verificação da idade informada no campo de entrada
document.getElementById('btnVerificar').addEventListener('click', function() {
    const idade = parseInt(document.getElementById('idade').value);
    let mensagem = "";
  
    if (isNaN(idade) || idade < 0) {
      mensagem = "Por favor, insira uma idade válida.";
    } else {
      // * Verifica se é maior ou menor de idade
      mensagem = idade >= 18 ? "É maior de idade." : "É menor de idade."; // operação ternária
  
      // * Verifica se está na faixa de adolescente (13 a 19 anos)
      if (idade >= 13 && idade <= 19) {
        mensagem += " É adolescente.";
      }
  
      // * Verifica se a idade é exatamente 65 anos
      if (idade === 65) {
        mensagem += " É um sénior.";
      }
    }
    
    document.getElementById('resultado').innerText = mensagem;
  });
  
  // * Botão para limpar o campo de entrada e o resultado
  document.getElementById('btnLimpar').addEventListener('click', function() {
    document.getElementById('idade').value = "";
    document.getElementById('resultado').innerText = "";
  });
  
  // *  Verificação da faixa etária a partir do dropdown
  document.getElementById('btnVerificarFaixa').addEventListener('click', function() {
    const faixa = document.getElementById('faixa').value;
    let mensagem = "";
  
    switch(faixa) {
      case "crianca":
        mensagem = "Criança.";
        break;
      case "adolescente":
        mensagem = "Adolescente.";
        break;
      case "adulto":
        mensagem = "Adulto.";
        break;
      case "senior":
        mensagem = "Sénior.";
        break;
      default:
        mensagem = "Por favor, selecione uma faixa etária válida.";
    }
  
    document.getElementById('resultadoFaixa').innerText = mensagem;
  });
  
  // * Botão para limpar a seleção do dropdown e o resultado da faixa etária
  document.getElementById('btnLimparFaixa').addEventListener('click', function() {
    document.getElementById('faixa').value = "";
    document.getElementById('resultadoFaixa').innerText = "";
  });
  