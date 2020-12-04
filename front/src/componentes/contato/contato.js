import React from 'react';
import './contato.css';
import Whatsap from '../../imagens/zap.png'
import Email from '../../imagens/e-mail.png'




class Contato extends React.Component {
    render() {
        return(
            <div>
       <table className='navbar'>
<tr>
<td>
<img src={Email} width="40px"/>
<p  class="text-warning">contato@fullstackeletro.com</p>
</td>

<td>
<img src={Whatsap} width="40px"/>
<p  class="text-success">(11) 99999-9999</p>
</td>
</tr>

</table>
            </div>
        )
    }
};


export default Contato