import react from 'react';
import Menu from '../../componentes/menu/menu'
import Rodape from '../../componentes/rodape/rodape'
import Contato from '../../componentes/contato/contato'
import Pagamento from '../../componentes/pagamento/pagamento'
import Formulario from '../../componentes/formulario/formulario'




function Contatos(){

return(

    <div>
<Menu />


<h2  className="text-primary bg-dark">Contato</h2>
<br/>
<Contato />
<Formulario />
<br/><br/><br/><br/><br/>

<Pagamento />
<Rodape />
    </div>

)

}

export default Contatos;