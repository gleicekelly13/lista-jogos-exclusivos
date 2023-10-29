import { jogosExclusivos } from "../dados";

export const retornarJogos = () => {
    return jogosExclusivos;
};

export const buscarJogo = (textoDigitado) => {
    return jogosExclusivos.filter (
        (jogo) => 
        jogo.nome.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase()) ||
        jogo.plataforma.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase())
    );
}

export const filtrarJogo = (plataforma) => {
    return jogosExclusivos.filter((jogo) => jogo.plataforma === plataforma);
}