/*
Desafio
Nas férias de Dezembro, várias escolas se organizam e levam seus alunos para um acampamento de férias por uma semana. Nestes acampamentos os alunos são divididos em cabanas coletivos por gênero e idade, sempre com um adulto que, além de dormir com o grupo no cabana, também são responsáveis por criar e executar várias atividades, como por exemplo jogos, excursões, Gincanas Noturnas, etc.
No primeiro dia foi realizada uma gincana em que a atividade constituia em agrupar os alunos em um círculo (organizado no sentido anti-horário) do qual seriam retiradas uma a uma até que sobrasse apenas um aluno, que seria o vencedor.
No momento em que entra no círculo, cada aluno recebe uma pequena ficha que contém um valor de 1 a 500. Depois que o círculo é formado, conta-se, iniciando no aluno que está ao lado da primeira que entrou no círculo, o número correspondente à ficha que o primeiro detém. O aluno onde o número contado cair, deve ser retirado do grupo, e a contagem inicia novamente segundo a ficha do aluno que acabou de ser eliminado. Para ficar mais interessante, quando o valor que consta na ficha é par, a contagem é feita no sentido horário e quando o valor que consta na ficha é ímpar, a contagem é feita no sentido anti-horário.
Desenvolva um programa para que no próximo evento o responsável pela brincadeira saiba previamente qual criança irá ser a vencedora de cada grupo, com base nas informações fornecidas.

Entrada
A entrada contém vários casos de teste. A primeira linha de cada caso de teste contém um inteiro N (1 ≤ N ≤ 100), indicando a quantidade de alunos que farão parte de cada círculo. Em seguida, as N linhas de cada caso de teste conterão duas informações, o Nome e o Valor (1 ≤ Valor ≤ 500) que consta na ficha de cada aluno, separados por um espaço, na ordem de entrada na formação do círculo inicial.
OBS: O Nome de cada aluno não deverá ultrapassar 30 caracteres e contém apenas letras maiúsculas e minúsculas, sem acentos, e o caractere “_”. O final da entrada é indicado pelo número zero.

Saída
Para cada caso de teste, deve-se apresentar a mensagem Vencedor(a): xxxxxx, com um espaço após o sinal ":" indicando qual é o aluno do grupo que venceu a brincadeira.*/


var listaAlunos = [];
var Aluno_valorFicha = [];
var N_Alunos = [];
var valorFicha = [];
var valorAtualFicha = [];
var indiceAtual = [];
var indiceAlunoEliminado = [];
N_Alunos = prompt();
while (N_Alunos > 0) {
    for (var i = 0; i < N_Alunos; i++) {
        for (var i = 0; i < N_Alunos; i++) {
                Aluno_valorFicha.push(prompt());
                listaAlunos.push(Aluno_valorFicha[i].toString().split(' ')[0]);
                valorFicha.push(parseInt( Aluno_valorFicha[i].toString().split(' ')[1]));
        }
    }
    indiceAtual = 0;
    indiceAlunoEliminado = 0;
    valorAtualFicha = valorFicha[indiceAtual];
    for (var i = 0; i < N_Alunos - 1; i++) {
            if (valorAtualFicha % 2 === 0) {
                indiceAlunoEliminado = (listaAlunos.length - (valorAtualFicha % listaAlunos.length) + indiceAtual) %  listaAlunos.length;
            }
            else if (valorAtualFicha % 2 !== 0) {
                indiceAlunoEliminado = (valorAtualFicha % listaAlunos.length + indiceAtual) % listaAlunos.length;
            }
            valorAtualFicha = valorFicha[indiceAlunoEliminado];
            listaAlunos.splice(indiceAlunoEliminado, 1);
            valorFicha.splice(indiceAlunoEliminado, 1);
            indiceAtual = (valorAtualFicha % 2 === 0) ? ((indiceAlunoEliminado <= listaAlunos.length - 1) ? indiceAlunoEliminado : 0) : ((indiceAlunoEliminado === 0) ? ( /* size */listaAlunos.length - 1) : (indiceAlunoEliminado - 1));
    }
    console.log("Vencedor(a): " + listaAlunos[0]);
    Aluno_valorFicha = [];
    listaAlunos =[];
    valorFicha = [];
    N_Alunos = parseInt(prompt());
}
