import React, {useState, useContext} from 'react';
import { ingresar } from "../services/authServices";
import {AuthContext} from "../context/authContext";
import {useHistory} from 'react-router-dom';


export default function LoginView(){

    const [correo, setCorreo] = useState("");
    const [dni, setDni] = useState("");
    const history = useHistory();

    const {user, setAuthUser} = useContext(AuthContext);

    const loguear = (e) => {
        e.preventDefault();
        ingresar(correo, dni)
        .then(rpta => {
        setAuthUser(rpta.uid);
        return history.push('/')
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="bg-forms">
            <div class="carta-form">
                <h1>Inicio de Sesión</h1>
                <form onSubmit={(e)=>loguear(e)}>
                    <div className="row">
                        <div className="col-12 form-group">
                            <input type="text" className="form-control" placeholder="Correo"
                            value={correo}
                            onChange={(e) => {
                              setCorreo(e.target.value);
                            }}/>
                        </div>
                        <div className="col-12 form-group">
                            <input type="text" className="form-control" placeholder="DNI"
                            value={dni}
                            onChange={(e) => {
                              setDni(e.target.value);
                            }}/>
                        </div>
                        <input type="submit" className="btn btn-primary" value="Iniciar Sesión"/>
                    </div>
                </form>
            </div>
        </div>
    )
}