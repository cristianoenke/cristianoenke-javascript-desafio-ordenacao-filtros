/*
Desafio
O professor Girafales organizou a confecção de um uniforme para as turmas da escola para comemorar o final do ano. Após algumas conversas, ficou decidido com os alunos que eles poderiam escolher a cor do uniforme entre branco ou vermelho. Assim sendo, Girafales precisa de sua ajuda para organizar as listas de quem quer o uniforme em cada uma das turmas, relacionando estas camisetas pela cor, tamanho (P, M ou G) e por último pelo nome.

Entrada
Cada caso de teste inicia com um valor N, (1 ≤ N ≤ 60) inteiro e positivo, que indica a quantidade de uniformes a serem feitas para aquela turma. As próximas N*2 linhas contém informações de cada um dos uniformes (serão duas linhas de informação para cada uniforme). A primeira linha irá conter o nome do estudante e a segunda linha irá conter a cor do uniforme ("branco" ou "vermelho") seguido por um espaço e pelo tamanho do uniforme "P" "M" ou "G". A entrada termina quando o valor de N for igual a zero (0) e esta valor não deverá ser processado.

Saída
Para cada caso de entrada deverão ser impressas as informações ordenadas pela cor em ordem ascendente, seguido pelos tamanhos em ordem descendente e por último por ordem ascendente de nome, conforme o exemplo abaixo.
*/


let zeroing = []
let totalItems = prompt();
let names =[];
let color_size =[];
let colors =[];
let sizes =[];
let sizes_num =[];

for (var i = 0; i < totalItems; i++) {
    names.push(prompt());
    color_size.push(prompt());
    colors.push(color_size[i].toString().split(' ')[0]);
    sizes.push(color_size[i].toString().split(' ')[1]);
    if (sizes[i] == 'P'){
        sizes_num.push(0);
    }
    else if (sizes[i] == 'M') {
        sizes_num.push(1);
    }
    else if (sizes[i] == 'G') {
        sizes_num.push(2);
    }
}
zeroing = prompt()

//1) combine the arrays:
var list = [];
for (var j = 0; j < names.length; j++)
    list.push({'name': names[j], 'color': colors[j], 'size': sizes[j], 'size_num': sizes_num[j]});
    //2) sort:
list.sort(function(a, b) {
    return ((a.name < b.name) ? -1 : ((a.name == b.name) ? 0 : 1));
});

list.sort(function(a, b) {
    return ((a.size_num < b.size_num) ? -1 : ((a.size_num == b.size_num) ? 0 : 1));
});

list.sort(function(a, b) {
    return ((a.color < b.color) ? -1 : ((a.color == b.color) ? 0 : 1));
});

//3) separate them back out:
for (var k = 0; k < list.length; k++) {
    names[k] = list[k].name;
    colors[k] = list[k].color;
    sizes[k] = list[k].size;
}

for (var i = 0; i < totalItems; i++) {
    console.log(colors[i]+' '+ sizes[i]+' '+names[i])
}