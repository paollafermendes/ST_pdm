/*DESENVOLVIMENTO COM JAVASCRIPT*/
1.1 Declaração de Variáveis

Em Javascript, há duas palavras reservadas para a declaração de 
variáveis: let e var.

A palavra const é usada para a declaração de constantes. //coisas que não variam
/*******************************************************************/
/*_____DECLARANDO CONSTANTES___________________*/
const nome = "Jose";
const idade = 27; 

/*
const não pode fazer retribuição
EXEMPLO: 
nome = "Maria" 
*/

/*aspas simples e duplas tem o mesmo efeito */
const sexo = "M";
const endereco = 'Rua K, 12'
/*******************************************************************/
//____DECLARANDO VARIÁVEIS___________________
//let: variável local, com escopo de bloco
let a = 2;
let b = "abc"

//var: seu escopo é a função em que foi declarada ou global
var c = 2 + 3;
var d = "abcd"
/*******************************************************************/
/*____DECLARAR STRINGS E DELIMITAR COM CRASE___________________*/
let endereco = `Rua K, 12`

/*******************************************************************/
/*_____MELHOR FORMA DE DECLARAR___________________________*/
var linguagem = "Javascript"
console.log ("Aprendendo, " + linguagem)

linguagem = "Java"
console.log ("Aprendendo, " + linguagem)

/*_____EXEMPLO DE DECLARAÇÃO______________________________*/
var idade = 18

console.log ("Oi. ", + nome)//variavel sem atribuição = lixo de memória (undefined)
if (idade >= 18){
    //içamento host
    var nome = "João" 
    //console.log ("Parabens, " + nome + "você pode dirigir")
    //MELHOR FORMA DE DECLARAR
    //printf ("Parabens, %s", nome);
    console.log (`Parabens, ${nome}. Você pode dirigir. `)
}
console.log ("Até mais, " + nome )

//_______TIPOS_____________________________________
//o o tipo no javascript não é estático
/*PRIMITIVOS
=> boolean
=> null
=> number
=> string
=> undefined

OBJETOS
=> JSON
=> Array
=> Classes Wrapper (String, Number, Boolean)
=> Date
=> Math
=> Funções
*/

//essas formas de declarações estão erradas
int a = 2; 
floar f = 3.5; 
var = 2 
a = "abc"
var b = "1"
var c = a - b
console.log (c)


//____COERÇÃO___________________________________
// É quando dois primitivos de tipos diferentes estão envolvidos em uma expressão
// e um deles pode ter seu tipo alterado para que a expressão faça sentido.
const n1 = 2; //number
const n2 = '3'; //string
//coerção implícita de n1, concatenação acontece 
//resultado = 21(?)

//coeração explícita, soma acontece
const n3 = n1 + n2;
console.log(n3);

const n4 = n1 + Number (n2)
console.log(n4)
//resultado dos dois console = 5


/*_____ FUNCIONAMENTO DO OPERADOR == __________________________
console.log(1 == 1)             //true (comparação por igualdade)
console.log (1 == "1")          //true (coerção implicita de um dos dois) !!!!!!NÃO USAR ESSE == !!!!! 
console.log (1 === 1)           //true 
console.log (1 === "1")         //false (não há coersão; é comparado os tipos de ambas as variáveis)
console.log (true == 1)         //true 
console.log (1 == [1])          //true
console.log (null == null)      //true
console.log (null == undefined) //true (false == false)
console.log([] == false)        //true 
console.log ([] == [])          //false 
const a = []
const b = a
console.log (a == b)
console.log(nome !== " ")
*/


//____DECLARAÇÃO DE VETORES________________________________
v1 = [];
//podemos acessar qualquer posição, começando de zero
v1[0] = 3.4; //variavel de referência (ponteiro)
v1[10] = 2; 
v1[2] = true
//aqui, v1 tem comprimento igual a 11
console.log(v1.length)
//inicializando na declaração
//v2 = [2, "abc", true]
//console.log(v2)
//iterando 
for (let i = 0; i < v1.length; i++){
    console.log(v1[i])
}



/*
const numeros = [1, 2]
console.log(numeros.length)
numeros [4] = 2 
console.log(numeros.length)
//por const não vale fazer isso -> numeros = [1, 2]
//vetores são imutaveis então numeros[100] = 2 ...
*/


//ENCONTRANDO NOMES


//declaração do vetor
const nomes = [`Ana Maria`, `Antonio`, `Rodrigo`, `Alex`, `Cristina`];

//filtro 
const apenasComA = nomes.filter((n) => n.startsWith("A"));
console.log(apenasComA);

const res = nomes.map((nome) => nome.charAt(0));
console.log(res);

const todosComecamComA = nomes.every((n) = n.startsWith("A"));
console.log(todosComecamComA);

const valores = [1, 2, 3, 4];
const soma = valores.reduce((ac, v) => ac + v);
console.log(soma);

//____FUNÇÕES___________________________________________________________
//O JavaScript possui formas diferentes para se criar funções: 
/*
-> blocos de código com nome
-> ou que podem ser executado em algum momento*/

//function
function hello(){
    console.log('Oi')
}
hello();


function hello(nome){
    console.log('Hello, ' + nome)
}
hello('Pedro') //passando o parametro para a função

//tentativa 
let Idade = '25';
function mostrarIdade(Idade){
    console.log('Sua idade é:' + Idade)
}


//outro exemplo
function soma(a, b){
    return a + b;
}
const resultado = soma (2, 3)
console.log(resultado)


