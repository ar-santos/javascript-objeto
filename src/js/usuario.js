import dados from "../data/index.js";

const {dadosUsuarios, usuario} = dados

const procurarUsuario = (lista, palavra) => {
    for (let usuario of palavra){
        console.log(usuario.name)
    }
}

const pesquisar = procurarUsuario(usuario,dadosUsuarios)

export default pesquisar