import React from 'react';
import './menu.css';
import {Link} from 'react-router-dom'
import Logofull from '../../imagens/logo.png'


class Menu extends React.Component {
    render() {
        return(
            <div>
        <nav className="container-fluid bg-danger navbar"> {/*navbar para separar intens menu*/}
        <Link to='/'><img className='img-fluid' src={Logofull} alt="Full Stack Eletro"/></Link>
        <Link to='/produtos' className="text-white">Nossos produtos</Link>
        <Link to='/lojas' className="text-white">Nossas lojas</Link>
        <Link to='/contatos' className="text-white">Fale conosco</Link>
        </nav>
            </div>
        )
    }
}


export default Menu;