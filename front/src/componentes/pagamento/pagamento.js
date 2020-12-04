import React from 'react';
import './pagamento.css';
import Fp from '../../imagens/formas-pagamento.png'


class Pagamento extends React.Component {
    render() {
        return(
            <div>
        <p className="container-fluid text-danger"><b>Formas de pagamento:</b></p>
    <img className="img-fluid img1" src={Fp}  alt="formas de pagamento"/>
    <br/><br/>
            </div>
        )
    }
}


export default Pagamento