function gestionDuFormulaire(event) {
  event.preventDefault();
  const firstNumberValue = 1 * document.getElementById("firstNumber").value;
  const secondNumberValue = 1 * document.getElementById("secondNumber").value;
  const operationValue = document.getElementById("operation").value;

  let resultat = 0;
  if (operationValue === "1") {
    resultat = firstNumberValue + secondNumberValue;
  }
  if (operationValue === "2") {
    resultat = firstNumberValue * secondNumberValue;
  }

  const operationlabel = operationValue === "1" ? "+" : "*";
  document.getElementById(
    "result"
  ).innerHTML = `${firstNumberValue} ${operationlabel} ${secondNumberValue} = ${resultat}`;
}

function gestionDuneOperation() {
  event.preventDefault();
  const firstNumberValue = 1 * document.getElementById("firstNumber").value;
  const secondNumberValue = 1 * document.getElementById("secondNumber").value;
  const operationValue = document.getElementById("operation").value;

  let resultat = 0;
  if (operationValue === "1") {
    resultat = firstNumberValue + secondNumberValue;
  }
  else if (operationValue === "2") {
    resultat = firstNumberValue * secondNumberValue;
  }
  else {
    alert("Veuillez choisir une opération valide.");
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
    document.getElementById("result").innerHTML = "";
    return;
  }

  const operationlabel = operationValue === "1" ? "+" : "*";
  document.getElementById(
    "result"
  ).innerHTML = `${firstNumberValue} ${operationlabel} ${secondNumberValue} = ${resultat}`;
}
