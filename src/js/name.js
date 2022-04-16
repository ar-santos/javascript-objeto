
const procurarUsuario = (lista, nomeDoUsuario) => {
    for (let usuario of lista){
        if(nomeDoUsuario.includes(usuario.name)){
            console.log('O nome do usuario e ' + usuario.name)
        }

    }
}

const procurarEnderecoUsuario = (lista, nomeDoUsuario) => {
    for (let usuario of lista){
        if(nomeDoUsuario == usuario.name){
            console.log(usuario.address)
        } 
    }
}

const buscarUsuario = (lista, nomeDoUsuario) => {
    for (let usuario of lista){
        if(nomeDoUsuario == usuario.name){
            console.log(usuario)
        } 
    }
}

const funcoes = {
    procurarUsuario,
    procurarEnderecoUsuario,
    buscarUsuario
}


// Criar uma função para pesquisar um usuário na lista de usuários 

// Criar uma função para pesquisar o nome de usuário e imprimir no console

// Criar uma função para pegar somente o dendereço do usuário


export default funcoes