
import './index.css'
function TecnologiasCard({ tecnologias }: any) {
    return (
        <div className="tecnologiasWrapper">
            {tecnologias.map((tecnologia: string) => (
                <img src={tecnologia}/>
            )    
            )}
        </div>
    );
}

export default TecnologiasCard;