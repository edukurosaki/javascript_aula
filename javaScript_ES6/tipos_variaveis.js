/*
Variáveis em Javascript são uma forma para se salvar 
dados que possam ser acessados e/ou manipulados posteriormente,
independente do tipo desses dados, strings, números, booleanos,
arrays, objetos ou funções
*/

/**
 * Para utilizar aspas duplas dentro de uma string 
 * é necessário utilizar aspas simples para envolver 
 * os valores dessa string
 */ 
var mensagem = 'Texto com "aspas" duplas dentro de aspas simples.';

/**
 * Para utilizar aspas simples dentro de uma string 
 * é necessário utilizar aspas duplas para envolver 
 * os valores dessa string
 */ 
var mensagem = "Texto com 'aspas' duplas dentro de aspas simples.";

// Um valor qualquer
var mensagem = "Qualquer valor!";

/** 
 * Pega o caractere na posição 3 
 * iniciando do 0.
 */
/*
alert( mensagem[3] );

*/
 
/** 
 *
 * 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
 * Q  u  a  l  q  u  e  r     v  a  l  o  r  !
 *
 */

 /*
 * Um objeto é uma coleção de dados e/ou funcionalidades
 * relacionadas (que geralmente consistem em diversas variáveis
 * e funções — que são chamadas de propriedades e métodos quando
 * estão dentro de objetos).
 */

 //Exemplo 
 let user = {
     name: 'Eduardo'
 }

 //Alterar a propriedade do objeto
user.name = 'Outro nome'
user['name'] = 'Outro nome 2'
console.log(user.name);

const prop = 'name'
user[prop] = 'Outro nome 3'
console.log(user)

//Criando uma propriedade
user.lastName = 'Alves Francisco'
console.log(user);
//deletando uma propriedade
delete user.name;
console.log(user);
