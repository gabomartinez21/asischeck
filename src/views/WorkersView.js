import React from 'react';

export default function WorkersView(){
    return(
        <div className="dashboard">
            <div className="row">
                <div className="col-3 sidebar">
                    <h1>AsisCheck</h1>
                    <ul className="mt-5 nav flex-column">
                        <li className="nav-item">
                            <a href="/lista-trabajadores">Listado de Trabajadores</a>
                        </li>
                        <li className="nav-item">
                            <a href="/lista-proveedores">Listado de Proveedores</a>
                        </li>
                        <li className="nav-item">
                            <a href="/horarios">Listado de Horarios</a>
                        </li>
                        <li className="nav-item">
                            <a href="/areas">Listado de Áreas</a>
                        </li>
                    </ul>
                </div>
                <div class="col-9">
                    <div className="barra">
                        <p className="text-right">Hola, Gabriel</p>
                    </div>
                    <h1>Trabajadores</h1>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Departamento</th>
                                <th>Horario</th>
                                <th>DNI</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Juan Lopez</td>
                                <td>Ventas</td>
                                <td>Horario Mañana</td>
                                <td>46467676</td>
                            </tr>
                            <tr>
                                <td>Maria Mamani</td>
                                <td>Administración</td>
                                <td>Horario Mañana</td>
                                <td>52627656</td>
                            </tr>
                            <tr>
                                <td>Agata Jiménez</td>
                                <td>Administración</td>
                                <td>Horario Noche</td>
                                <td>34874956</td>
                            </tr>
                            <tr>
                                <td>Ricardo Martínez</td>
                                <td>Ventas</td>
                                <td>Horario Tarde</td>
                                <td>77446532</td>
                            </tr>
                            <tr>
                                <td>Kyara Hernandez</td>
                                <td>Ventas</td>
                                <td>Horario Tarde</td>
                                <td>45678321</td>
                            </tr>
                            <tr>
                                <td>Antonella Vargas</td>
                                <td>Gerencia</td>
                                <td>Horario Mañana</td>
                                <td>34657898</td>
                            </tr>
                            <tr>
                                <td>Carlos Andrade</td>
                                <td>Seguridad</td>
                                <td>Horario Noche</td>
                                <td>94857634</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}