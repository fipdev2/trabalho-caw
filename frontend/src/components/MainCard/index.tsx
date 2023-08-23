import { useState } from "react";
import FilipeImg from '../../assets/euhehe.jpeg';

interface aluno {
    foto:string;
    nome: string;
    sobreMim: string;
    tecnologias: string[];
}

function MainCard() {
    const [aluno, setAluno] = useState<aluno>({
        foto: FilipeImg,
        nome: 'Filipe',
        sobreMim: 'Sempre gostei de games, e de séries, estudo programação desde 2022, gosto de tecnologias voltadas para o front-end e inteligência artificial',
        tecnologias: ['ts', 'js', 'react', 'html', 'sql']
    })


    return (
        <main className="mainCard">
            <div>
                <a>Filipe</a>
                <a>Davi</a>
                <a>Matheus</a>
            </div>
            <div>
                <img className='alunoFoto' src={aluno.foto}/>
                <div>
                    <h1>Olá, eu sou {aluno.nome}</h1>
                    <p>{aluno.sobreMim}</p>
                    <div>
                        <strong>Tecnologias</strong>

                    </div>
                </div>
            </div>

        </main>
    );
}

export default MainCard;