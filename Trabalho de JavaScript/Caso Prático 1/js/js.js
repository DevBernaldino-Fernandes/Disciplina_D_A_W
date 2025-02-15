
// * Funcao de soma 
function calculateSum() { 
    const num1 = parseFloat(document.getElementById('number1').value); 
    const num2 = parseFloat(document.getElementById('number2').value); 
     
    if (isNaN(num1) || isNaN(num2)) { 
      document.getElementById('result').innerText = "Por favor, insira números válidos."; 
    } else { 
      const sum = num1 + num2; 
      document.getElementById('result').innerText = sum; 
    } 
  } 


// * Funcao de Mutipliccao
function calculateMlt() { 
    const num1 = parseFloat(document.getElementById('number1').value); 
    const num2 = parseFloat(document.getElementById('number2').value); 
     
    if (isNaN(num1) || isNaN(num2)) { 
      document.getElementById('result').innerText = "Por favor, insira números válidos."; 
    } else { 
      const mlt = num1 * num2; 
      document.getElementById('result').innerText =  mlt; 
    } 
  } 


// * Funcao de Divisao 
function calculateDiv() { 
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
     
    if (isNaN(num1) || isNaN(num2)) { 
      document.getElementById('result').innerText = "Por favor, insira números válidos.";
    } else { 
      const mlt = num1 / num2; 
      document.getElementById('result').innerText =  mlt;
    } 
  } 

// * Funcao de subacao
function calculateSub() { 
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
     
    if (isNaN(num1) || isNaN(num2)) { 
      document.getElementById('result').innerText = "Por favor, insira números válidos.";
    } else { 
      const mlt = num1 - num2; 
      document.getElementById('result').innerText =  mlt;
    } 
  }

// * Função para limpar o display e os campos de entrada
function limparTela() {
  atualizar("0");
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}
function atualizar(value) {
  document.getElementById("result").innerText = value;
}