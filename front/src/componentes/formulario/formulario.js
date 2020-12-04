export default function Formulario() {


return(

    <div className="container">


<form>
<h4 className="text-secondary">Nome:</h4>
<input type="text" class="form-control border border-primary"/>
<h4 className="text-secondary">Mensagem:</h4>
<textarea  className="form-control border border-primary"></textarea><br/>
<input type="submit" className="btn btn-primary"  value="Enviar"/>
</form>

    </div>
)



};