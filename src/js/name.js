import dados from "../data/index.js";

const {dadosUsuarios, usuario} = dados

const procurarUsuario = (lista, palavra) => {
    for (let usuario of palavra){
        console.log('O nome do usuario e ' + lista.name)
    }
}

const pesquisar = procurarUsuario(usuario,dadosUsuarios)

export default pesquisar