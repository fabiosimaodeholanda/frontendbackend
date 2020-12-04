import React from 'react';
import './Lproduto.css';
import Fogaobrastemp from '../../imagens/Produtos/fogaobrastemp.jpg'
import Fogaoconsul from '../../imagens/Produtos/fogaoconsul.png'
import Geladeirabrastemp from '../../imagens/Produtos/geladeirabrastemp.jpg'
import Geladeiraconsul from '../../imagens/Produtos/geladeiraconsul.png'
import Geladeiraelectrolux from '../../imagens/Produtos/geladeiraelectrolux.png'
import Lava_loucabrastemp from '../../imagens/Produtos/lava_loucabrastemp.jpg'
import Lava_loucaelectrolux from '../../imagens/Produtos/lava_loucaelectrolux.jpg'
import Lavadorabrastemp from '../../imagens/Produtos/lavadorabrastemp.png'
import Lavadoraconsul from '../../imagens/Produtos/lavadoraconsul.jpg'
import Micro_ondasbrastemp from '../../imagens/Produtos/micro_ondasbrastemp.png'
import Micro_ondasconsul from '../../imagens/Produtos/micro_ondasconsul.png'
import Micro_ondaselectrolux from '../../imagens/Produtos/micro_ondaselectrolux.jpg'



class ListaProduto extends React.Component {
    render() {
        return(
            <div>
        <section>
<div className="categorias">
<h3 className="text-warning">Categorias</h3>
<ol>
<li /*onclick="exibir_todos()"*/ class="text-warning"> Todos (12) </li>
<li /*onclick="exibir_categoria('geladeira')"*/ className="text-warning"> Geladeiras (3) </li>
<li /*onclick="exibir_categoria('fogao')" */className="text-warning"> Fogões (2) </li>
<li /*onclick="exibir_categoria('microondas')"*/ className="text-warning"> Microondas (3) </li>
<li /*onclick="exibir_categoria('lavadoraderoupas')" */className="text-warning"> Lavadora de roupas (2) </li>
<li /*onclick="exibir_categoria('lavaloucas')" */className="text-warning"> Lava-louças (2) </li>
</ol>
</div>


        <div id="produto">

                <div className="col col-md-4 text-center">
                    <img src={Geladeirabrastemp}/>
                    <br/>
                    <p className="descricao"> Geladeira Frost Free Brastemp Side Inverse 540 litros </p>
                    <hr/>
                    <p className="preco anterior"> R$ 6.389,00 </p>
                    <p class="preco"> R$ 5.019,00 </p><br/>
                </div>


                <div className="col col-md-4 text-center">
                    <img src={Geladeiraconsul}/>
                    <br/>
                    <p className="descricao"> Geladeira Consul Frost Free Duplex Branco 340 litros </p>
                    <hr/>
                    <p className="preco anterior"> R$ 3.350,00 </p>
                    <p className="preo"> R$ 2.750,00 </p><br/>
                </div>

                <div className="col col-md-4 text-center">
                    <img src={Geladeiraelectrolux}/>
                    <br/>
                    <p className="descricao"> Geladeira Electrolux Top Free Branco 474 litros </p>
                    <hr/>
                    <p className="preco anterior"> R$ 3.350,00 </p>
                    <p className="preco"> R$ 2.900,00 </p><br/>
                </div>


                <div className="col col-md-4 text-center">
                    <img src={Fogaobrastemp}/>
                    <br/>
                    <p className="descricao"> Fogão Brastemp Branco 6 Bocas  </p>
                    <hr/>
                    <p className="preco anterior"> R$ 2.650,00 </p>
                    <p className="preco"> R$ 2.150,00 </p><br/>
                </div>

                <div className="col col-md-4 text-center">
                    <img src={Fogaoconsul}/>
                    <br/>
                    <p className="descricao"> Fogão Consul Inox 5 Bocas </p>
                    <hr/>
                    <p className="preco anterior"> R$ 1.350,00 </p>
                    <p className="preco"> R$ 1.250,00 </p><br/>
                </div>

                <div className="col col-md-4 text-center">
                    <img src={Micro_ondasbrastemp}/>
                    <br/>
                    <p className="descricao"> Micro-ondas Brastemp Inox 20 litros  </p>
                    <hr/>
                    <p className="preco anterior"> R$ 1.250,00 </p>
                    <p className="preco"> R$ 1.050,00 </p><br/>
                </div>

                <div className="col col-md-4 text-center">
                    <img src={Micro_ondasconsul}/>
                    <br/>
                    <p className="descricao"> Micro-ondas Consul Puxador na Porta 20 litros </p>
                    <hr/>
                    <p className="preco anterior"> R$ 800,00 </p>
                    <p className="preco"> R$ 600,00 </p><br/>
                </div>

                <div className="col col-md-4 text-center">
                    <img src={Micro_ondaselectrolux}/>
                    <br/>
                    <p className="descricao"> Micro-ondas Electrolux 20 litros </p>
                    <hr/>
                    <p className="preco anterior"> R$ 900,00 </p>
                    <p className="preco"> R$ 500,00 </p><br/>
                </div>

                <div className="col col-md-4 text-center">
                    <img src={Lavadorabrastemp}/>
                    <br/>
                    <p className="descricao">Lavadora de roupas Brastemp 9kg</p>
                    <hr/>
                    <p className="descricao"> R$ 2.350,00 </p>
                    <p className="preco anterior"> R$ 1.750,00 </p><br/>
                </div>

                <div className="col col-md-4 text-center">
                    <img src={Lavadoraconsul}/>
                    <br/>
                    <p className="descricao"> Lavadora de roupas Consul 9kg Branca </p>
                    <hr/>
                    <p className="preco anterior"> R$ 1.350,00 </p>
                    <p className="preco"> R$ 1.050,00 </p><br/>                          
                </div>

                <div className="col col-md-4 text-center">
                    <img src={Lava_loucabrastemp}/>
                    <br/>
                    <p className="descricao"> Lava-louças Brastemp 14 serviços Inox com Ciclo Pesado </p>
                    <hr/>
                    <p className="preco anterior"> R$ 4.350,00 </p>
                    <p className="preco"> R$ 3.950,00 </p><br/>                              
                </div>

                <div className="col col-md-4 text-center">
                    <img src={Lava_loucaelectrolux}/>
                    <br/>
                    <p className="descricao"> Lava-louças Electrolux 14 serviços Inox </p>
                    <hr/>
                    <p className="preco anterior"> R$ 6.350,00 </p>
                    <p className="preco"> R$ 5.750,00 </p><br/>                                 
                </div>

        </div>

</section>

</div>
        )
    }
}


export default ListaProduto;