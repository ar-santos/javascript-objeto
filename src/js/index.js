import dados from "../data/index.js";
import funcoes from "./name.js";

const {dadosUsuarios, usuario} = dados
//const {dadosUsuarios, usuario:{address}} = dados

funcoes.procurarUsuario(dadosUsuarios,"Ervin Howell")
funcoes.procurarEnderecoUsuario(dadosUsuarios, "Ervin Howell")
funcoes.buscarUsuario(dadosUsuarios, "Ervin Howell")



// Criar uma função para pesquisar um usuário na lista de usuários 

// Criar uma função para pesquisar o nome de usuário e imprimir no console

// Criar uma função para pegar somente o dendereço do usuário