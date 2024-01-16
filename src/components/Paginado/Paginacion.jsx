import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Paginacion.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Paginacion({ prev, next, retroceder, adelantar }) {

    const handleRetroceder = () => {
        retroceder()
    };

    const handleAdelantar = () => {
        adelantar()
    };
    return (
        <div>
            <nav>
                <ul className="nav-button-container">
                    {prev ?
                        (<li>< button onClick={handleRetroceder} className="btn_pagination">< FontAwesomeIcon icon={faArrowLeft} /></button></li>)
                        : null}




                    {next ?
                        (<li><button onClick={handleAdelantar}  className="btn_pagination"> <FontAwesomeIcon icon={faArrowRight} /></button></li>)
                        : null}
                </ul>
            </nav>
        </div>
    )
}

export default Paginacion;