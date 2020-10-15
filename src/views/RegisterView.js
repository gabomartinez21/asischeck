import React from 'react';

export default function RegisterView(){
    return(
        <div className="bg-forms">
            <div class="carta-form">
                <h1>Registrate</h1>
                <form>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <input type="text" className="form-control" placeholder="Nombres"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <input type="text" className="form-control" placeholder="DNI"/>
                        </div>
                        <div className="col-12 form-group">
                            <input type="email" className="form-control" placeholder="Correo"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <select className="form-control">
                                <option value="0">Horario</option>
                                <option value="1">Horario Mañana</option>
                                <option value="2">Horario Mediodía</option>
                                <option value="3">Horario Tarde</option>
                                <option value="4">Horario Noche</option>
                            </select>
                        </div>
                        <div className="col-md-6 form-group">
                            <select className="form-control">
                                <option value="0">Departamento</option>
                                <option value="1">Administracion</option>
                                <option value="2">Soporte</option>
                                <option value="3">Marketing</option>
                                <option value="4">Comedor</option>
                            </select>
                        </div>
                        <input type="submit" className="btn btn-primary" value="Registrar"/>
                    </div>
                </form>
            </div>

        </div>
    )
}