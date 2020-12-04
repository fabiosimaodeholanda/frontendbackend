import react from 'react';
import Menu from '../../componentes/menu/menu'
import Rodape from '../../componentes/rodape/rodape'
import Pagamento from '../../componentes/pagamento/pagamento'
import Endereco from '../../componentes/endereco/endereco'




function Lojas(){

return(

    <div>
<Menu />

<Endereco />
<br/><br/><br/><br/>
<br/><br/><br/><br/>

<Pagamento />
<Rodape />
    </div>
)

}

export default Lojas;