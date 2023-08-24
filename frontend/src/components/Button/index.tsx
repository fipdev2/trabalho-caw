import { AiFillGithub } from 'react-icons/ai'
import './index.css';
function Button() {
    return (
        <a className='githubButton' href='https://github.com/fipdev2/trabalho-caw' >
            <p>
                Acessar Repositório
            </p>
            <AiFillGithub />

        </a>
    );
}

export default Button;