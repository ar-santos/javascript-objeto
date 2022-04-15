import dados from "../data/index.js";

const {dadosUsuarios, usuario} = dados

const procurarUsuario = (lista, palavra) => {
    for (let usuario of lista){
        console.log('O nome do usuario e ' + usuario.name)
    }
}

const pesquisar = procurarUsuario(dadosUsuarios,usuario)

export default pesquisar