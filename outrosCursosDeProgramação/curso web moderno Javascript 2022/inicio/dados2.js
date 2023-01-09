//Sentença de código passos necessários para completar o algoritimo.


let preco = 19.90
let desconto = 0.4

console.log(19.9 * 0.6)

let precoComDesonto = preco * (1 - desconto)
console.log(precoComDesonto)

let nome = 'Caderno'// String(texto) -> sequencia de simbolos
let categoria = 'papelaria'
console.log('produto: ' + nome
  + ', Categoria: ' + categoria
  + ', Preço; ' + preco
  + ', Desconto: ' + desconto

)

/* 

------------------------------ Algoritimo -----------------------------
são passos  para resolver um problema. Em matemática e ciência da computação, um algoritmo é uma 
sequência finita de ações executáveis que visam obter uma solução para um determinado tipo de problema. Segundo 
Dasgupta, Papadimitriou e Vazirani; "Algoritmos são procedimentos precisos, não ambíguos, padronizados, eficientes 
e corretos.".

------------------------------ variavel -----------------------------
cria um espaço de memoria no qual voce pode atribuir um valor "var" define que 
estamos colocando uma váriavel, o que vem depois do = é o identificador da variavel var ou let (definidor de variavel) nome (identificador) = 'caneta'; //string

--------------------- O que é um código de programação?-----------------------------
Resultado de imagem Resumindo, é o conjunto de instruções e declarações escritas por um programador usando uma linguagem de programação de computad

- ------------------------O código é organizado -----------------------------
em pastas, arquivos são orgazinados em extensões .js, .html etc

------------------------------Declaração-----------------------------
Em linguagens de programação, uma declaração especifica o identificador, Tipo, e outros aspectos dos elementos de linguagem, tais como variáveis e funções. Ele é usado para anunciar a existência do elemento para o compilador, o que é importante em muitas línguas (como C) que necessitam de variáveis declaradas, antes de usá-las.[1]
ato de declarar consiste em 2 passos o nome que você dara a sua variavel e associar esse nome a um tipo de dado. 

------------------------------Uma sentença -----------------------------
corresponde a um passo do algoritmo ou a uma declaração. Se o código fonte descreve um 
algoritmo, então sentenças correspondem a passos do algoritmo, se não forem declarações
Ex: console.log('passo #03') //  sentença de codigo 

------------------------------ Bloco-----------------------------
Dentro do contexto de programação, os blocos são a unidade fundamental e podem representar comandos, condições, objetos e muitas outras variáveis que fazem parte da construção de um programa. Conjunto de sentenças.
ex: {
  console.log('passo #03') // sentença de codigo 
  console.log('passo #04')
  console.log('passo #05')
}
// o bloco de codigo é definido pelo que tem dentro das chaves { }
// bloco par de chaves
// o bloco externo deve envolver o bloco interno {{{}}}

-----------------Dados e informação-----------------------------
é tudo que pode ser mensurado, coletado e analisado. Em informática consideramos DADOS como valores binários que podem ser números, cadeias de caracteres ou imagens sem interpretação. Estes dados foram obtidos da realidade através de algum processo de captura automática ou de codificação realizada por pessoas.

Enquanto os dados podem ser meros números, fatos não processados, a INFORMAÇAO é o que dá sentido ao que foi analisado. Os dados não são específicos, ao contrário da informação, que é um significado detalhado a partir do trabalho com elementos mais brutos.

---------------Tipos de dados-----------------------------------
https://www.dimap.ufrn.br/~richard/pubs/dim0320/readings/aula03.pdf

TIPOS NUMERICOS
Inteiro: 
define variáveis numéricas do tipo inteiro, ou seja, sem casas decimais. ex: 1234567890

Real: 
define variáveis numéricas do tipo real, ou seja, com casas decimais: Ex: -40.9; 9.2

TIPOS CARACTERES
Caractere contem apenas letras, não pode ter números nem caracteres especiais. ex: "Daniel" 'casa'etc

TIPO ALFANUMERICO
constituido por sequencia de caracteres constituidos por letras, numeros ou simbolos especiais, em inglês é conhecido por STRING
contem caracteres define variáveis do tipo string, ou seja, cadeia de caracteres, devem ser usads dentro de aspas. Ex:"marcela" "10+3[ ] 9 0" ex: let nome = 'Caderno'// String(texto) -> sequencia de simbolos.

TIPO LOGICO
define variáveis do tipo booleano, ou seja, com valor VERDADEIRO ou FALSO. podem vir tambem como SIM ou NÃO, 1 ou 0, TRUE ou FALSE.

------------------------------ Concatenar -----------------------------
é uma palavra chique da programação que significa "colocar junto".O simbolo '+' serve para concatenar Concatenação é um termo usado em computação para designar  a operação de unir o conteúdo de duas strings. Por exemplo, considerando as strings "casa" e "mento" a concatenação da primeira com a segunda gera a string "casamento". Diversas linguagens de programação fornecem operadores binários para a concatenação. 
Ex:console.log('produto: ' + nome + ', ' + categoria)


-----------------------------
*/