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
