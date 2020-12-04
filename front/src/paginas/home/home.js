import react from 'react';
import Menu from '../../componentes/menu/menu'
import Rodape from '../../componentes/rodape/rodape'
import Pagamento from '../../componentes/pagamento/pagamento'





function Home(){

return(

    <div>
<Menu />
<main>
<h1><font face="Arial" className="text-primary bg-dark">Seja bem vindo</font></h1>
<p className="text-secondary">Aqui em nossa loja, programadores tem desconto nos produtos para sua casa!</p>
</main>
<br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/>
<Pagamento />
<Rodape />
    </div>
)

}

export default Home;