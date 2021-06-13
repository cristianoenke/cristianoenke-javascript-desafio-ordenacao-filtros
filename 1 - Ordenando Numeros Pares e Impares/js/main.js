/*
Desafio
Crie um programa onde você receberá valores inteiros não negativos como entrada.

Ordene estes valores de acordo com o seguinte critério:

Primeiro os Pares
Depois os Ímpares
Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.

Entrada
A primeira linha de entrada contém um único inteiro positivo N (1 < N < 10000) Este é o número de linhas de entrada que vem logo a seguir. As próximas N linhas terão, cada uma delas, um valor inteiro não negativo.

Saída
Exiba todos os valores lidos na entrada segundo a ordem apresentada acima. Cada número deve ser impresso em uma linha, conforme exemplo de saída abaixo.
*/


var N_entries = prompt()
var all_nums = [];
var pares = [];
var impares = [];
var sorted_par =[];
var sorted_impar = [];

for(var i = 0; i < N_entries; i++)
all_nums.push(prompt()); // usar gets() na plataforma da digital inovation one

all_nums.forEach((value, index) => {
    if ((value%2) === 0){ 
        pares.push(value)
    }
    else{
        impares.push(value)
    }   
    
});

sorted_par = pares.sort(function(a, b){return a - b});
sorted_impar = impares.sort(function(a, b){return b - a});

sorted_par.forEach((value, index) => {
    console.log(value);    
});

sorted_impar.forEach((value, index) => {
    console.log(value);    
});