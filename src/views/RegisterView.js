import React, {useState, useEffect} from 'react';
import { registro } from "../services/authServices";
import { crearUsuarios } from "../models/modelUsers.js";


export default function RegisterView(){

    // const {nombre, setNombre} = useState("");
    // const {correo, setCorreo} = useState("");
    // const {dni, setDni} = useState("");
    // const {tipo_horario, setHorario} = useState("");
    // const {tipo_departamento, setDepartamento} = useState("");

    const [usuario, setUsuario] = useState({
        nombre:'',
        dni:'',
        correo:'',
        horario:'',
        departamento:''
    })
    // console.log(usuario)
    const registrar = async (e) => {
        e.preventDefault();
        registro(usuario.correo, usuario.dni)
            .then((rpta) => {
                console.log(rpta)
                window.location.href="/login"
            }
            )
            .catch((err) => console.log(err));
        let peticion = await crearUsuarios(usuario);
        console.log(peticion)
    }
    const actualizarInput = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
    }

    return(
        <div className="bg-forms">
            <div className="carta-form">
                <h1>Registrate</h1>
                <form onSubmit={(e)=>registrar(e)}>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <input type="text" 
                                className="form-control" 
                                name="nombre" 
                                placeholder="Nombres"
                                value={usuario.nombre}
                                onChange={(e) => {
                                    actualizarInput(e)
                                }}
                            />
                        </div>
                        <div className="col-md-6 form-group">
                            <input type="text" className="form-control" name="dni" placeholder="DNI"
                            value={usuario.dni}
                            onChange={(e) => {
                                actualizarInput(e)
                            }}/>
                        </div>
                        <div className="col-12 form-group">
                            <input type="email" className="form-control" name="correo" placeholder="Correo"
                            value={usuario.correo}
                            onChange={(e) => {
                                actualizarInput(e)
                            }}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <select className="form-control" name="horario"
                            value={usuario.horario}
                            onChange={(e) => {
                                actualizarInput(e)
                            }}
                            >
                                <option value="0">Horario</option>
                                <option value="1">Horario Mañana</option>
                                <option value="2">Horario Mediodía</option>
                                <option value="3">Horario Tarde</option>
                                <option value="4">Horario Noche</option>
                            </select>
                        </div>
                        <div className="col-md-6 form-group">
                            <select className="form-control" name="departamento"
                            value={usuario.departamento}
                            onChange={(e) => {
                                actualizarInput(e)
                            }}>
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