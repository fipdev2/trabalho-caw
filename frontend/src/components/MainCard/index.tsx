import { useEffect, useState } from "react";
import '../MainCard/index.css'
import TecnologiasCard from "../TecnologiasCard";
import Button from "../Button";

//icones
import ts from '../../assets/ts.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import html from '../../assets/html.png'
import sql from '../../assets/sql.png'
import bootstrap from '../../assets/bootstrap.png'
import sass from '../../assets/sass.png'
import java from '../../assets/java.png'
import c from '../../assets/c.png'
import blockly from '../../assets/blockly.png'
import angular from '../../assets/angular.png'


//fotos
import filipe from '../../assets/filipe.jpeg'
import matheus from '../../assets/matheus.jpg'
import davi from '../../assets/davi.jpg'

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
    const [select, setSelect] = useState<'Filipe' | 'Davi' | 'Matheus'>('Filipe');

    const handleStudent = () => {
        if (select === 'Filipe') {
            setAluno({
                foto: filipe, nome: 'Filipe',
                sobreMim: 'Sempre gostei de games, e de séries, estudo programação desde 2022, gosto de tecnologias voltadas para o front-end e inteligência artificial',
                tecnologias: [ts, js, react, html, sql]
            })
        }
        else if (select === 'Davi') {
            setAluno({
                foto: davi, nome: 'Davi',
                sobreMim: 'One Piece 🏴‍☠️, Academia 💪, Códigos 🕵️ e Música 🎵',
                tecnologias: [java, angular, react, c, blockly]
            })
        }
        else {
            setAluno({
                foto: matheus, nome: 'Matheus',
                sobreMim: 'Interessado na carreira de front-end dev e minhas principais competências são JavaScript, Bootstrap e React',
                tecnologias: [js, react, html, bootstrap, sass]
            })
        }
    }


    useEffect(() => {
        handleStudent();
    }, [aluno])

    return (

        <main>
            <div className="navBar">

                <a
                    className={select === 'Filipe' ? 'botaoAtivo' : ''}
                    onClick={() => setSelect('Filipe')}
                >
                    Filipe
                </a>
                <a
                    className={select === 'Davi' ? 'botaoAtivo' : ''}
                    onClick={() => setSelect('Davi')}
                >
                    Davi
                </a>
                <a
                    className={select === 'Matheus' ? 'botaoAtivo' : ''}
                    onClick={() => setSelect('Matheus')}
                >Matheus
                </a>
            </div>
            <div className="fotoAndTextWrapper">
                <div className="fotoWrapper">
                    <img className='alunoFoto' src={aluno.foto} />

                </div>
                <div className="rightContent">
                    <h1>Olá, eu sou {aluno.nome}</h1>
                    <p>{aluno.sobreMim}</p>
                    <div>
                        <h2 className="tecnologias">Tecnologias</h2>
                        <TecnologiasCard tecnologias={aluno.tecnologias} />
                    </div>
                    <Button />
                </div>
            </div>

        </main >


    );
}

export default MainCard;