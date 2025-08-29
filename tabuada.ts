// Calculadora de tabuada, não funciona no vscode pois chama o prompt, seria necessario importar uma biblioteca para seu funcionamento apropriado.
let numero: number = Number(prompt("Insira qual tabuada você deseja saber:"));
let limite: number = Number(prompt("Até qual multiplicação dessa tabuada você deseja ver?"));
let i: number = 0;

for (i = 0; i <= limite; i++){
    console.log(`${numero}x${i}= ${numero*i}`);
}
