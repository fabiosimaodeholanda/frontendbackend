import React from 'react';
import './endereco.css';



class Endereco extends React.Component {
    render() {
        return(
<div>
                
<div className="text-primary bg-dark">
        <h2>Nossas Lojas</h2>
</div>
<div>   
        <hr/>
        <table border="0" width="100%" cellpadding="20" className="text-info">
        <tr>
        <td width="33%">
        <h3>Rio de Janeiro</h3>
        <p>Avenida Presidente Vargas, 5000</p>
        <p> 10º andar</p>
        <p>Centro</p>
        <p>(21) 2121-5454</p>
        </td>

        <td width="33%" className="text-info">
        <h3>São Paulo</h3>
        <p>Avenida Paulista, 985</p>
        <p> 3º andar</p>
        <p>Jardins</p>
        <p>(11) 5578-5454</p>
        </td>

        <td width="33%" className="text-info">
        <h3>Santa Catarina</h3>
        <p>Rua Major &Aacute;vila, 370</p>
        <p>2º andar</p>
        <p>Vila Mariana</p>
        <p>(47) 8787-3232</p>
        </td>

        </tr>
        </table>
</div>
        
</div>
        )
    }
}


export default Endereco;