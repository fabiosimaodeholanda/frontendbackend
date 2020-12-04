import react from 'react';
import Menu from '../../componentes/menu/menu'
import Rodape from '../../componentes/rodape/rodape'
import Pagamento from '../../componentes/pagamento/pagamento'
import ListaProduto from '../../componentes/produto/Lproduto'




function Produtos(){

return(

    <div>
<Menu />
<h2 className="text-primary bg-dark">Produtos</h2>
<ListaProduto />
<Pagamento />
<Rodape />
    </div>
)

}

export default Produtos;