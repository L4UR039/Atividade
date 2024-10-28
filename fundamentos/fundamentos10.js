let nome = "Lauro José Nogueira";
let partes = nome.split("");

let primenome = partes[0];

let iniciais = partes
  .slice(1)
  .map((part) => part.charAt(0) + ".")
  .join("");

console.log(iniciais, primenome);
