import React from 'react';

export default function LoginView(){
    return(
        <div className="bg-forms">
            <div class="carta-form">
                <h1>Inicio de Sesión</h1>
                <form>
                    <div className="row">
                        <div className="col-12 form-group">
                            <input type="text" className="form-control" placeholder="Correo"/>
                        </div>
                        <div className="col-12 form-group">
                            <input type="text" className="form-control" placeholder="DNI"/>
                        </div>
                        <input type="submit" className="btn btn-primary" value="Iniciar Sesión"/>
                    </div>
                </form>
            </div>
        </div>
    )
}