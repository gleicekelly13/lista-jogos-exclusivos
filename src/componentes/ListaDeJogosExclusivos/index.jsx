import './style.css';
import ItemJogos from '../ItemJogos';
import { jogosExclusivos } from '../../dados';
import { useState } from 'react';

const ListaJogosExclusivos = () => {

    const [listaJogos, setListaJogos] = useState(jogosExclusivos);

    return (
        <div className='container-jogos'>
            {listaJogos.map((jogo) => (
                <ItemJogos
                    key={jogo.id}
                    nome={jogo.nome}
                    plataforma={jogo.plataforma}
                />
            ))}
        </div>
    );
}

export default ListaJogosExclusivos;