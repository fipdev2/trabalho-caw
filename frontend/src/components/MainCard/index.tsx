import { useState } from "react";
import '../MainCard/index.css'
import TecnologiasCard from "../TecnologiasCard";

//icones
import ts from '../../assets/ts.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import html from '../../assets/html.png'
import sql from '../../assets/sql.png'

//fotos
import filipe from '../../assets/filipe.jpeg'

interface aluno {
    foto: string;
    nome: string;
    sobreMim: string;
    tecnologias: string[];
}

function MainCard() {
    const [aluno, setAluno] = useState<aluno>({
        foto: filipe, nome: 'Filipe',
        sobreMim: 'Sempre gostei de games, e de séries, estudo programação desde 2022, gosto de tecnologias voltadas para o front-end e inteligência artificial',
        tecnologias: [ts, js, react, html, sql]
    })


    return (
        <main>
            <div className="navBar">
                <a>Filipe</a>
                <a>Davi</a>
                <a>Matheus</a>
            </div>
            <div className="fotoAndTextWrapper">
                <img className='alunoFoto' src={aluno.foto} />
                <div>
                    <h1>Olá, eu sou {aluno.nome}</h1>
                    <p>{aluno.sobreMim}</p>
                    <div>
                        <strong>Tecnologias</strong>
                        <TecnologiasCard tecnologias={aluno.tecnologias}/>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default MainCard;