const primeiroNome = prompt("Escreva o primeiro nome do recruta:");
const sobrenome = prompt("Escreva o sobrenome nome do recruta:");
const estudo = prompt("Escreva o campo de estudo do recruta:");
const anoDeNascimento = prompt("Escreva ano de nascimeto do recruta:");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome Completo: " +
    primeiroNome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    estudo +
    "\nIdade: " +
    (2023 - anoDeNascimento)
);
