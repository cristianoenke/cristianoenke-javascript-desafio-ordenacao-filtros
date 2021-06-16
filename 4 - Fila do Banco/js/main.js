/*
Desafio
O banco que você trabalha sempre tem problemas para organizar as filas de atendimento dos clientes.

Após uma reunião com a gerência ficou decidido que os clientes ao chegar na agência receberão uma senha numérica em seu aparelho de celular via sms e que a ordem da fila será dada não pela ordem de chegada, mas sim pelo número recebido via sms. A ordem de atendimento será decrescente: aqueles que receberam número maior deverão ser atendidos primeiro. 

Então, dada a ordem de chegada dos clientes reordene a fila de acordo com o número recebido via sms, e diga quantos clientes não precisaram trocar de lugar nessa reordenação.

Entrada
A primeira linha contém um inteiro N, indicando o número de casos de teste a seguir.

Cada caso de teste inicia com um inteiro M (1 ≤ M ≤ 1000), indicando o número de clientes. Em seguida haverá M inteiros distintos Pi (1 ≤ Pi ≤ 1000), onde o i-ésimo inteiro indica o número recebido via sms do i-ésimo cliente.

Os inteiros acima são dados em ordem de chegada, ou seja, o primeiro inteiro diz respeito ao primeiro cliente a chegar na fila, o segundo inteiro diz respeito ao segundo cliente, e assim sucessivamente.

Saída
Para cada caso de teste imprima uma linha, contendo um inteiro, indicando o número de clientes que não precisaram trocar de lugar mesmo após a fila ser reordenada.
*/

var totalDeCasos = prompt();
var CasosTeste = []
var fila =[];
var fila_old =[];
var fila_sorted =[];
var nao_muda =[];

for (var i = 0; i < totalDeCasos; i++) {
    CasosTeste = prompt()
    fila.push(prompt().toString().split(' '));
    fila_old = [...fila[0]]
    fila_sorted = [...fila[0]]
    fila_sorted.sort(function(a, b){return b - a});
    nao_muda=0;
    for (var k = 0; k < fila_old.length; k++) {
        if (fila_old[k]==fila_sorted[k]) {
            nao_muda = nao_muda+1
        }
    }
    fila =[];
    console.log(nao_muda);
}