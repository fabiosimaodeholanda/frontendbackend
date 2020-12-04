import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './paginas/home/home';
import Produtos from './paginas/produtos/produtos';
import Lojas from './paginas/lojas/lojas';
import Contatos from './paginas/contatos/contatos';




export default function Rota(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/produtos"  component={Produtos}/>
                <Route path="/lojas"  component={Lojas}/>
                <Route path="/contatos" component={Contatos}/>


                
            </Switch>
        </BrowserRouter>
    )
}