//FUNÇÕES ANONIMAS
//Uma vez criadas podem ser atribuídas a variáveis ou constantes 
const dobro = function(n){ //variável dobro recebe a função que calcula e retorna o parametro n vezes 2
    return n * 2;
}
const result = dobro(4);// chamada da função por meio de uma variavel
console.log(result);

//outro exemplo
const triplo = function(n = 5){
    return n * 3;
}
console.log(triplo()); //resultado = 5
console.log(triplo(10));

//_____ARROW FUNCTION__________________________________________
/*arrow function
() => ()
function filter(funcao){
    funcao()
}*/

/*Quando escrevemos uma arrow function, especificamos a lista de parametros
e o seu corpo. O símbolo => fica entre eles. Uma arrow function não possui
nome e pode ser armazenada em constantes ou variáveis.

- quando a lista de parâmetros possui um único argumento, os parenteses podem
ser omitidos

- quando o corpo possui uma única instrução, as chaves podem ser omitidas

- quando o corpo possui uma única instrução que produz um valor a ser devolvido,
a instrução return é opcional*/

//EXEMPLO 01
const Hello = () => console.log("Hello!");
hello(); //terminal = Hello!

//EXEMPLO 02
const Dobro = (valor) => valor * 2;
console.log(Dobro(10)); //terminal = 100

//EXEMPLO 03
const Triplo = (valor) => {
    return valor *3;
};
console.log(Triplo(10));

//EXEMPLO 04
const ehPar = (n) => {
    n % 2 == 0;
};
console.log(ehPar(10));

____________________________________________________________________

1.7 //CLOSURES______________________________________________________

/* Uma função pode ser atribuída a uma variável */
let UmaFuncao = function(){
    console.log("Fui armazenada em uma variável");
}
// e pode ser chamada assim
UmaFuncao()

/*__________    __________    __________    __________    __________*/

/* f recebe uma função como parâmetro e, por isso é uma função de alta ordem.
Para devolver uma função, g também é de alta ordem. */
function f (funcao){
    //chamando a função
    funcao()
}

function g (){
    function outraFuncao(){
        console.log("Fui criada por g");
    }
    return outraFuncao;
}

// f pode ser chamada assim
const gResult = g()
gResult ();


//EXEMPLO 01
function saudacoesFactory(saudacao, nome){
    return function(){
        console.log (saudacao + ',' + nome);
    }
}

let olaJoao = saudacoesFactory('Ola', 'Joao');
olaJoao()
let olaJoao = saudacoesFactory('Tchau', 'Joao');
tchauJoao()

//EXEMPLO 02
function eAgora(){
    let cont = 1;
    function f1(){
        console.log(cont);
    }
    const ++
    function f2(){
        console.log(cont);
    }
    //JSON contendo as duas funções
    return {f1, f2}
}

let eAgoraResult = eAgora();

/*Neste momento, a função eAgora já execuou por completo e a variável cont já
foi incrementada. Seu valor final é mantido e, assim, ambas f1 e f2 exibirão 2 */
eAgoraResult.f1();
eAgoraResult.f2();
____________________________________________________________________

CAPÍTULO [02]
JSON - JAVASCRIT OBJECT NOTATION

2.1 //INTUIÇÃO______________________________________________________
/*É um formato de representação de dados independente da tecnologia. A
ideia é representar dados como coleções de pares chave/valor.       */

01 //EXEMPLO | Uma pessoa se chama João e tem 17 anos.

let pessoa = {
    nome: "João",
    idade: 17.
}

// o acesso a propriedades pode ser feito por um ponto
console.log("Me chamo " + pessoa.nome);
//e com [] também
console.log("Tenho " + pessoa["idade"] + "anos");

/*__________    __________    __________    __________    __________*/
02 //EXEMPLO | Uma pessoa se Maria, tem 21 anos e mora na rua B, n 121.

let pessoaComEndereco = {
    nome: "Maria",
    idade: 21,
    endereco:{
        logradouro: "Rua B",
        numero: 121,
    },
};
console.log(
    `Sou ${pessoaComEndereco.nome}, 
    tenho ${pessoaComEndereco.idade} anos 
    e moro na rua ${pessoaComEndereco.endereco["logradouro"]}
    numero ${pessoaComEndereco["endereco"]["numero"]}`
)

/*__________    __________    __________    __________    __________*/
03 /*EXEMPLO | Uma concessionária tem CNPJ e endereco. Ela possui alguns carros
em estoque. Cada um  deles tem marca, modelo e ano de fabricação.*/

let concessionaria = {
    cnpj: "00011122210001-45",
    endereco:{
        logradouro: "Rua A",
        numero: 10,
        bairro "Vila J",
    },
    veiculos: [{
        marca: "Ford",
        modelo: "Ecosport",
        anoDeFabricacao: 2018,
    },
    {
        marca: "Chevrolet",
        modelo: "Onix",
        anoDeFabricacao: 2020,
    },
    {
        marca: "Volkswagen",
        modelo: "Nivus",
        anoDeFabricacao: 2020,
    },
    ],
};
for (let  veiculo of concessionaria.veiculos){
    console.log(`Marca: ${veiculo.marca}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Ano de Fabricacao: ${veiculo.anoDeFabricacao}`);
}

/*__________    __________    __________    __________    __________*/
04 /*EXEMPLO | Uma calculadora realiza as operações de soma e subtração.*/

let calculadora = {
    //pode ser arrow function
    soma: (a, b) => a + b,
    // e funcção comum
    subtracao: function (a, b) {
        return a - b;
    },
}
console.log(`2 + 3 = ${calculadora.soma(2, 3)}`);
console.log(`2 - 3 = ${calculadora.subtracao(2, 3)}`);